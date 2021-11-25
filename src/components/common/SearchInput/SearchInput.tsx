import React from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native'
import { SVG } from 'components/common/SVG/SVG'
import x from 'assets/icons/x.svg'
import { styles } from './styles'
import { Colors } from 'theme'

interface Props {
  onCleanPress: () => void,
  value: string,
  onChangeText: (text: string) => void,
  placeholder: string,
}

const hitSlop = {
  top: 5,
  bottom: 5,
  left: 5,
  right: 5
}

export const SearchInput: React.FC<Props> = ({ onCleanPress, value, onChangeText, placeholder }) => {
  return (
    <View style={styles.root}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />

      {
        value !== '' && (
          <TouchableOpacity
            onPress={onCleanPress}
            style={styles.button}
            hitSlop={hitSlop}
          >
            <SVG xml={x} width={35} height={35} color={Colors.Red}/>
          </TouchableOpacity>
        )
      }
    </View>
  )
}