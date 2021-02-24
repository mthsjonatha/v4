module.exports = {
  email: 'mthsjonatha@gmail.com',

  socialMedia: [
    {
      name: 'Telegram',
      url: 'https://t.me/mathjonatha',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/math_jonatha/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/mathjonatha/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/mthsjonatha/',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/mthsjonatha/',
    },
  ],

  navLinks: [
    {
      name: 'Sobre',
      url: '/#about',
    },
    {
      name: 'Experiência',
      url: '/#jobs',
    },
    {
      name: 'Projetos',
      url: '/#projects',
    },
    {
      name: 'Contato',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
