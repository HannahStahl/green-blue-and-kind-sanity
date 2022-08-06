export default {
  title: 'Color',
  name: 'color',
  type: 'document',
  fields: [
    {
      title: 'Color',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
}