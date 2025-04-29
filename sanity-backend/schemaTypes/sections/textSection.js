export default {
    name: 'textSection',
    title: 'Text Section',
    type: 'object',
    fields: [
      { name: 'heading', title: 'Heading', type: 'string' },
      { name: 'body', title: 'Body Text', type: 'array', of: [{ type: 'block' }] },
    ],
  };
  