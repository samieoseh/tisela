import { generateFromEmail } from "unique-username-generator";
import { Star } from "lucide-react";
import { databases } from "@/service/appwriteConfig";

export const getStars = (count) => {
  let starsSpan = [];
  for (let index = 0; index < count; index++) {
    starsSpan.push(<Star style={{ fill: "#ffd600", stroke: "#ffd600" }} />);
  }
  return starsSpan;
};

export const getCourseList = (category) => {
  return [];
};

export const validateForm = (email, password, name) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const errors = [];

  if (name !== null && name.length === 0) {
    errors.push("Name cannot be empty");
  }

  if (email !== null) {
    if (email.length === 0) {
      errors.push("Email cannot be empty");
    } else if (!emailRegex.test(email)) {
      errors.push("Email must be of this format: test@example.com");
    }
  }

  if (password !== null && password.length < 8) {
    errors.push("Password must contain at least 8 characters");
  }
  const formClean = errors.length === 0 ? true : false;
  return { formClean, errors };
};

export const storeToDatabase = async (user_id, email) => {
  const username = generateFromEmail(email);
  await databases.createDocument(
    process.env.NEXT_PUBLIC_DATABASE_ID,
    process.env.NEXT_PUBLIC_COLLECTION_ID,
    user_id,
    {
      bio: "",
      username: username,
      email: email,
    },
  );
};

export const refetchQueries = async (queryClient, keys) => {
  keys.map((key) => {
    queryClient.invalidateQueries({
      queryKey: [key],
    });
  });

  await queryClient.refetchQueries({ stale: true });
};
