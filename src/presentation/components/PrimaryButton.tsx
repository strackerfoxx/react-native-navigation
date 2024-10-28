import { Text, Pressable } from 'react-native'
import React from 'react'
import { globals } from '../theme/theme'

interface Props {
    label: String,
    styles?: {},
    onPress: () => void
}

export default function PrimaryButton({ label, onPress, styles = globals.primaryButton }: Props) {

    return (
        <Pressable style={styles} onPress={() => onPress()}>
            <Text style={globals.buttonText}>{label}</Text>
        </Pressable>
    )
}