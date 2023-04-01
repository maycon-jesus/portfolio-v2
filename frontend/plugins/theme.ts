import { type ITheme, useThemeStore } from '~/states/theme.store'

class ThemePlugin {
  private readonly themeStore = useThemeStore()
  private readonly useBreakpoint = useBreakpoints({
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1248,
    xl: 1888
  })

  get current(): ITheme {
    return this.themeStore.currentTheme
  }

  breakpoints = {
    // Only
    xsOnly: this.useBreakpoint.smaller('sm'),
    smOnly: this.useBreakpoint.between('sm', 'md'),
    mdOnly: this.useBreakpoint.between('md', 'lg'),
    lgOnly: this.useBreakpoint.between('lg', 'xl'),
    xlOnly: this.useBreakpoint.greater('xl'),

    // And up
    smAndUp: this.useBreakpoint.greater('sm'),
    mdAndUp: this.useBreakpoint.greater('md'),
    lgAndUp: this.useBreakpoint.greater('lg'),

    // And down
    smAndDown: this.useBreakpoint.smaller('md'),
    mdAndDown: this.useBreakpoint.smaller('lg'),
    lgAndDown: this.useBreakpoint.smaller('xl')
  }
}

export default defineNuxtPlugin((nuxt) => {
  return {
    provide: {
      theme: new ThemePlugin()
    }
  }
})
