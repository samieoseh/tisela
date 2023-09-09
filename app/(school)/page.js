"use client";
import { account } from "@/service/appwriteConfig";
import { useEffect, useState } from "react";
import { getCurrentUser } from "@/lib/appwriteUtils";
import Link from "next/link";

const HomePage = () => {
  const [userCookie, setCookie] = useState(null);

  useEffect(() => {
    const user = getCurrentUser();
    setCookie(user);
  }, []);

  return (
    <main>
      <h1>LEARNING WITHOUT LIMITS</h1>
      <p>
        Break free from traditional boundaries. With our e-learning resources,
        you can learn, grow, and thrive no matter where you are
      </p>
      <div>
        <Link href="/learnmore">Learn More</Link>
        <Link href="/signup">Get Started</Link>
      </div>
    </main>
  );
};

export default HomePage;
