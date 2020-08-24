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
    borderRadius: 15,
    backgroundColor: colors.medium,
    elevation: 10,
    flexDirection: 'row',
    marginBottom: 20,
    overflow: 'hidden',
    shadowRadius: 30,
    width: '100%',
    height: 120,
  },
  detailsContainer: {
    flex: 1,
    padding: 20,
  },
  subTitle: {
    color: colors.orange,
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'right',
    marginTop: 15,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 5,
  },
});

export default HomeCard;
