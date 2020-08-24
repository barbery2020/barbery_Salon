import React from 'react';
import {Text, View, StyleSheet, Image, TouchableHighlight} from 'react-native';

import colors from '../styles/colors';

function Card({title, subTitle, status, image, onPress}) {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
          <Text style={styles.status}>{status}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    elevation: 5,
    flexDirection: 'row',
    marginBottom: 20,
    overflow: 'hidden',
    shadowRadius: 20,
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
    fontWeight: '200',
  },
  status: {
    color: colors.green,
    fontWeight: '300',
    marginTop: 35,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 7,
  },
});

export default Card;
