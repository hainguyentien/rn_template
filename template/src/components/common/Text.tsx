import { CustomTheme, fonts, lineHeights, sizes, useCustomTheme } from 'configs'
import React from 'react'
import {
  StyleProp,
  StyleSheet,
  Text as RNText,
  TextProps,
  TextStyle,
} from 'react-native'

interface CustomTextProps extends TextProps {
  children?: React.ReactNode
  h1?: boolean
  h2?: boolean
  h3?: boolean
  h4?: boolean
  h5?: boolean
  h6?: boolean
  bold?: boolean
  italic?: boolean
  boldItalic?: boolean
  white?: boolean
  primary?: boolean
  secondary?: boolean
  third?: boolean
  h1Style?: StyleProp<TextStyle>
  h2Style?: StyleProp<TextStyle>
  h3Style?: StyleProp<TextStyle>
  h4Style?: StyleProp<TextStyle>
  h5Style?: StyleProp<TextStyle>
  h6Style?: StyleProp<TextStyle>
}

export const Text = (props: CustomTextProps) => {
  const theme = useCustomTheme()
  const {
    style,
    children,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    h1Style,
    h2Style,
    h3Style,
    h4Style,
    h5Style,
    h6Style,
    bold,
    italic,
    boldItalic,
    white,
    primary,
    secondary,
    third,
    ...rest
  } = props
  return (
    <RNText
      {...rest}
      style={StyleSheet.flatten([
        StyleSheet.flatten([styles.text(theme), { textAlign: 'left' }, style]),
        bold && { fontWeight: 'bold' },
        italic && { fontStyle: 'italic' },
        boldItalic && { fontWeight: 'bold', fontStyle: 'italic' },
        white && { color: '#fff' },
        primary && { color: theme.colors.primary },
        secondary && { color: theme.colors.secondaryText },
        third && { color: theme.colors.thirdText },
        h5 && StyleSheet.flatten([styles.h5, style, h5Style]),
        h1 && StyleSheet.flatten([styles.h1, h1Style]),
        h2 && StyleSheet.flatten([styles.h2, h2Style]),
        h3 && StyleSheet.flatten([styles.h3, h3Style]),
        h4 && StyleSheet.flatten([styles.h4, h4Style]),
        h6 && StyleSheet.flatten([styles.h6, h6Style]),
      ])}>
      {children}
    </RNText>
  )
}

const styles = {
  text: ({ colors }: CustomTheme) => ({
    fontSize: sizes.base,
    color: colors.text,
    fontFamily: fonts.regular,
  }),
  bold: {
    fontWeight: 'bold',
  },
  color: ({ colors }: CustomTheme) => ({
    color: colors,
  }),
  h1: {
    fontSize: sizes.h1,
    lineHeight: lineHeights.h1,
  },
  h2: {
    fontSize: sizes.h2,
    lineHeight: lineHeights.h2,
  },
  h3: {
    fontSize: sizes.h3,
    lineHeight: lineHeights.h3,
  },
  h4: {
    fontSize: sizes.h4,
    lineHeight: lineHeights.h4,
  },
  h5: {
    fontSize: sizes.h5,
    lineHeight: lineHeights.h5,
  },
  h6: {
    fontSize: sizes.h6,
    lineHeight: lineHeights.h6,
  },
}

Text.defaultProps = {
  medium: false,
  bold: false,
  secondary: false,
  third: false,
  h1: false,
  h2: false,
  h3: false,
  h4: false,
  h5: true,
  h6: false,
  style: {},
  h1Style: {},
  h2Style: {},
  h3Style: {},
  h4Style: {},
  h5Style: {},
  h6Style: {},
  children: '',
}

export default Text
