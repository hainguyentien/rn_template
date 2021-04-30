import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { themeDark, themeLight } from 'configs'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { SplashScreen } from 'screens'
import { AppState } from 'types'
import { MainStackNavigator, MainStackParams } from './MainStackNavigator'

export type RootStackParams = {
  MainStack: NavigatorScreenParams<MainStackParams>
}

const RootStack = createStackNavigator<RootStackParams>()

export const AppNavigator = () => {
  const appState = useSelector((state: AppState) => state)
  const { t } = useTranslation()

  if (appState.settingState.loading) {
    return <SplashScreen />
  }

  return (
    <NavigationContainer
      theme={appState.settingState.theme === 'light' ? themeLight : themeDark}>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name="MainStack" component={MainStackNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
