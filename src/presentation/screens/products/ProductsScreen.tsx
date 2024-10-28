import { View, FlatList } from 'react-native'
import { globals } from '../../theme/theme'
import PrimaryButton from '../../components/PrimaryButton'
import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { type RootStackParams } from '../../routes/StackNavigator';

const products = [
    { id: 1, name: "product 1" },
    { id: 2, name: "product 2" },
    { id: 3, name: "product 3" },
    { id: 4, name: "product 4" },
    { id: 5, name: "product 5" }
]

export default function ProductsScreen() {
    const navigation = useNavigation<NavigationProp<RootStackParams>>();
    return (
        <View style={globals.container} >
            <FlatList style={globals.buttonsContainer} data={products} renderItem={({ item }) => (
                <PrimaryButton
                    label={item.name}
                    onPress={() => navigation.navigate("Product", { id: item.id, name: item.name })}
                />
            )} />
            <PrimaryButton label="Settings" onPress={() => navigation.navigate("Settings")} />
        </View>
    )
}