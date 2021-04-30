import { fonts, useCustomTheme } from 'configs'
import React, { useEffect, useRef, useState } from 'react'
import {
  Platform,
  StyleSheet,
  TextInput,
  TextInputProps,
  ViewStyle,
} from 'react-native'
import Animated, { EasingNode } from 'react-native-reanimated'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { IconPack } from 'types'
import { Box } from './Box'
import { Icon } from './Icon'
import Text from './Text'

interface InputProps extends TextInputProps {
  icon?: { name: string; pack?: IconPack }
  label: string
  error?: string
  touched?: boolean
  containerStyle?: ViewStyle
}

export const Input = ({
  icon,
  containerStyle,
  error,
  touched,
  label,
  onBlur,
  onChangeText,
  secureTextEntry,
  value,
  ...props
}: InputProps) => {
  const { colors } = useCustomTheme()
  const [focused, setFocused] = useState<boolean>(false)
  const [animated, setAnimated] = useState<Animated.Value<number>>(
    new Animated.Value(0),
  )
  const [haveValue, setHaveValue] = useState<boolean>(value ? true : false)
  const [secureText, setSecureText] = useState<boolean>(
    secureTextEntry ?? false,
  )
  const inputRef = useRef<TextInput>(null)

  const borderColor =
    touched === undefined
      ? focused
        ? colors.primary
        : colors.border
      : error !== undefined
      ? colors.error
      : colors.success

  useEffect(() => {
    if (value !== '') {
      setHaveValue(true)
    } else {
      setHaveValue(false)
    }
  }, [value])

  useEffect(() => {
    Animated.timing(animated, {
      toValue: haveValue ? 1 : focused ? 1 : 0,
      duration: 200,
      easing: EasingNode.linear,
    }).start()
  }, [focused, animated, haveValue])

  return (
    <Box width={'100%'}>
      <Box
        style={containerStyle}
        activeOpacity={1}
        onPress={() => {
          inputRef.current?.focus()
        }}>
        <Box
          horizontal
          borderRadius={10}
          padding={10}
          alignItems="baseline"
          borderColor={borderColor}>
          {icon && (
            <Icon
              name={icon.name}
              pack={icon.pack}
              size={20}
              color={colors.thirdText}
              style={{ paddingVertical: 5 }}
            />
          )}
          <Box flex={1}>
            <Animated.Text
              style={{
                position: 'absolute',
                left: 10,
                top: animated.interpolate({
                  inputRange: [0, 1],
                  outputRange: Platform.OS === 'ios' ? [-8, -15] : [0, -12],
                }),
                fontSize: animated.interpolate({
                  inputRange: [0, 1],
                  outputRange: [16, 12],
                }),
                color: focused ? colors.primary : colors.secondaryText,
                fontFamily: fonts.regular,
              }}>
              {label}
            </Animated.Text>
            <TextInput
              {...props}
              ref={inputRef}
              style={[styles.input, { color: colors.text }]}
              value={value}
              onFocus={() => {
                setFocused(true)
              }}
              onBlur={e => {
                setFocused(false)
                onBlur && onBlur(e)
              }}
              onChangeText={text => {
                if (text.length > 0) {
                  setHaveValue(true)
                } else {
                  setHaveValue(false)
                }
                onChangeText && onChangeText(text)
              }}
              secureTextEntry={secureText}
            />
          </Box>
          {secureTextEntry && (
            <Box
              onPress={() => {
                setSecureText(!secureText)
              }}>
              <Ionicons
                name={secureText ? 'eye' : 'eye-off'}
                size={20}
                color={colors.thirdText}
                style={{ paddingVertical: 5 }}
              />
            </Box>
          )}
        </Box>
        {!!touched && error && (
          <Box>
            <Text style={{ color: colors.error }}>* {error}</Text>
          </Box>
        )}
      </Box>
    </Box>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'baseline',
  },
  input: {
    marginLeft: 10,
    fontFamily: fonts.regular,
    padding: 0, // For Android padding input
  },
})
