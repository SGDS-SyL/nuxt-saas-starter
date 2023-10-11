declare module 'nuxt/schema' {
  interface AppConfigInput {
    theme: ITheme
  }
}

interface ITheme {
  primary: string
}

export {}
