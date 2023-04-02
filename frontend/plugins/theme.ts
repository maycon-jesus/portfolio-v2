import { type ITheme, useThemeStore } from '~/states/theme.store'

class ThemePlugin {
  private readonly themeStore = useThemeStore()

  get current(): ITheme {
    return this.themeStore.currentTheme
  }
}

export default defineNuxtPlugin((nuxt) => {
  return {
    provide: {
      theme: new ThemePlugin()
    }
  }
})
