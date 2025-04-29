export default {
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Page Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'slug',
        title: 'Slug (URL Path)',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'sections',
        title: 'Page Sections',
        type: 'array',
        of: [
          { type: 'heroSection' },
          { type: 'textSection' },
          { type: 'imageSection' },
          { type: 'videoSection' },
          { type: 'gallerySection' },
          { type: 'ctaSection' },
        ],
      },
      {
        name: 'metaTitle',
        title: 'Meta Title (SEO)',
        type: 'string',
      },
      {
        name: 'metaDescription',
        title: 'Meta Description (SEO)',
        type: 'text',
        rows: 3,
      },
    ],
  };
  