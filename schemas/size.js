export default {
  title: 'Size',
  name: 'size',
  type: 'document',
  fields: [
    {
      title: 'Size',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
}