import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

import HomeCard from '../../components/HomeCard';
import colors from '../../styles/colors';
//

const listings = [
  {
    id: 1,
    title: 'Total Customers',
    price: 984,
  },
  {
    id: 2,
    title: 'Total Specialists',
    price: 14,
  },
  {
    id: 3,
    title: 'Appointments Completed',
    price: 2014,
  },
  {
    id: 4,
    title: 'Appointments Pending',
    price: 70,
  },
  {
    id: 5,
    title: 'Total Services',
    price: 68,
  },
  {
    id: 6,
    title: 'Total Packages',
    price: 21,
  },
  {
    id: 7,
    title: 'Revenue',
    price: 100345,
  },
];

function HomeScreen(props) {
  return (
    <View style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({item}) => (
          <HomeCard
            title={item.title}
            subTitle={item.price}
            onPress={() => console.log(item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
});

export default HomeScreen;
