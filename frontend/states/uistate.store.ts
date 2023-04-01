import { defineStore } from "pinia"

type bodyState = {
    hideScroll?: boolean
}

export interface UiState {
  body: bodyState
}

export const useUiStateStore = defineStore('uistate', {
  state (): UiState {
    return {
        body: {}
    }
  },
  actions: {
    setBody (stateName: keyof bodyState, value: any) {
      this.body[stateName] = value
    }
  }
})
