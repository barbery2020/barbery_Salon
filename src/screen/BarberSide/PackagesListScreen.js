import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Card from '../../components/Card';
import colors from '../../styles/colors';
//

const listings = [
  {
    id: 1,
    title: 'Hair and Beard Dressing',
    price: 450,
    status: 'Active',
    image: require('../../assets/images/image_6.jpg'),
  },
  {
    id: 2,
    title: 'Hair Cutting And Styling',
    price: 300,
    status: 'Active',
    image: require('../../assets/images/image_5.jpg'),
  },
  {
    id: 3,
    title: 'Beard Trimming and waxing',
    price: 350,
    status: 'Inactive',
    image: require('../../assets/images/image_7.jpg'),
  },
  {
    id: 4,
    title: 'Faded Cut & Light Ash Hair',
    price: 500,
    status: 'Inactive',
    image: require('../../assets/images/image_8.jpg'),
  },
  {
    id: 5,
    title: 'Hair and Beard Dressing',
    price: 450,
    status: 'Active',
    image: require('../../assets/images/image_6.jpg'),
  },
  {
    id: 6,
    title: 'Hair Cutting And Styling',
    price: 300,
    status: 'Active',
    image: require('../../assets/images/image_5.jpg'),
  },
  {
    id: 7,
    title: 'Beard Trimming and waxing',
    price: 350,
    status: 'Inactive',
    image: require('../../assets/images/image_7.jpg'),
  },
  {
    id: 8,
    title: 'Faded Cut & Light Ash Hair',
    price: 500,
    status: 'Inactive',
    image: require('../../assets/images/image_8.jpg'),
  },
  {
    id: 9,
    title: 'Hair and Beard Dressing',
    price: 450,
    status: 'Active',
    image: require('../../assets/images/image_6.jpg'),
  },
  {
    id: 10,
    title: 'Hair Cutting And Styling',
    price: 300,
    status: 'Active',
    image: require('../../assets/images/image_5.jpg'),
  },
  {
    id: 11,
    title: 'Beard Trimming and waxing',
    price: 350,
    status: 'Inactive',
    image: require('../../assets/images/image_7.jpg'),
  },
  {
    id: 12,
    title: 'Faded Cut & Light Ash Hair',
    price: 500,
    status: 'Inactive',
    image: require('../../assets/images/image_8.jpg'),
  },
];

function PackagesListScreen(props) {
  return (
    //<Screen style={styles.screen}>
    <View style={styles.screen}>
      <FlatList
        style={styles.flatScreen}
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
      <LinearGradient 
        colors={[ colors.orange , colors.red ]} 
        style={[styles.button]}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Add New Package')}>
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
    backgroundColor: colors.white,
  },
  flatScreen: {
    flex: 1,
    paddingTop: 15,
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
  icon: {
    tintColor: colors.white,
    padding: 10,
    width: 40,
    height: 40,
  },
});

export default PackagesListScreen;
