import AsyncStorage from '@react-native-async-storage/async-storage'
import { images } from 'assets'
import { Box } from 'components'
import React, { useEffect, useState } from 'react'
import Animated, { EasingNode } from 'react-native-reanimated'
import { useDispatch } from 'react-redux'
import { getStarted, loadDone, setTheme } from 'redux-core'

export const SplashScreen = () => {
  const dispatch = useDispatch()
  const [breathing, setBreathing] = useState<boolean>(true)
  const animation: Animated.Value<number> = new Animated.Value(
    breathing ? 0 : 1,
  )
  const [stopAnim, setStopAnim] = useState<boolean>(false)

  useEffect(() => {
    const breathingLogo = () => {
      Animated.timing(animation, {
        toValue: breathing ? 1 : 0,
        duration: 500,
        easing: EasingNode.inOut(EasingNode.ease),
      }).start(({ finished }) => {
        finished && setBreathing(!breathing)
      })
    }
    breathingLogo()
  }, [animation, breathing, stopAnim])

  useEffect(() => {
    const bootstrapAsync = async () => {
      const firstOpen = await AsyncStorage.getItem('firstOpen')
      const newTheme = await AsyncStorage.getItem('theme')
      const accessToken = await AsyncStorage.getItem('accessToken')
      const userId = await AsyncStorage.getItem('userId')
      const cart = await AsyncStorage.getItem('cart')

      if (firstOpen) {
        dispatch(getStarted())
      }
      if (newTheme) {
        // @ts-ignore
        dispatch(setTheme(newTheme))
      }

      setTimeout(() => {
        setStopAnim(true)
        dispatch(loadDone())
      }, 2000)
    }
    bootstrapAsync()
  }, [dispatch])

  return (
    <Box flex={1} alignItems="center" justifyContent="center" color="#091826">
      <Animated.Image
        source={images.LOGO}
        style={{
          width: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [180, 200],
          }),
        }}
        resizeMode="contain"
      />
    </Box>
  )
}
