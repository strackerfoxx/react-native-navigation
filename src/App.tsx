import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './presentation/routes/StackNavigator';
import { DrawerNavigator } from './presentation/routes/DrawerNavigator';

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <DrawerNavigator/>
    </NavigationContainer>
  );
}