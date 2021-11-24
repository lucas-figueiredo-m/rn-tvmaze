import { useNavigation } from '@react-navigation/core'
import { SVG } from 'components/common'
import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { Colors } from 'theme'
import ChevronLeft from 'assets/icons/chevron-left.svg';
import { styles } from './styles'

interface Props {
  label: string
}

const hitSlop = {
  top: 5,
  bottom: 5,
  left: 5,
  right: 5
}

export const ShowHeader: React.FC<Props> = ({ label }) => {
  const { width } = useWindowDimensions()
  const { goBack } = useNavigation()
  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.safeView}>
        <TouchableOpacity
          onPress={goBack}
          hitSlop={hitSlop}
        >
          <SVG xml={ChevronLeft} width={width * 0.1} height={width * 0.1} color={Colors.White} />
        </TouchableOpacity>
        <Text style={styles.label}>{label}</Text>
      </SafeAreaView>
    </View>
  )
}