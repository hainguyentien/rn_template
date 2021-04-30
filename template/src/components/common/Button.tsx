import { useCustomTheme } from 'configs'
import * as React from 'react'
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native'
import { IconPack } from 'types'
import { Box } from './Box'
import { Icon } from './Icon'
import Text from './Text'

interface CustomButtonProps {
  text: string
  loading?: boolean
  outline?: boolean
  color?: string
  icon?: { name: string; pack: IconPack }
  containerStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  onPress?: () => void
}

export const Button = (props: CustomButtonProps) => {
  const { loading, outline, containerStyle, text, textStyle } = props
  const { colors } = useCustomTheme()
  const highlightColor = props.color ?? colors.primary
  return (
    <Box
      horizontal
      justifyContent="center"
      disabled={loading}
      padding={15}
      borderRadius={10}
      style={[
        {
          backgroundColor: outline ? colors.card : highlightColor,
          borderColor: outline ? highlightColor : colors.background,
          borderWidth: outline ? 1 : 0,
        },
        containerStyle,
      ]}
      onPress={props.onPress}>
      {loading ? (
        <ActivityIndicator animating={true} color={colors.background} />
      ) : (
        <>
          {props.icon && (
            <Icon
              name={props.icon.name}
              pack={props.icon.pack}
              size={20}
              color={outline ? highlightColor : '#ffffff'}
              style={{ marginRight: 5 }}
            />
          )}
          <Text
            bold
            h4
            style={[
              styles.text,
              { color: outline ? highlightColor : '#ffffff' },
              textStyle,
            ]}>
            {text}
          </Text>
        </>
      )}
    </Box>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {},
})
