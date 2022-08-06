export default {
  title: 'Product',
  name: 'product',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Sale Price',
      name: 'salePrice',
      type: 'number',
    },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [{ type: 'image' }],
      options: { layout: 'grid' },
      validation: Rule => Rule.required().min(1),
    },
    {
      title: 'Sizes',
      name: 'sizes',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'size' }] }],
      validation: Rule => Rule.required().min(1),
    },
    {
      title: 'Colors',
      name: 'colors',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'color' }] }],
      validation: Rule => Rule.required().min(1),
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      images: 'images'
    },
    prepare(selection) {
      const { title, images } = selection
      return {
        title,
        media: images && images[0],
      }
    }
  }
}