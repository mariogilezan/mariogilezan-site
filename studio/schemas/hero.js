export default {
  name: "heroSection",
  title: "Hero Section",
  type: "document",
  fields: [
    {
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
}
