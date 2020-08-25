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
    title: 'Hair and Beard Dressing',
    price: 450,
    status: 'Active',
    image: require('../../assets/images/image_1.jpg'),
  },
  {
    id: 2,
    title: 'Hair Cutting And Styling',
    price: 300,
    status: 'Active',
    image: require('../../assets/images/image_3.jpg'),
  },
  {
    id: 3,
    title: 'Beard Triming and waxing',
    price: 350,
    status: 'Inactive',
    image: require('../../assets/images/image_2.jpg'),
  },
];

function PackagesListScreen(props) {
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
            onPress={() => props.navigation.navigate('Package Details')}
          />
        )}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('Add New Package')}>
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

export default PackagesListScreen;
