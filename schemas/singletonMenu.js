export default {
  title: 'Menu',
  name: 'menu',
  type: 'document',
  //__experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Butter Bar',
      name: 'butter',
      type: 'string',
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title }) {
      return {
        title
      }
    }
  }
}