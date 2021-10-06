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
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "link",
      title: "Link",
      type: "url",
      validation: Rule =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    },
    {
      name: "githubLink",
      title: "Github Link",
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
