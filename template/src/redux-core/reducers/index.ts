import { combineReducers } from 'redux'
import { AppState } from 'types'
import settingState from './setting'

export const rootReducer = combineReducers<AppState>({
  settingState: settingState,
})
