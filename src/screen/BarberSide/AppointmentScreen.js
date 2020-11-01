import React from 'react'
import { 
    View,
    FlatList,
    TouchableOpacity,
    Image,
    StyleSheet, 
} from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';

import Card from '../../components/AppointmentCard';
import colors from '../../styles/colors';

const appointment1 = [
    {
        id: 1,
        name: 'Tuseeq Raza',
        price: 200,
        status: 'Active',
        time: 'Oct 23, 2020 4:50 PM',
        image: require('../../assets/images/image_1.jpg'),
    },
    {
        id: 2,
        name: 'Tuseeq Ahmed',
        price: 300,
        status: 'Active',
        time: 'Oct 17, 2020 9:50 AM',
        image: require('../../assets/images/image_2.jpg'),
    },
    {
        id: 3,
        name: 'Abdullah',
        price: 100,
        status: 'Active',
        time: 'Oct 23, 2020 4:50 PM',
        image: require('../../assets/images/image_3.jpg'),
    },
    {
        id: 4,
        name: 'Humza Jameel',
        price: 250,
        status: 'Active',
        time: 'Oct 16, 2020 11:50 AM',
        image: require('../../assets/images/image_5.jpg'),
    },
    {
        id: 5,
        name: 'Tuseeq Raza',
        price: 200,
        status: 'Active',
        time: 'Oct 23, 2020 4:50 PM',
        image: require('../../assets/images/image_6.jpg'),
    },
    {
        id: 6,
        name: 'Tuseeq Ahmed',
        price: 300,
        status: 'Active',
        time: 'Oct 17, 2020 9:50 AM',
        image: require('../../assets/images/image_7.jpg'),
    },
    {
        id: 7,
        name: 'Abdullah',
        price: 100,
        status: 'Active',
        time: 'Oct 23, 2020 4:50 PM',
        image: require('../../assets/images/image_8.jpg'),
    },
    {
        id: 8,
        name: 'Humza Jameel',
        price: 250,
        status: 'Active',
        time: 'Oct 16, 2020 11:50 AM',
        image: require('../../assets/images/image_9.jpg'),
    },
        
  ];

  const appointment2 = [
    {
        id: 1,
        name: 'Masroor Ahmad',
        price: 200,
        status: 'Completed',
        time: 'Oct 23, 2020 4:50 PM',
        image: require('../../assets/images/image_9.jpg'),
    },
    {
        id: 2,
        name: 'Raza Saleem',
        price: 300,
        status: 'Completed',
        time: 'Oct 17, 2020 9:50 AM',
        image: require('../../assets/images/image_8.jpg'),
    },
    {
        id: 3,
        name: 'Awais',
        price: 100,
        status: 'Completed',
        time: 'Oct 23, 2020 4:50 PM',
        image: require('../../assets/images/image_7.jpg'),
    },
    {
        id: 4,
        name: 'Kashif Habib',
        price: 250,
        status: 'Completed',
        time: 'Oct 16, 2020 11:50 AM',
        image: require('../../assets/images/image_6.jpg'),
    },
    {
        id: 5,
        name: 'Naveed',
        price: 200,
        status: 'Completed',
        time: 'Oct 23, 2020 4:50 PM',
        image: require('../../assets/images/image_5.jpg'),
    },
    {
        id: 6,
        name: 'Amjad Ahmad',
        price: 300,
        status: 'Completed',
        time: 'Oct 17, 2020 9:50 AM',
        image: require('../../assets/images/image_3.jpg'),
    },
    {
        id: 7,
        name: 'Faisal Shah',
        price: 100,
        status: 'Completed',
        time: 'Oct 23, 2020 4:50 PM',
        image: require('../../assets/images/image_2.jpg'),
    },
    {
        id: 8,
        name: 'Jahangeer Khan',
        price: 250,
        status: 'Completed',
        time: 'Oct 16, 2020 11:50 AM',
        image: require('../../assets/images/image_1.jpg'),
    },
        
  ];



function ActiveAppointmentsScreen() {
    return (
        <View style={styles.screen}>
            <FlatList
                style={styles.flatScreen}
                data={appointment1}
                keyExtractor={(appointment1) => appointment1.id.toString()}
                renderItem={({item}) => (
                <Card
                    title={item.name}
                    subTitle={'Rs.' + item.price}
                    time={item.time}
                    status={item.status}
                    image={item.image}
                    onPress={() => props.navigation.navigate('Appointment Details')}
                />
                )}
            />
        </View>
    );
}

function CompletedAppointmentsScreen() {
    return (
        <View style={styles.screen}>
            <FlatList
                style={styles.flatScreen}
                data={appointment2}
                keyExtractor={(appointment2) => appointment2.id.toString()}
                renderItem={({item}) => (
                <Card
                    title={item.name}
                    subTitle={'Rs.' + item.price}
                    time={item.time}
                    status={item.status}
                    image={item.image}
                    onPress={() => props.navigation.navigate('Appointment Details')}
                />
                )}
            />
        </View>
    );
}

const Tab = createMaterialBottomTabNavigator();

export default function AppointmentScreen(props) {
    return (
        <Tab.Navigator
            initialRouteName="Active"
            activeColor= {colors.white}
            inactiveColor= {colors.lightRed}
            barStyle={{ backgroundColor: colors.red }}
        >
            <Tab.Screen 
            name="Active" 
            component={ActiveAppointmentsScreen} 
            options={{
                tabBarLabel: 'Active',
                tabBarIcon: ({color}) => (
                <Icons name="layers-outline" color={color} size={20} />
                ),
            }}    
            />
            <Tab.Screen 
            name="Completed" 
            component={CompletedAppointmentsScreen} 
            options={{
                tabBarLabel: 'Completed',
                tabBarIcon: ({color}) => (
                <Icons name="layers-outline" color={color} size={20} />
                ),
            }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.white,
    },
    flatScreen: {
        flex: 1,
        paddingTop: 15,
    },
})
