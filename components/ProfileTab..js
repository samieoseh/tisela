import { useState } from "react";
import CompletedCourses from "./CompletedCourses";
import Discussion from "./Discussion";
import ProfileCourses from "./ProfileCourses";

const ProfileTab = () => {
  const [slice, setSlice] = useState(0);
  const buttons = [
    { text: "Courses" },
    { text: "Completed" },
    { text: "Discussion" },
  ];

  return (
    <div>
      <div className="flex justify-between rounded bg-gray-200 p-2 mt-4">
        {buttons.map((btn, id) => (
          <button
            key={id}
            className={`flex-1 py-2 rounded shadow:sm ${
              id === slice ? "bg-white" : ""
            } ${id !== slice ? "text-gray-600" : ""}`}
            onClick={() => setSlice(id)}
          >
            {btn.text}
          </button>
        ))}
      </div>
      <div>
        {slice === 0 && <ProfileCourses />}
        {slice === 1 && <CompletedCourses />}
        {slice === 2 && <Discussion />}
      </div>
    </div>
  );
};

export default ProfileTab;
