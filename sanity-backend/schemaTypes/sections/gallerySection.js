export default {
    name: 'gallerySection',
    title: 'Gallery Section',
    type: 'object',
    fields: [
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'image' }],
      },
    ],
  };
  