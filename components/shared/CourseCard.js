import Image from "next/image";
import { getStars } from "@/lib/customUtils";

const CourseCard = ({ title, price, starsCount, reviewCount, banner }) => {
  return (
    <div className="w-[20rem] flex flex-wrap border h-auto rounded-md shadow-md mx-auto pb-4 cursor-pointer bg-white">
      <div className="w-[90%] mx-auto my-4">
        <div className="w-full h-[10rem] relative rounded-lg overflow-hidden">
          <Image
            layout="fill"
            objectFit="cover"
            src={banner}
            alt="course image"
          />
        </div>
        <h2 className="font-bold text-[1rem] mt-1">{title}</h2>
        <div className="flex gap-2 mt-1 flex-wrap">
          <p className="text-[0.6rem] text-gray-500 border p-1">Python</p>
          <p className="text-[0.6rem] text-gray-500 border p-1">Javascript</p>
          <p className="text-[0.6rem] text-gray-500 border p-1">Html</p>
          <p className="text-[0.6rem] text-gray-500 border p-1">CSS</p>
          <p className="text-[0.6rem] text-gray-500 border p-1">Programming</p>
          <p className="text-[0.6rem] text-gray-500 border p-1">Tech</p>
        </div>
        <p className="text-[1rem] mt-1 font-bold">${price}</p>
        <div className="flex justify-between mt-1 self-end">
          <div className="flex justify-center items-center">
            <div className="flex gap-1">
              {getStars(starsCount).map((starSpan, id) => (
                <span key={id}>{starSpan}</span>
              ))}{" "}
            </div>
            <div>
              <p className="px-1 text-[10px]">({reviewCount})</p>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-blue-500 text-white border mx-auto p-2 text-xs rounded">
        Start Learning
      </button>
    </div>
  );
};

export default CourseCard;
