import { LucideChevronDown, LucideChevronUp } from "lucide-react";
import { useState } from "react";
const TableOfContent = ({
  course,
  setCurrentContentIndex,
  setCurrentContentLessonIndex,
}) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <div className="flex justify-between">
        <h2 className="text-xl">Table of Content</h2>
        <LucideChevronDown
          className={`${!showContent ? "block" : "hidden"} cursor-pointer`}
          onClick={() => setShowContent(!showContent)}
        />
        <LucideChevronUp
          className={`${showContent ? "block" : "hidden"} cursor-pointer`}
          onClick={() => setShowContent(!showContent)}
        />
      </div>
      <div className={`${showContent ? "block" : "hidden"}`}>
        <ul className="py-2">
          {course.map((content, contentId) => (
            <li key={contentId} className="text-sm py-1">
              <div>
                <h4>{content.lessonTitle}</h4>
                <ul>
                  {content.lessons.map((lesson, contentLessonId) => (
                    <li
                      key={contentLessonId}
                      className="list-disc ml-8 text-xs cursor-pointer py-1 border"
                      onClick={() => {
                        setCurrentContentIndex(contentId);
                        setCurrentContentLessonIndex(contentLessonId);
                      }}
                    >
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TableOfContent;
