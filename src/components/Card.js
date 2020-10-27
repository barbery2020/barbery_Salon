import React from 'react';
import {Text, View, StyleSheet, Image, TouchableHighlight} from 'react-native';

import colors from '../styles/colors';

function Card({title, subTitle, status, image, onPress}) {
  const getStatus = (status) => {
    if (status === 'Inactive') return false;
    return true;
  };

  return (
    <TouchableHighlight style={styles.screen} underlayColor={colors.light} onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
          <Text
            style={[
              getStatus(status) ? styles.active : styles.inActive,
              styles.status,
            ]}>
            {status}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  active: {
    color: colors.green,
  },
  inActive: {
    color: colors.red,
  },
  screen: {
    flex: 1,
    // backgroundColor: colors.red,
    paddingBottom: 15,
    paddingHorizontal: 15,
  },
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    elevation: 10,
    flexDirection: 'row',
    // marginHorizontal: 10,
    // marginTop: 20,
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
    color: colors.dark,
    fontWeight: '200',
  },
  status: {
    fontWeight: '700',
    marginTop: 35,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default Card;
