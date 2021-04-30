import { Action } from 'redux'

export interface AppState {
  settingState: SettingState
}

export type AppTheme = 'light' | 'dark' | 'system'

export interface SettingState {
  firstOpen: boolean
  theme: AppTheme
  language: string
  loading: boolean
  adminMode: boolean
  configs: AppConfig
}

export interface SettingAction extends Action<string> {
  theme?: AppTheme
  language?: string
  adminMode?: boolean
  configs?: AppConfig
}

export const GET_STARTED = 'GET_STARTED'
export const SET_THEME = 'SET_THEME'
export const SET_LANGUAGE = 'SET_LANGUAGE'
export const LOAD_DONE = 'LOAD_DONE'
export const TOGGLE_ADMIN_MODE = 'TOGGLE_ADMIN_MODE'
export const SET_CONFIG = 'SET_CONFIG'

export interface AppConfig {
  Ios: { version: string; priority: string }
  Android: { version: string; priority: string }
  Config: {}
}
