import tailwindColor from '~/composable/tailwindColor'

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html) => {
    const { theme: { primary } }: { theme: { primary: string } } = useAppConfig()
    const palette = tailwindColor(primary)
    if (!palette)
      return

    let primaryColors = ''
    for (const color in palette.colors)
      primaryColors += `--primary-${color}: ${palette.colors[color]}; `

    html.head.push(`<style>:root{${primaryColors}}</style>`)
  })
})
