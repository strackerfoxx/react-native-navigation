import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { StackNavigator } from './StackNavigator';
import ProfileScreen from '../screens/profile/ProfileScreen';
import { colors, globals } from '../theme/theme';
import { useWindowDimensions, View } from 'react-native';

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {

  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator

      drawerContent={(props) => <CustomDrawerContent {...props} />}

      screenOptions={{
        headerShown: false,
        drawerType: `${dimensions.width > 400 ? "permanent" : "slide"}`,
        drawerActiveBackgroundColor: colors.secondary,
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: colors.secondary,
        drawerStyle: {
          backgroundColor: colors.background
        }
      }}
    >
      <Drawer.Screen name="Products" component={StackNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  )
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {

  return <DrawerContentScrollView>
    <View style={globals.container}>
      <View style={{ height: 100, width: 100, backgroundColor: colors.secondary, borderRadius: 20 }} />
    </View>
    <DrawerItemList {...props} />
  </DrawerContentScrollView>
}