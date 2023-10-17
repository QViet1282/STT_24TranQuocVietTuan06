import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";
import Screen1Header from './components/Screen1Header';
import Screen2Header from './components/Screen2Header';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header } from '@react-navigation/stack';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Home' screenOptions={{
                tabBarStyle: { backgroundColor: 'rgba(27, 169, 255, 1)', padding: 20, justifyContent: 'space-between' },
                tabBarShowLabel: false,
            }}>
                <Tab.Screen name="Null" component={Screen1} options={{
                    header: (props) => <Screen1Header {...props} />,
                    tabBarIcon: () => (
                        <Image style={{ height: 25, width: 25 }} source={require('./assets/Img/Group 10.png')}></Image>
                    )
                }} />
                <Tab.Screen name="Home" component={Screen1} options={{
                    header: (props) => <Screen1Header {...props} />,
                    tabBarIcon: () => (
                        <Image style={{ height: 25, width: 25 }} source={require('./assets/Img/Vector.png')}></Image>
                    )
                }} />
                <Tab.Screen name="Back" component={Screen2} options={{
                    header: (props) => <Screen2Header {...props} />,
                    tabBarIcon: () => (
                        <Image style={{ height: 25, width: 25 }} source={require('./assets/Img/Vector 1.png')}></Image>
                    )
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}