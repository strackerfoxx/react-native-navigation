import { View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import PrimaryButton from '../../components/PrimaryButton';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { globals } from '../../theme/theme';

export default function ProfileScreen() {

    const { top } = useSafeAreaInsets();
    const navigation = useNavigation();

    return (
        <View style={globals.container}>
            <Text style={{ marginBottom: 20, fontWeight: "500" }}>ProfileScreen</Text>
            <PrimaryButton label="open menu" onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)} />
        </View>
    )
}