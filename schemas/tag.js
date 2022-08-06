export default {
  title: 'Tag',
  name: 'tag',
  type: 'document',
  fields: [
    {
      title: 'Tag',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
}