
import { defineConfig } from 'vitepress'

export default defineConfig({
  base: "/",
  lang: 'fr-CA',
  title: "ThinkiWiki",
  description: "Ressources par matière",

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]
  ],
  
  themeConfig: {
    // logo: '/logo.png',
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'modeles', link: '/autre/modeles/' },
      {
        text: 'Matières',
        items: [
          { text: 'Santé', link: '/matieres/sante/' },
          { text: 'Ma Philosophie', link: '/matieres/maphilosophie/' },
          { text: 'Mathématiques', link: '/matieres/mathematiques/' },
          { text: 'Programmation', link: '/matieres/programmation/' },
          { text: 'Web', link: '/matieres/web/' },
          { text: 'Bases de données', link: '/matieres/base-de-donnees/' },
          { text: 'Technologie', link: '/matieres/technologie/' },
          { text: 'Intelligence artificielle', link: '/matieres/ia/' }
        ]
      }
    ],

    footer: {
      message: "© 2026 ThinkiWiki - Portail pédagogique - Tous droits réservés",
      copyright: "Créé par Taoufik Lachhab"
    },
    
    sidebar: {

      '/matieres/sante/': createSidebar('sante'),
      '/matieres/maphilosophie/': createSidebar('maphilosophie'),
      '/matieres/mathematiques/': createSidebar('mathematiques'),
      '/matieres/programmation/': createSidebar('programmation'),
      '/matieres/web/': createSidebar('web'),
      '/matieres/base-de-donnees/': createSidebar('base-de-donnees'),
      '/matieres/technologie/': createSidebar('technologie'),
      '/matieres/ai/': createSidebar('ai')

    },

    search: {
      provider: 'local'
    }
  }
})

function createSidebar(matiere: string) {
  return [
    {
      text: 'Cours',
      items: [
        { text: 'Accueil', link: `/matieres/${matiere}/` }
      ]
    },
    {
      text: 'Exercices',
      items: [
        { text: 'Accueil', link: `/matieres/${matiere}/` }
      ]
    },
    {
      text: 'Corrections',
      items: [
        { text: 'Accueil', link: `/matieres/${matiere}/` }
      ]
    }
  ]
}
