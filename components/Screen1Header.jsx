import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, TextInput } from 'react-native';

const Screen1Header = () => {
    return (
        <View style={{ paddingHorizontal: 10, height: 45, backgroundColor: 'rgba(27, 169, 255, 1)', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Image style={{ height: 30, width: 30 }} source={require('../assets/Img/ant-design_arrow-left-outlined.png')}></Image>
            <Text style={{ color: 'white' }}>Chat</Text>
            <Image style={{ height: 30, width: 30 }} source={require('../assets/Img/bi_cart-check.png')}></Image>
        </View>
    );
}

export default Screen1Header;