import slugify from '../utils/slugify'

export default {
  title: "Work",
  name: 'work',
  type: "document",
  fields: [
    {
      title: "Title",
      description: "The name of this release",
      name: "title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'This is required for page routing and can be auto-generated by pressing "generate"',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: title => slugify(title)
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
  ]
}