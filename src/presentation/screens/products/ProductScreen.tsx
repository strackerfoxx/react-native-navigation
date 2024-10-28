import { View, Text } from 'react-native'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { type RootStackParams } from '../../routes/StackNavigator';
import { globals } from '../../theme/theme';

export default function ProductScreen() {

    const { id, name } = useRoute<RouteProp<RootStackParams, "Product">>().params;
    const navigation = useNavigation();

    navigation.setOptions({
        title: ""
    })


    return (
        <View style={globals.container}>
            <Text style={{
                fontSize: 20,
                fontWeight: "500"
            }} >
                {id} - {name}
            </Text>
        </View>
    )
}