/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { useCustomTheme } from 'configs'
import React from 'react'
import { Platform, StatusBar, useColorScheme } from 'react-native'
import FlashMessage from 'react-native-flash-message'
import 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import 'utils/i18n'
import { store } from './src/redux-core'
import { AppNavigator } from './src/routes'

const App = () => {
  const { dark } = useCustomTheme()
  const colorScheme = useColorScheme()

  return (
    <Provider store={store}>
      <StatusBar
        barStyle={
          Platform.OS === 'android' && colorScheme === 'dark'
            ? 'light-content'
            : 'dark-content'
        }
      />
      <AppNavigator />
      <FlashMessage position="top" />
    </Provider>
  )
}

export default App
