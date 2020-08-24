import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

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
            onPress={() => console.log(item)}
          />
        )}
      />
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
});

export default ServicesListScreen;
