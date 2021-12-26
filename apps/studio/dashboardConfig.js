export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'kyruodioso/sanity-angular-website'
      }
    },
    { name: 'structure-menu' },
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
                  buildHookId: '61c8d8aab5f4a20cae6c7cd2',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-website-studio-n1s1zcq2',
                  apiId: '03628272-873c-4e5c-82b5-ad7609221cc5'
                },
                {
                  buildHookId: '61c8d8aa56e2ad9fe56872e3',
                  title: 'Website',
                  name: 'sanity-angular-website-web-tmbp9svh',
                  apiId: '66bddecd-7013-4a3f-8642-a49fe06da24f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kyruodioso/sanity-angular-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-website-web-tmbp9svh.netlify.app', category: 'apps'}
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
