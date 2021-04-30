import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { images } from 'assets'
import { Box, Text } from 'components'
import { useCustomTheme, WIDTH } from 'configs'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Image } from 'react-native'
import { MainStackParams } from 'routes'

export const WelcomeScreen = () => {
  const { colors } = useCustomTheme()
  const { t } = useTranslation()
  const navigation = useNavigation<StackNavigationProp<MainStackParams>>()
  return (
    <Box color="#091826" alignItems="center" justifyContent="center" flex={1}>
      <Image
        source={images.LOGO}
        style={{ width: WIDTH(60), height: WIDTH(60) }}
      />
      <Text white bold h1>
        Welcome, Rambo
      </Text>
    </Box>
  )
}
