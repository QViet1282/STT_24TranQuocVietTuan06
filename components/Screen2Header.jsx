import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, TextInput } from 'react-native';

const Screen2Header = () => {
    return (
        <View style={{ paddingHorizontal: 10, height: 45, backgroundColor: 'rgba(27, 169, 255, 1)', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Image style={{ height: 30, width: 30 }} source={require('../assets/Img/ant-design_arrow-left-outlined.png')}></Image>
            <View style={{ flexDirection: 'row', backgroundColor: 'white', height: 35, width: 190, padding: 5 }}>
                <Image style={{ width: 25, height: 25 }} source={require('../assets/Img/whh_magnifier.png')}></Image>
                <TextInput style={{ padding: 5, color: 'grey' }} placeholder='Dây cáp usb'></TextInput>
            </View>
            <Image style={{ height: 30, width: 30 }} source={require('../assets/Img/bi_cart-check.png')}></Image>
            <Image style={{ height: 5, width: 18 }} source={require('../assets/Img/Group 2.png')}></Image>
        </View>
    );
}

export default Screen2Header;