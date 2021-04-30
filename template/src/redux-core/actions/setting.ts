import AsyncStorage from '@react-native-async-storage/async-storage'
import { Dispatch } from 'redux'
import {
  AppConfig,
  AppTheme,
  GET_STARTED,
  LOAD_DONE,
  SettingAction,
  SET_CONFIG,
  SET_LANGUAGE,
  SET_THEME,
  TOGGLE_ADMIN_MODE,
} from 'types'

export const getStarted = () => {
  return async (dispatch: Dispatch<SettingAction>) => {
    await AsyncStorage.setItem('firstOpen', 'false')
    dispatch({ type: GET_STARTED })
  }
}

export const setTheme = (theme: AppTheme) => {
  return async (dispatch: Dispatch<SettingAction>) => {
    await AsyncStorage.setItem('theme', theme)
    dispatch({ type: SET_THEME, theme })
  }
}

export const setLanguage = (language: string) => {
  return async (dispatch: Dispatch<SettingAction>) => {
    await AsyncStorage.setItem('language', language)
    dispatch({ type: SET_LANGUAGE, language })
  }
}

export const loadDone = () => {
  return async (dispatch: Dispatch<SettingAction>) => {
    dispatch({ type: LOAD_DONE })
  }
}

export const setAdminMode = (adminMode: boolean) => {
  return async (dispatch: Dispatch<SettingAction>) => {
    dispatch({ type: TOGGLE_ADMIN_MODE, adminMode })
  }
}

export const setConfigs = (configs: AppConfig) => {
  return async (dispatch: Dispatch<SettingAction>) => {
    dispatch({ type: SET_CONFIG, configs })
  }
}
