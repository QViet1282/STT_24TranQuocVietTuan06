import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, TextInput } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

const Screen1 = () => {
    const DATA = [
        {
            image: 'giacchuyen 1.png'
        },
        {
            image: 'daynguon 1.png'
        },
        {
            image: 'dauchuyendoipsps2 1.png'
        },
        {
            image: 'dauchuyendoi 1.png'
        },
        {
            image: 'carbusbtops2 1.png'
        },
        {
            image: 'daucam 1.png'
        }
    ]
    return (
        <View style={styles.container}>

            {/* <View style={{ paddingHorizontal: 10, height: 45, backgroundColor: 'rgba(27, 169, 255, 1)', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Image style={{ height: 30, width: 30 }} source={require('../assets/Img/ant-design_arrow-left-outlined.png')}></Image>
                <View style={{flexDirection:'row',backgroundColor:'white', height:35, width:190, padding:5}}>
                    <Image style={{width:25, height:25}} source={require('../assets/Img/whh_magnifier.png')}></Image>
                    <TextInput style={{padding:5,color:'grey'}} placeholder='Dây cáp usb'></TextInput>
                </View>
                <Image style={{ height: 30, width: 30 }} source={require('../assets/Img/bi_cart-check.png')}></Image>
                <Image style={{ height: 5, width: 18 }} source={require('../assets/Img/Group 2.png')}></Image>
            </View> */}

            <ScrollView>
                <FlatList data={DATA} renderItem={({ item }) =>
                    <View style={{ width: 200, padding: 20, gap: 5 }}>
                        <Image style={{ height: 90, width: 155 }} source={require(`../assets/Img/${item.image}`)}></Image>
                        <Text style={{}}>Cáp chuyển từ Cổng USB sang PS2...</Text>
                        <Image style={{ width: 126, height: 16 }} source={require('../assets/Img/Group 4.png')}></Image>
                        <View style={{ flexDirection: 'row' }}>
                            <Text h3 style={{ fontWeight: 'bold' }}>69.900 đ</Text>
                            <Text style={{ color: 'rgba(150, 157, 170, 1)', marginLeft: 15 }}>-39%</Text>
                        </View>
                    </View>
                } numColumns={2}></FlatList>
            </ScrollView>


        </View>
    );

}

export default Screen1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCDCDC',
    },
    footer: {
        flex: 1,
    },
    viewrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // flexWrap: 'wrap',
        alignItems: 'center',
        border: 'solid 1px rgba(196, 196, 196, 1)',
        height: 80,
    },
});