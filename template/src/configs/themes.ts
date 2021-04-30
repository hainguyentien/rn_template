import { Theme, useTheme } from '@react-navigation/native'
import { colors } from './colors'

export type CustomTheme = {
  dark: boolean
  colors: {
    primary: string
    background: string
    card: string
    text: string
    border: string
    error: string
    success: string
    warning: string
    waiting: string
    disable: string
    secondaryCard: string
    secondaryBorder: string
    secondaryBackground: string
    thirdBackground: string
    forthBackground: string
    secondaryText: string
    thirdText: string
    modal: string
    notification: string
    backgroundLightBlue: string
  }
}

export const themeLight: CustomTheme = {
  dark: false,
  colors: {
    primary: colors.medilanePrimary,
    background: colors.gray6,
    card: colors.white,
    text: colors.gray5,
    border: colors.gray2,
    error: colors.red,
    success: colors.green,
    warning: colors.orange,
    waiting: colors.yellow,
    disable: colors.gray6,
    secondaryCard: colors.gray1,
    secondaryBorder: colors.gray1,
    secondaryBackground: colors.gray6,
    thirdBackground: colors.gray2,
    forthBackground: colors.gray1,
    secondaryText: colors.gray4,
    thirdText: colors.gray3,
    modal: colors.white,
    notification: colors.yellow,
    backgroundLightBlue: colors.lightBlue,
  },
}

export const themeDark: CustomTheme = {
  dark: true,
  colors: {
    primary: colors.medilanePrimary,
    background: colors.black,
    card: colors.black1,
    text: colors.white,
    border: colors.gray3,
    error: colors.red,
    success: colors.green,
    warning: colors.orange,
    waiting: colors.yellow,
    disable: colors.gray3,
    secondaryCard: colors.gray4,
    secondaryBorder: colors.gray4,
    secondaryBackground: colors.gray5,
    thirdBackground: colors.gray3,
    secondaryText: colors.gray2,
    forthBackground: colors.gray5,
    thirdText: colors.gray3,
    modal: colors.gray5,
    notification: colors.yellow,
    backgroundLightBlue: colors.darkGray,
  },
}

export const useCustomTheme = () => {
  const theme = useTheme()
  return theme.dark ? themeDark : themeLight
}
