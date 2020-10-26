import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import SpecialistCard from '../../components/SpecialistCard';
import colors from '../../styles/colors';
//

const listings = [
  {
    id: 1,
    title: 'Tuseeq Ahmed',
    status: 'Active',
    image: require('../../assets/images/image_5.jpg'),
  },
  {
    id: 2,
    title: 'Ahmed Raza',
    status: 'Active',
    image: require('../../assets/images/image_2.jpg'),
  },
  {
    id: 3,
    title: 'Humza Jameel',
    status: 'Inactive',
    image: require('../../assets/images/image_3.jpg'),
  },
  {
    id: 4,
    title: 'Abdullah',
    status: 'Active',
    image: require('../../assets/images/image_9.jpg'),
  },
  {
    id: 5,
    title: 'Asim',
    status: 'Active',
    image: require('../../assets/images/image_6.jpg'),
  },
  {
    id: 6,
    title: 'Nadeem',
    status: 'Active',
    image: require('../../assets/images/image_7.jpg'),
  },
  {
    id: 7,
    title: 'Saran',
    status: 'Inactive',
    image: require('../../assets/images/image_8.jpg'),
  },
  {
    id: 8,
    title: 'Faisal',
    status: 'Active',
    image: require('../../assets/images/image_9.jpg'),
  },
  {
    id: 9,
    title: 'Awais',
    status: 'Active',
    image: require('../../assets/images/image_10.jpg'),
  },
  {
    id: 10,
    title: 'Tariq',
    status: 'Active',
    image: require('../../assets/images/image_1.jpg'),
  },
  {
    id: 11,
    title: 'Sajid',
    status: 'Inactive',
    image: require('../../assets/images/image_2.jpg'),
  },
  {
    id: 12,
    title: 'Talha',
    status: 'Active',
    image: require('../../assets/images/image_6.jpg'),
  },
];

const noColumns = 2;

function SpecialistScreen(props) {
  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.card}
        numColumns={noColumns}
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({item}) => (
          <SpecialistCard
            title={item.title}
            status={item.status}
            image={item.image}
            onPress={() => props.navigation.navigate('Specialist Details')}
          />
        )}
      />
      <LinearGradient 
        colors={[ colors.orange , colors.red ]} 
        style={[styles.button]}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('')}>
          <Image
            style={styles.icon}
            source={require('../../assets/icons/plus.png')}
          />
        </TouchableOpacity>
      </LinearGradient>
    </View>
    //</Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 10,
    // alignContent: 'space-between',
    // justifyContent: 'space-between',
    backgroundColor: colors.light,
  },
  button: {
    backgroundColor: colors.red,
    borderRadius: 30,
    position: 'absolute',
    elevation: 5,
    right: 20,
    bottom: 30,
    padding: 10,
    width: 60,
    height: 60,
  },
  // card: {
  //   flex: ,
  // },
  icon: {
    tintColor: colors.white,
    padding: 10,
    width: 40,
    height: 40,
  },
});

export default SpecialistScreen;
