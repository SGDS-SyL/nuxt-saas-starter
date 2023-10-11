declare module 'nuxt/schema' {
  interface AppConfigInput {
    theme: ITheme
    header: IHeader
  }
}

interface ITheme {
  primary: string
}

interface IHeader {
  logo: ILogo
  nav: IMainNav
  cta?: ICTA
}

interface ILogo {
  link: string
  name: string
  light: string
  dark: string
}

interface IMainNav {
  [index: number]: {
    link: string
    name: string
    active?: boolean
  }
}

interface ICTA {
  link: string
  name: string
}

export {}
