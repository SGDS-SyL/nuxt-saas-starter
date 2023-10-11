declare global {
  const headers = ['Header1', 'Header2'] as const
  const heros = ['Hero1', 'Hero2', 'Hero3'] as const

  type IAppHeader = typeof headers[number]
  type IAppHero = typeof heros[number]

  interface IHero {
    title: string
    content: string
    notice?: INotice
    buttons?: IBtn[]
    image?: {
      light: string
      dark: string
    }
    background?: {
      light: string
      dark: string
    }
  }

  interface INotice {
    title: string
    content: string
    link: string
  }

  interface IBtn {
    label: string
    link: string
    class?: string
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
      path: string
      name: string
    }
  }

  interface ICTA {
    path: string
    name: string
  }
}

export {}
