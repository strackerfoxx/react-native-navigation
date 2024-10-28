import { useEffect } from 'react';

import { Pressable, Text, useWindowDimensions, View } from 'react-native'
import PrimaryButton from '../../components/PrimaryButton';
import { colors, globals } from '../../theme/theme'
import { DrawerActions, type NavigationProp, useNavigation } from '@react-navigation/native';
import { type RootStackParams } from '../../routes/StackNavigator';

export default function HomeScreen() {
    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    const dimensions = useWindowDimensions();

    useEffect(() => {
        if (dimensions.width <= 400) {
            navigation.setOptions({
                headerLeft: () => (
                    <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
                        <Text>Menu</Text>
                    </Pressable>
                )
            })
            return
        }
        navigation.setOptions({ headerLeft: () => { } })
    }, [dimensions])


    return (
        <View style={{ flex: 1, backgroundColor: colors.background, alignItems: "center", justifyContent: "center" }}>
            <View style={globals.container}>
                <View style={globals.buttonsContainer}>
                    <PrimaryButton label="Products" onPress={() => navigation.navigate("Products")} />
                    <PrimaryButton label="Settings" onPress={() => navigation.navigate("Settings")} />
                </View>
            </View>
            <View style={globals.navBar}>
                <PrimaryButton styles={globals.navButton} label="S" onPress={() => navigation.navigate("Settings")} />
                <PrimaryButton styles={globals.navButton} label="S" onPress={() => navigation.navigate("Settings")} />
                <PrimaryButton styles={globals.navButton} label="S" onPress={() => navigation.navigate("Settings")} />
                <PrimaryButton styles={globals.navButton} label="P" onPress={() => navigation.navigate("Products")} />
            </View>
        </View>
    )
}