import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

import colors from '../styles/colors';

const width = Dimensions.get('window').width;

function HomeCard({title, subTitle, onPress}) {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    elevation: 10,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowRadius: 30,
    marginHorizontal: 10,
    marginVertical: 10,
    width: 162,
    height: 115,
  },
  detailsContainer: {
    flex: 1,
    padding: 15,
  },
  subTitle: {
    color: colors.orange,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'right',
    position: 'absolute',
    right: 15,
    bottom: 15,
  },
  title: {
    color: colors.black,
    fontSize: 14,
    fontWeight: '500',
    marginVertical: 5,
  },
});

export default HomeCard;
