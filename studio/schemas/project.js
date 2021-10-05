export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "projectLink",
      title: "Project Link",
      type: "url",
      validation: Rule =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    },
    {
      name: "projectImage",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
}
