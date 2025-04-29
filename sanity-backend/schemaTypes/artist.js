export default {
    name: 'artist',
    title: 'Artist',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, 
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'instrument',
        title: 'Music Instrument',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'externalLink',
        title: 'External Profile Link',
        type: 'url',
        description: 'Link to the artist’s external profile (Instagram, Website, etc.)',
        validation: (Rule) => Rule.uri({
          scheme: ['http', 'https'],
        }),
      },
    ],
  };
  