import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

const Screen1 = () => {
    return (
        <View style={styles.container}>
            
            <View style={{paddingHorizontal:10,height:45, backgroundColor:'rgba(27, 169, 255, 1)',flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <Image style={{height:30,width:30}} source={require('../assets/Img/ant-design_arrow-left-outlined.png')}></Image>
                <Text style={{color:'white'}}>Chat</Text>
                <Image style={{height:30,width:30}} source={require('../assets/Img/bi_cart-check.png')}></Image>
            </View>
            
            <Text style={{height:50, padding:20}}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>

            <View style={styles.viewrow}>
                <Image style={{ width: 74, height: 74 }} source={require("../assets/Img/ca_nau_lau.png")}></Image>
                <View style={{ flexDirection: 'column', alignContent:'flex-start' }}>
                    <Text>Ca nấu lẩu, nấu mì mini...</Text>
                    <Text style={{ color: 'red' , marginTop:10}}>Shop Davang</Text>
                </View>
                <TouchableOpacity style={{ marginRight:10, width: 100, height: 40, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}
                    onPress={() => {

                    }}>
                    <Text style={{color:'white'}}>Chat</Text>
                </TouchableOpacity>
            </View>
            <footer>
                <View style={{paddingHorizontal:10,height:45, backgroundColor:'rgba(27, 169, 255, 1)',flexDirection:'row', alignItems:'center', justifyContent:'flex-end'}}>
                    
                </View>
            </footer>
            
        </View>
    );

}

export default Screen1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#DCDCDC',
    },
    footer:{
        flex: 1,
    },
    viewrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems:'flex-start',
        flexWrap: 'wrap',
        alignItems: 'center',
        // backgroundColor: "red",
        border: 'solid 1px rgba(196, 196, 196, 1)',
        height: 80,
        marginTop:20,
    },
});