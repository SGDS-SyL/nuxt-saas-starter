export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html) => {
    html.head.push(`<script>
    localStorage.getItem("vueuse-color-scheme") == 'dark' 
    ? document.documentElement.classList.add("dark") 
    : document.documentElement.classList.remove("dark")
    </script>`)
  })
})
