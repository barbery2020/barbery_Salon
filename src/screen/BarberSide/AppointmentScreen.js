import React from 'react'
import { 
    View,
    FlatList,
    TouchableOpacity,
    Image,
    StyleSheet, 
} from 'react-native'

import Card from '../../components/AppointmentCard';
import colors from '../../styles/colors';

const appointment = [
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
        status: 'Completed',
        time: 'Oct 23, 2020 4:50 PM',
        image: require('../../assets/images/image_3.jpg'),
    },
    {
        id: 4,
        name: 'Humza Jameel',
        price: 250,
        status: 'Completed',
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
        status: 'Completed',
        time: 'Oct 23, 2020 4:50 PM',
        image: require('../../assets/images/image_8.jpg'),
    },
    {
        id: 8,
        name: 'Humza Jameel',
        price: 250,
        status: 'Completed',
        time: 'Oct 16, 2020 11:50 AM',
        image: require('../../assets/images/image_9.jpg'),
    },
    {
        id: 9,
        name: 'Tuseeq Raza',
        price: 200,
        status: 'Active',
        time: 'Oct 23, 2020 4:50 PM',
        image: require('../../assets/images/image_1.jpg'),
    },
    {
        id: 10,
        name: 'Tuseeq Ahmed',
        price: 300,
        status: 'Active',
        time: 'Oct 17, 2020 9:50 AM',
        image: require('../../assets/images/image_2.jpg'),
    },
    {
        id: 11,
        name: 'Abdullah',
        price: 100,
        status: 'Completed',
        time: 'Oct 23, 2020 4:50 PM',
        image: require('../../assets/images/image_3.jpg'),
    },
    {
        id: 12,
        name: 'Humza Jameel',
        price: 250,
        status: 'Completed',
        time: 'Oct 16, 2020 11:50 AM',
        image: require('../../assets/images/image_5.jpg'),
    },    
  ];


export default function AppointmentScreen(props) {
    return (
        <View style={styles.screen}>
        <FlatList
            style={styles.flatScreen}
            data={appointment}
            keyExtractor={(appointment) => appointment.id.toString()}
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
