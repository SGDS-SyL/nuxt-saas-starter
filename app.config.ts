export default defineAppConfig({
  theme: {
    primary: '#3b82f6',
  },
  header: {
    logo: {
      link: '/',
      name: 'SGDS Sass',
      light: '/images/logo.svg',
      dark: '/images/logo-white.svg',
    },
    nav: [
      {
        name: 'Home',
        link: '/',
        active: true,
      },
      {
        name: 'About Us',
        link: '/about-us',
      },
      {
        name: 'Pricing',
        link: '/pricing',
      },
      {
        name: 'Contact',
        link: '/contact',
      },
    ],
    cta: {
      name: 'Sign up now',
      link: '/',
    },
  },
})
