import { useNavigation } from '@react-navigation/native'
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { WelcomeScreen } from 'screens/Welcome'
import { AppState } from 'types'

export type MainStackParams = {
  Welcome: undefined
}

const MainStack = createStackNavigator<MainStackParams>()

export const MainStackNavigator = () => {
  const { t } = useTranslation()
  const navigation = useNavigation<StackNavigationProp<MainStackParams>>()
  const dispatch = useDispatch()
  const appState = useSelector((state: AppState) => state)

  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  )
}
