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
          { text: 'Intelligence artificielle', link: '/matieres/ai/' }
        ]
      }
    ],

    footer: {
      message: "© 2026 ThinkiWiki - Portail pédagogique - Tous droits réservés",
      copyright: "Créé par Taoufik Lachhab"
    },
    
          // Sidebar personnalisée pour la Santé

    sidebar: {
  '/matieres/sante/': [
    {
      text: 'Cours de Santé',
      items: [
        { text: 'Accueil Santé', link: '/matieres/sante/' }
      ]
    },

    {
      text: 'Cardiologie',
      items: [
        { text: 'Hypertension artérielle', link: '/matieres/sante/cours/HTA-cardio' },
        { text: 'Angine de poitrine (Angor)', link: '/matieres/sante/cours/ANGOR-cardio' },
        { text: 'Infarctus du myocarde', link: '/matieres/sante/cours/infarctus-du-myocarde-cardio' },
        { text: 'Insuffisance cardiaque', link: '/matieres/sante/cours/insuffisance-cardiaque-cardio' },
        { text: 'Péricardite', link: '/matieres/sante/cours/péricardite' }
      ]
    },

    {
      text: 'Pneumologie',
      items: [
        { text: 'Asthme', link: '/matieres/sante/cours/asthme-pneumo' },
        { text: 'BPCO', link: '/matieres/sante/cours/BPCO-pneumo' },
        { text: 'Bronchite aiguë', link: '/matieres/sante/cours/bronchite-aiguë' },
        { text: 'Bronchite chronique', link: '/matieres/sante/cours/bronchite-chronique' },
        { text: 'Pneumothorax', link: '/matieres/sante/cours/pneumothorax' },
        { text: 'Embolie pulmonaire', link: '/matieres/sante/cours/embolie-pneumo' },
        { text: 'Insuffisance respiratoire', link: '/matieres/sante/cours/insuffisance-respiratoire-pneumo' },
        { text: 'Pneumonie', link: '/matieres/sante/cours/pneumonie-neuro' }
      ]
    },

    {
      text: 'Neurologie',
      items: [
        { text: 'AVC', link: '/matieres/sante/cours/AVC-neuro' },
        { text: 'Épilepsie', link: '/matieres/sante/cours/épilepsie' },
        { text: 'Migraine', link: '/matieres/sante/cours/migraine' },
        { text: 'Syndrome de Guillain-Barré', link: '/matieres/sante/cours/syndrome-de-Guillain-Barré' },
        { text: 'Sclérose en plaques', link: '/matieres/sante/cours/sclérose-en-plaques-neuro' },
        { text: 'Parkinson', link: '/matieres/sante/cours/Parkinson-neuro' },
        { text: 'Alzheimer', link: '/matieres/sante/cours/Alzheimer-neuro' },
        { text: 'Méningite', link: '/matieres/sante/cours/méningite' },
        { text: 'Méningo-encéphalite', link: '/matieres/sante/cours/méningo-encéphalite' }
      ]
    },

    {
      text: 'Gastroentérologie',
      items: [
        { text: 'Gastrite', link: '/matieres/sante/cours/gastrite' },
        { text: 'Ulcère gastrique', link: '/matieres/sante/cours/ulcère-gastrique-neuro' },
        { text: 'Appendicite', link: '/matieres/sante/cours/appendicite-gastro' },
        { text: 'Maladie de Crohn', link: '/matieres/sante/cours/Crohn' },
        { text: 'Colite ulcéreuse', link: '/matieres/sante/cours/colite-ulcéreuse' },
        { text: 'Cirrhose', link: '/matieres/sante/cours/cirrhose-gastro' },
        { text: 'Hépatite', link: '/matieres/sante/cours/hépatite-gastro' },
        { text: 'Cholécystite', link: '/matieres/sante/cours/cholécystite' },
        { text: 'Calculs biliaires', link: '/matieres/sante/cours/calculs-biliaires' },
        { text: 'Pancréatite', link: '/matieres/sante/cours/pancréatite-gastro' }
      ]
    },

    {
      text: 'Endocrinologie',
      items: [
        { text: 'Diabète', link: '/matieres/sante/cours/diabete-endo' },
        { text: 'Affections thyroïdiennes', link: '/matieres/sante/cours/affections-thyroïdiennes' }
      ]
    },

    {
      text: 'Infectiologie',
      items: [
        { text: 'VIH / SIDA', link: '/matieres/sante/cours/VIH' },
        { text: 'Rougeole', link: '/matieres/sante/cours/rougeole' },
        { text: 'Varicelle', link: '/matieres/sante/cours/varicelle' },
        { text: 'Coqueluche', link: '/matieres/sante/cours/coqueluche' },
        { text: 'Tétanos', link: '/matieres/sante/cours/tétanos' },
        { text: 'Septicémie', link: '/matieres/sante/cours/septicémie-infectio' },
        { text: 'Choc septique', link: '/matieres/sante/cours/choc-septique-infectio' },
        { text: 'Infection urinaire sévère', link: '/matieres/sante/cours/infection-urinaire-sévère' }
      ]
    },

    {
      text: 'Autres spécialités',
      items: [
        { text: 'Anémie', link: '/matieres/sante/cours/anémie' },
        { text: 'Insuffisance rénale', link: '/matieres/sante/cours/insuffisance-rénale' }
      ]
    }
  ],


 // Sidebar pour Ma Philosophie


      '/matieres/maphilosophie/': [
        {
          text: 'Cours de Philosophie',
          items: [
            { text: 'Accueil', link: '/matieres/maphilosophie/' }
          ]
        },
        {
          text: 'Exercices',
          items: [
            { text: 'Exercices', link: '/matieres/maphilosophie/' }
          ]
        },
        {
          text: 'Corrections',
          items: [
            { text: 'Corrections', link: '/matieres/maphilosophie/' }
          ]
        }
      ],

      // Sidebar pour Mathématiques
      '/matieres/mathematiques/': [
        {
          text: 'Cours de Mathématiques',
          items: [
            { text: 'Accueil', link: '/matieres/mathematiques/' }
          ]
        },
        {
          text: 'Exercices',
          items: [
            { text: 'Exercices', link: '/matieres/mathematiques/' }
          ]
        },
        {
          text: 'Corrections',
          items: [
            { text: 'Corrections', link: '/matieres/mathematiques/' }
          ]
        }
      ],

      // Sidebar pour Programmation
      '/matieres/programmation/': [
        {
          text: 'Cours de Programmation',
          items: [
            { text: 'Accueil', link: '/matieres/programmation/' }
          ]
        },
        {
          text: 'Exercices',
          items: [
            { text: 'Exercices', link: '/matieres/programmation/' }
          ]
        },
        {
          text: 'Corrections',
          items: [
            { text: 'Corrections', link: '/matieres/programmation/' }
          ]
        }
      ],

      // Sidebar pour Web
      '/matieres/web/': [
        {
          text: 'Cours Web',
          items: [
            { text: 'Accueil', link: '/matieres/web/' }
          ]
        },
        {
          text: 'Exercices',
          items: [
            { text: 'Exercices', link: '/matieres/web/' }
          ]
        },
        {
          text: 'Corrections',
          items: [
            { text: 'Corrections', link: '/matieres/web/' }
          ]
        }
      ],

      // Sidebar pour Bases de données
      '/matieres/base-de-donnees/': [
        {
          text: 'Cours BD',
          items: [
            { text: 'Accueil', link: '/matieres/base-de-donnees/' }
          ]
        },
        {
          text: 'Exercices',
          items: [
            { text: 'Exercices', link: '/matieres/base-de-donnees/' }
          ]
        },
        {
          text: 'Corrections',
          items: [
            { text: 'Corrections', link: '/matieres/base-de-donnees/' }
          ]
        }
      ],

      // Sidebar pour Technologie
      '/matieres/technologie/': [
        {
          text: 'Cours Technologie',
          items: [
            { text: 'Accueil', link: '/matieres/technologie/' }
          ]
        },
        {
          text: 'Exercices',
          items: [
            { text: 'Exercices', link: '/matieres/technologie/' }
          ]
        },
        {
          text: 'Corrections',
          items: [
            { text: 'Corrections', link: '/matieres/technologie/' }
          ]
        }
      ],

      // Sidebar pour Intelligence Artificielle
      '/matieres/ai/': [
        {
          text: 'Cours IA',
          items: [
            { text: 'Accueil', link: '/matieres/ai/' }
          ]
        },
        {
          text: 'Exercices',
          items: [
            { text: 'Exercices', link: '/matieres/ai/' }
          ]
        },
        {
          text: 'Corrections',
          items: [
            { text: 'Corrections', link: '/matieres/ai/' }
          ]
        }
      ]
    },

    search: {
      provider: 'local'
    }
  }
})