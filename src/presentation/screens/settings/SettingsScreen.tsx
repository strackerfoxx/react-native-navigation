import { View, Text } from 'react-native'
import { globals } from '../../theme/theme'
import PrimaryButton from '../../components/PrimaryButton'
import { StackActions, useNavigation } from '@react-navigation/native'

export default function SettingsScreen() {

    const navigation = useNavigation()
    navigation.setOptions({
        title: "",
    })

    return (
        <View style={globals.container}>
            <Text>Settings Screen</Text>
            <PrimaryButton label="back" onPress={() => navigation.goBack()} />
            <PrimaryButton label="home" onPress={() => navigation.dispatch(StackActions.popToTop())} />
        </View>
    )
}