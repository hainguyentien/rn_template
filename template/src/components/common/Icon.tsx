// @ts-nocheck
import { useCustomTheme } from 'configs'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleProp, TextStyle } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Zocial from 'react-native-vector-icons/Zocial'
import { IconPack } from 'types'

interface IconProps {
  name: string
  pack?: IconPack
  size: number
  color?: string
  style?: StyleProp<TextStyle>
}

export const Icon = ({ name, pack, size, color, style }: IconProps) => {
  const { colors } = useCustomTheme()
  const { t } = useTranslation()
  switch (pack) {
    case 'AntDesign':
      return (
        <AntDesign
          name={name}
          size={size}
          color={color ?? colors.text}
          style={style}
        />
      )
    case 'Entypo':
      return (
        <Entypo
          name={name}
          size={size}
          color={color ?? colors.text}
          style={style}
        />
      )
    case 'EvilIcons':
      return (
        <EvilIcons
          name={name}
          size={size}
          color={color ?? colors.text}
          style={style}
        />
      )
    case 'Feather':
      return (
        <Feather
          name={name}
          size={size}
          color={color ?? colors.text}
          style={style}
        />
      )
    case 'FontAwesome':
      return (
        <FontAwesome
          name={name}
          size={size}
          color={color ?? colors.text}
          style={style}
        />
      )
    case 'FontAwesome5':
      return (
        <FontAwesome5
          name={name}
          size={size}
          color={color ?? colors.text}
          style={style}
        />
      )
    case 'Fontisto':
      return (
        <Fontisto
          name={name}
          size={size}
          color={color ?? colors.text}
          style={style}
        />
      )
    case 'Foundation':
      return (
        <Foundation
          name={name}
          size={size}
          color={color ?? colors.text}
          style={style}
        />
      )
    case 'Ionicons':
      return (
        <Ionicons
          name={name}
          size={size}
          color={color ?? colors.text}
          style={style}
        />
      )
    case 'MaterialCommunityIcons':
      return (
        <MaterialCommunityIcons
          name={name}
          size={size}
          color={color ?? colors.text}
          style={style}
        />
      )
    case 'MaterialIcons':
      return (
        <MaterialIcons
          name={name}
          size={size}
          color={color ?? colors.text}
          style={style}
        />
      )
    case 'Octicons':
      return (
        <Octicons
          name={name}
          size={size}
          color={color ?? colors.text}
          style={style}
        />
      )
    case 'Zocial':
      return (
        <Zocial
          name={name}
          size={size}
          color={color ?? colors.text}
          style={style}
        />
      )
    default:
      return (
        <Ionicons
          name={name}
          size={size}
          color={color ?? colors.text}
          style={style}
        />
      )
  }
}
