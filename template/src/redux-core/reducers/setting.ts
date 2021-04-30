import { VERSION_CODE } from 'configs'
import {
  GET_STARTED,
  LOAD_DONE,
  SettingAction,
  SettingState,
  SET_CONFIG,
  SET_LANGUAGE,
  SET_THEME,
  TOGGLE_ADMIN_MODE,
} from 'types'

let initialState: SettingState = {
  firstOpen: true,
  theme: 'light',
  language: 'en',
  loading: true,
  adminMode: false,
  configs: {
    Android: { version: VERSION_CODE, priority: 'low' },
    Ios: { version: VERSION_CODE, priority: 'low' },
    Config: {},
  },
}

export default (
  state: SettingState = initialState,
  action: SettingAction,
): SettingState => {
  switch (action.type) {
    case GET_STARTED:
      return {
        ...state,
        firstOpen: false,
      }
    case SET_THEME:
      return {
        ...state,
        theme: action.theme!,
      }
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.language!,
      }
    case LOAD_DONE:
      return {
        ...state,
        loading: false,
      }
    case TOGGLE_ADMIN_MODE:
      return {
        ...state,
        adminMode: action.adminMode!,
      }
    case SET_CONFIG:
      return {
        ...state,
        configs: action.configs!,
      }
    default:
      return state
  }
}
