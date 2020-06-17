export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ee9ba83b2c8e75dde138b6e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-wg6sqry2',
                  apiId: 'a93f4bf9-d634-4953-9805-9ec4348b8dae'
                },
                {
                  buildHookId: '5ee9ba8496ea08e7106f648f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-5h1s68yd',
                  apiId: '25665356-a318-4bad-bf62-73ae48d8380b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yuhanasy/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-5h1s68yd.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
