// gitprofile.config.js

const config = {
  github: {
    username: 'ajiekusumadhany', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'ajiekusumadhany',
    twitter: 'ajiekusumadhany',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://ajiekusumadhany.com',
    phone: '',
    email: 'ajiekusumadhany@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C++',
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'Git',
    'Vue.js',
    'CSS',
    'Bootstrap',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Core Initiative',
      position: 'Project-Based Internship Front End Developer',
      from: 'November 2023',
      to: 'Desember 2023',
      companyLink: 'https://coreinitiative.id/',
    },
  ],
   certifications: [
    {
      name: 'Belajar Membuat Front-End Web untuk Pemula',
      body: 'Dicoding Indonesia',
      year: 'October 2023',
      link: 'https://www.dicoding.com/certificates/EYX4YO3VOZDL'
    },
    {
      name: 'Belajar Dasar Pemrograman Web',
      body: 'Dicoding Indonesia',
      year: 'September 2023',
      link: 'https://www.dicoding.com/certificates/MRZMLQGL0XYQ'
    },
    {
      name: 'Belajar Dasar Structured Query Language (SQL)',
      body: 'Dicoding Indonesia',
      year: 'Agustus 2023',
      link: 'https://www.dicoding.com/certificates/4EXGN26NQZRL'
    },
    {
      name: 'Belajar Dasar Manajemen Proyek',
      body: 'Dicoding Indonesia',
      year: 'July 2023',
      link: 'https://www.dicoding.com/certificates/0LZ09NRMNZ65'
    },
    {
      name: 'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software',
      body: 'Dicoding Indonesia',
      year: 'Agustus 2023',
      link: 'https://www.dicoding.com/certificates/JMZV9J81QPN9'
    },
  ], 
  education: [
    {
      institution: 'Universitas Dian Nuswantoro',
      degree: 'Teknik Informatika',
      from: '2021',
      to: 'Present',
    },
    {
      institution: 'Smk N 2 Kudus',
      degree: 'Teknik Audio Video',
      from: '2018',
      to: '2021',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  /*externalProjects: [
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],*/
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-CH37WDGNS7', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'light',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with ❤️ in Kudus, ID`,
};

export default config;
