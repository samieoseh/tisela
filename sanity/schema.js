import blockContent from "./schemas/blockContent";
import author from "./schemas/author";
import content from "./schemas/content";
import course from "./schemas/course";
import lesson from "./schemas/lesson";

export const schema = {
  types: [content, course, lesson, author, blockContent],
};
