import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

import Card from '../../components/Card';
import colors from '../../styles/colors';
//

const listings = [
  {
    id: 1,
    title: 'Hair Cutting',
    price: 200,
    status: 'Active',
    image: require('../../assets/images/image_1.jpg'),
  },
  {
    id: 2,
    title: 'Trending Beard Dressing',
    price: 150,
    status: 'Active',
    image: require('../../assets/images/image_2.jpg'),
  },
  {
    id: 3,
    title: 'Hair Dressing',
    price: 170,
    status: 'Inactive',
    image: require('../../assets/images/image_3.jpg'),
  },
];

function ServicesListScreen(props) {
  return (
    //<Screen style={styles.screen}>
    <View style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({item}) => (
          <Card
            title={item.title}
            subTitle={'Rs.' + item.price}
            status={item.status}
            image={item.image}
            onPress={() => props.navigation.navigate('Service Details')}
          />
        )}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('Add New Service')}>
        <Image
          style={styles.icon}
          source={require('../../assets/icons/plus.png')}
        />
      </TouchableOpacity>
    </View>
    //</Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.light,
  },
  button: {
    backgroundColor: colors.red,
    borderRadius: 30,
    position: 'absolute',
    right: 20,
    bottom: 30,
    padding: 10,
    width: 60,
    height: 60,
  },
  icon: {
    tintColor: colors.white,
    padding: 10,
    width: 40,
    height: 40,
  },
});

export default ServicesListScreen;
