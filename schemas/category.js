export default {
  title: 'Category',
  name: 'category',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Products',
      name: 'products',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
      validation: Rule => Rule.required().min(1),
    },
  ],
}