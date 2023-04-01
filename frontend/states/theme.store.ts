import { defineStore } from 'pinia'

type themesName = 'dark' | 'light'

export interface ITheme {
  name: themesName,
  cssClass: string,
  dark: boolean
}

export const useThemeStore = defineStore('theme', {
  state (): {
    _currentTheme: themesName
    themes: ITheme[]
  } {
    return {
      _currentTheme: 'dark',
      themes: [
        {
          name: 'dark',
          cssClass: 'theme-dark',
          dark: true
        },
        {
          name: 'light',
          cssClass: 'theme-light',
          dark: false
        }
      ]
    }
  },
  actions: {
    setTheme (theme: themesName) {
      this._currentTheme = theme
    }
  },
  getters: {
    currentTheme (): ITheme {
      return this.themes.find(t => t.name === this._currentTheme) as ITheme
    }
  }
})
