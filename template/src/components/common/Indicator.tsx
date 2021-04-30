import { useCustomTheme } from 'configs'
import React from 'react'
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  Platform,
  SafeAreaView,
} from 'react-native'

export const Indicator = (props: ActivityIndicatorProps) => {
  const { colors } = useCustomTheme()
  return (
    <SafeAreaView>
      <ActivityIndicator
        style={{ marginVertical: 10 }}
        animating={true}
        color={
          Platform.OS === 'android' ? colors.primary : colors.secondaryText
        }
        {...props}
      />
    </SafeAreaView>
  )
}
