const course = {
  name: "course",
  title: "Course",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "starsCount",
      title: "Stars Count",
      type: "number",
    },
    {
      name: "reviewsCount",
      title: "Reviews Count",
      type: "number",
    },
    {
      name: "banner",
      title: "Banner",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          type: "string",
        },
      ],
    },
    {
      name: "content",
      title: "Content",
      type: "reference",
      to: { type: "content" },
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
  ],
};

export default course;
