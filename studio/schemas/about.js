export default {
  name: "aboutSection",
  title: "About Section",
  type: "document",
  fields: [
    {
      name: "aboutTitle",
      title: "About Title",
      type: "string",
    },
    {
      name: "aboutDescription",
      title: "About Description",
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
