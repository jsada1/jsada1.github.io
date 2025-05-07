// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'jsada1', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['jsada1/microbiometutorial', 'jsada1/report'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Disease Presentation: DiGeorge Syndrome',
          description:
            'Presentation that informs students on the genetic disease called DiGeorge Syndrome',
          imageUrl:
            'https://github.com/jsada1/jsada1.github.io/blob/main/digeorge.png',
          link: 'https://github.com/jsada1/jsada1.github.io/blob/main/Disease%20Presentation_%20DiGeorge%20Syndrome.pdf',
        },
        {
          title: 'Arrhythmias',
          description:
            'Presentation that informs students on a heart condition called arrhythmia',
          imageUrl:
            'https://github.com/jsada1/jsada1.github.io/blob/main/arrhythmias.png',
          link: 'https://github.com/jsada1/jsada1.github.io/blob/main/Arrhythmias.pdf',
        },
      ],
    },
  },
  seo: {
    title: 'My Labs Website',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://jsada1.github.io',
    phone: '',
    email: 'jsada1@csustan.edu',
  },
  resume: {
    fileUrl:
      'https://github.com/jsada1/jsada1.github.io/raw/main/SadaCV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Bioinformatics',
    'Agarose Gel',
    'Aseptic Techniques',
    'Bacteria Isolation',
    'Gram Staining',
  ],
  experiences: [
    {
      company: 'Memorial Medical Center - Emergency Department',
      position: 'Medical Scribe',
      from: 'November 2023',
      to: 'Present',
      companyLink: 'https://www.vituity.com',
    },
    {
      company: 'California State University, Stanislaus - Learning Commons',
      position: 'Peer Tutor',
      from: 'August 2022',
      to: 'December 2023',
      companyLink: 'https://www.csustan.edu/learning-commons',
    },
  ],
  certifications: [
    {
      name: 'BLS Provider Certification',
      body: 'Lorem ipsum dolor sit amet',
      year: 'May 2023',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'California State University, Stanislaus',
      degree: 'B.S. in Biological Sciences',
      from: '2021',
      to: '2025',
    },
  ],
  publications: [
    {
      title: 'Draft Genome Sequence of Maricaulis maris DSM 4734 Isolated from Filtered Polluted Seawater',
      conferenceName: '',
      journalName: 'Microbiology Resource Announcements',
      authors: 'Chioma Chibuko, Elias Figueiredo, Sebastian Lepe, Melanie Rivera, Joseph Sada, Tricia A. Van Laar',
      link: 'https://github.com/jsada1/jsada1.github.io/raw/main/MRA_template_prokaryotic-eukaryotic_genome.pdf',
      description: 'This is a manuscript in submission: Here, we report the genome of Maricaulis maris DSM 4734 isolated from filtered polluted seawater. The whole genome was 3568848 bp long, with a GC content of 63.14%, and resistance to 12 antibiotics.',
    },
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'emerald',
      'aqua',
      'luxury',
    ],

    // Custom theme, applied to `procyon` theme
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
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
