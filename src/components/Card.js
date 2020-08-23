import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

import colors from '../styles/colors';

function Card({title, subTitle, status, image}) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
        <Text style={styles.status}>{status}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '40%',
    height: 140,
  },
  subTitle: {
    color: colors.red,
    fontWeight: 'bold',
  },
  status: {
    color: colors.green,
    fontWeight: 'bold',
    marginTop: 35,
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
