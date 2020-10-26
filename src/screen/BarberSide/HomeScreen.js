import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import GradientHeader from "react-native-gradient-header";
import * as Animatable from 'react-native-animatable';


import HomeCard from '../../components/HomeCard';
import colors from '../../styles/colors';
//

const listings = [
  {
    id: 1,
    title: 'Total Customers',
    price: 984,
    color: '#4287f5',
    image: require('../../assets/icons/profile.png'),
  },
  {
    id: 2,
    title: 'Total Specialists',
    price: 14,
    color: '#f5424b',
    image: require('../../assets/icons/profile.png'),
  },
  {
    id: 3,
    title: 'Appointments Completed',
    price: 1976,
    color: '#4dc94b',
    image: require('../../assets/icons/calendar.png'),
  },
  {
    id: 4,
    title: 'Appointments Pending',
    price: 70,
    color: '#b342f5',
    image: require('../../assets/icons/calendar.png'),
  },
  {
    id: 5,
    title: 'Total Services',
    price: 68,
    color: '#c9c742',
    image: require('../../assets/icons/services.png'),
  },
  {
    id: 6,
    title: 'Total Packages',
    price: 21,
    color: '#cc841f',
    image: require('../../assets/icons/services.png'),
  },
  {
    id: 7,
    title: 'Revenue',
    price: 100345,
    color: '#1fb5ab',
    image: require('../../assets/icons/dollar.png'),
  },
];

function HomeScreen(props) {
  return (
    <View style={styles.screen}>
      <Animatable.View 
        animation="slideInDown">
        <GradientHeader
          title="Hi, Ahmed Raza"
          subtitle="Have a nice day!"
          gradientColors={[ colors.orange, colors.red]}
          imageSource={require("../../assets/images/image_2.jpg")}
          />
      </Animatable.View>
      <FlatList 
        style={styles.flatScreen}
        data={listings}
        numColumns={2}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({item}) => (
          <HomeCard
            title={item.title}
            subTitle={item.price}
            bgImage={item.image}
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
    padding: 15,
    backgroundColor: colors.white,
  },
  flatScreen: {
    // backgroundColor: colors.red,
    marginTop: 120,
    paddingTop: 35,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
  },
});

export default HomeScreen;
