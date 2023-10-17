import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

const Screen1 = () => {
    const DATA = [
        {
            image: 'ca_nau_lau.png',
            name: "Ca nấu lẩu, nấu mì mini...",
            shop: 'Devang'
        },
        {
            image: 'ga_bo_toi.png',
            name: "1KG KHÔ GÀ BƠ TỎI...",
            shop: 'LTD Food'
        },
        {
            image: 'xa_can_cau.png',
            name: "Xe cần cẩu đa năng",
            shop: 'Thế giới đồ chơi'
        },
        {
            image: 'do_choi_dang_mo_hinh.png',
            name: "Đồ chơi dạng mô hình",
            shop: 'Thế giới đồ chơi'
        },
        {
            image: 'lanh_dao_gian_don.png',
            name: "Lãnh đạo giản đơn",
            shop: 'Minh Long Book'
        },
        {
            image: 'hieu_long_con_tre.png',
            name: "Hiếu lòng con trẻ",
            shop: 'Minh Long Book'
        },
        {
            image: 'trump 1.png',
            name: "Donal Trump Thiên tài lãnh đạo",
            shop: 'Minh Long Book'
        }
    ]
    return (
        <View style={styles.container}>
{/* 
            <View style={{ paddingHorizontal: 10, height: 45, backgroundColor: 'rgba(27, 169, 255, 1)', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Image style={{ height: 30, width: 30 }} source={require('../assets/Img/ant-design_arrow-left-outlined.png')}></Image>
                <Text style={{ color: 'white' }}>Chat</Text>
                <Image style={{ height: 30, width: 30 }} source={require('../assets/Img/bi_cart-check.png')}></Image>
            </View> */}

            <Text style={{ height: 50, padding: 20, height:70 }}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
            <ScrollView>
                <FlatList data={DATA} renderItem={({item}) =>
                    <View style={styles.viewrow}>
                        <Image style={{ width: 74, height: 74 }} source={require(`../assets/Img/${item.image}`)}></Image>
                        <View style={{ flexDirection: 'column', alignContent: 'flex-start' }}>
                            <Text style={{fontWeight:'bold',fontSize:16,width:200}}>{item.name}</Text>
                            <Text style={{ color: 'red', marginTop: 10 }}>{item.shop}</Text>
                        </View>
                        <TouchableOpacity style={{ marginRight: 10, width: 100, height: 40, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => {

                            }}>
                            <Text style={{ color: 'white' }}>Chat</Text>
                        </TouchableOpacity>
                    </View>
                }>
                </FlatList>
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
        // alignItems:'flex-start',
        // flexWrap: 'wrap',
        alignItems: 'center',
        // backgroundColor: "red",
        border: 'solid 1px rgba(196, 196, 196, 1)',
        height: 80,
    },
});