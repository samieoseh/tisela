import Image from "next/image";
import { getStars } from "@/lib/customUtils";

const CourseCard = ({
  title,
  label,
  price,
  starsCount,
  reviewCounts,
  banner,
}) => {
  const levelStyle = {
    Beginner: "bg-green-500",
    Intermediate: "bg-blue-500",
    Advanced: "bg-orange-500",
    Expert: "bg-red-500",
  };
  return (
    <div className="w-[20rem] flex flex-wrap border h-auto rounded-md shadow-md mx-auto pb-2 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300">
      <div className="w-[90%] mx-auto my-4">
        <div className="w-full h-[10rem] relative rounded-lg overflow-hidden">
          <Image
            layout="fill"
            objectFit="cover"
            src={banner}
            alt="course image"
          />
        </div>
        <h2 className="font-bold text-xl mt-4">{title}</h2>
        <p className="text-2xl font-extralight mt-4 text-gray-500">{price}</p>
        <div className="flex justify-between mt-2 self-end">
          <div className="flex items-center">
            <div className="flex gap-1">
              {getStars(starsCount).map((starSpan, id) => (
                <span key={id}>{starSpan}</span>
              ))}{" "}
            </div>
            <p className="text-xs px-1 text-gray-500">({reviewCounts})</p>
          </div>
          <div className={`${levelStyle[label]} p-1 rounded-lg`}>
            <p className="text-xs text-gray-900">{label}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// title="Introduction to React and Next.js"
//             label="Beginner"
//             price="$250"
//             stars={4}
//             reviewCounts={1200}
//             banner="./mona.jpg"
export default CourseCard;
