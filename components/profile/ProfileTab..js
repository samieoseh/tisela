"use client";
import { useState } from "react";
import CourseList from "../shared/CourseList";

const ProfileTab = () => {
  const [slice, setSlice] = useState(0);

  const buttons = [
    { text: "Enrolled" },
    { text: "Completed" },
    { text: "Saved" },
  ];
  const courses = [];
  return (
    <div className="w-full">
      <div className="flex justify-between p-2 mt-4">
        {buttons.map((btn, id) => (
          <button
            key={id}
            className={`flex-1 py-2 shadow:sm  ${
              id === slice ? "text-gray-900 border-b-2 border-blue-500" : ""
            } ${id !== slice ? "text-gray-600" : ""}`}
            onClick={() => setSlice(id)}
          >
            {btn.text}
          </button>
        ))}
      </div>
      <div>
        {slice === 0 && <CourseList courses={courses} />}
        {slice === 1 && <CourseList courses={courses} />}
        {slice === 2 && <CourseList courses={courses} />}
      </div>
    </div>
  );
};

export default ProfileTab;
