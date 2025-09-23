export default {
  color: '#ff00b8',
  icon: {
    src: 'img.png',
    type: 'png',
    sizes: '240x240',
  },
  locale: 'en-gb',
  name: 'Grvs44',
  pronouns: 'she/her',
  description: `
Welcome to my page!
Description goes here
`,
  about: `
This is a short paragraph about me.
`,
  photo: 'img.png',
  socials: [
    'https://github.com/Grvs44',
    'https://bsky.app/profile/grvs44.bsky.social',
  ],
  projects: [
    {
      name: 'Project 1',
      photo: 'img.png',
      alt: 'Alt text for project 1 photo',
      text: 'This is my project',
      links: [
        {
          text: 'View on GitHub',
          url: 'https://github.com/Grvs44/portfolio-page',
        },
        { text: 'View LinkedIn post' },
      ],
    },
    {
      name: 'Project 2',
      text: 'This project does not have an image',
      links: [{ text: 'View on GitHub', url: 'https://github.com/Grvs44' }],
    },
  ],
  skills: ['Skill 1', 'Skill 2'],
}
