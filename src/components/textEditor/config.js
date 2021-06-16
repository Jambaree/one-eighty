const config = {
  id: "texteditor",
  label: "Text Editor",
  fields: [
    {
      id: "flex",
      type: "flexible_content",
      label: "Rich Text",
      items: [
        {
          id: "text",
          type: "layout",
          label: "Text",
          fields: [
            {
              id: "text",
              type: "wysiwyg",
              label: "Text",
            },
          ],
        },
        // {
        //   id: 'gallery',
        //   type: 'layout',
        //   label: 'Gallery',
        //   fields: [
        //     {
        //       id: 'columns',
        //       type: 'number',
        //       label: 'Columns',
        //       min: 1,
        //       max: 4,
        //       defaultValue: 2,
        //     },
        //     {
        //       id: 'gallery',
        //       type: 'gallery',
        //       label: 'Gallery',
        //     },
        //   ],
        // },
        {
          id: "embed",
          type: "layout",
          label: "Embed",
          fields: [
            {
              id: "url",
              type: "text",
              label: "Url",
            },
          ],
        },
      ],
    },
  ],
}

export default config
