import { Toast } from '@gravis.finance/uikit'

export type TranslatableText =
  | string
  | {
      id: number
      fallback: string
      data?: {
        [key: string]: string | number
      }
    }

export interface ToastsState {
  data: Toast[]
}

// Global state
export interface State {
  toasts: ToastsState
}
