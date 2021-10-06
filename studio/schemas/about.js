export default {
  name: "aboutSection",
  title: "About Section",
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
      name: "hobbies",
      title: "Hobbies",
      type: "text",
    },
    {
      name: "stacks",
      title: "Stacks",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "aboutImage",
      title: "About Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
}
