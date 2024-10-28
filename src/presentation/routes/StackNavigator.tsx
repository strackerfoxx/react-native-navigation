import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import ProductsScreen from '../screens/products/ProductsScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import ProductScreen from '../screens/products/ProductScreen';
import { colors } from '../theme/theme';

const Stack = createStackNavigator<RootStackParams>();

export type RootStackParams = {
    Home: undefined,
    Products: undefined,
    Product: { id: number, name: string },
    Settings: undefined
}

export function StackNavigator() {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                elevation: 0,
                backgroundColor: colors.background,
            },
            headerTitleStyle: {
                color: "white",
                textAlign: "center"
            },
        }}>
            <Stack.Screen options={{

            }} name="Home" component={HomeScreen} />
            <Stack.Screen name="Products" component={ProductsScreen} />
            <Stack.Screen name="Product" component={ProductScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    );
}