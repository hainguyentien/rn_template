import { useCustomTheme } from 'configs'
import React from 'react'
import {
  ColorValue,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native'

interface BoxProps extends TouchableOpacityProps {
  children?: React.ReactNode
  horizontal?: boolean
  style?: StyleProp<ViewStyle>
  borderRadius?: number
  flex?: number
  padding?: number
  marginLeft?: number
  marginRight?: number
  marginTop?: number
  marginBottom?: number
  marginHorizontal?: number
  margin?: number
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  width?: number | string
  height?: number
  primary?: boolean
  secondary?: boolean
  third?: boolean
  appColor?: boolean
  card?: boolean
  color?: ColorValue
  borderColor?: ColorValue
  borderTopRadius?: number
}

export const Box = (props: BoxProps) => {
  const {
    children,
    horizontal,
    style,
    borderRadius,
    flex,
    padding,
    primary,
    secondary,
    third,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    marginHorizontal,
    margin,
    width,
    height,
    appColor,
    card,
    alignItems,
    justifyContent,
    color,
    borderColor,
    borderTopRadius,
    ...restProps
  } = props

  const { colors } = useCustomTheme()
  return (
    <TouchableOpacity
      disabled={!restProps.onPress}
      style={[
        horizontal && { flexDirection: 'row', alignItems: 'center' },
        {
          flex,
          padding,
          marginLeft,
          marginRight,
          marginTop,
          marginBottom,
          margin,
          borderRadius,
          marginHorizontal,
          width,
          height,
          justifyContent,
          backgroundColor: color,
        },
        // This make horizontal align center if it not configured
        !!alignItems && { alignItems },
        card && { backgroundColor: colors.card },
        primary && { backgroundColor: colors.background },
        secondary && { backgroundColor: colors.secondaryBackground },
        third && { backgroundColor: colors.thirdBackground },
        appColor && { backgroundColor: colors.primary },
        !!borderColor && { borderColor: borderColor, borderWidth: 1 },
        !!borderTopRadius && {
          borderTopLeftRadius: borderTopRadius,
          borderTopRightRadius: borderTopRadius,
        },
        style,
      ]}
      {...restProps}>
      {children}
    </TouchableOpacity>
  )
}
