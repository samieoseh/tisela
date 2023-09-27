const content = {
  name: "content",
  title: "Course Content",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "lessons",
      title: "Lessons",
      type: "array",
      of: [{ type: "reference", to: { type: "lesson" } }],
    },
  ],
};

export default content;
