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

function SpecialistCard({title, status, image, onPress}) {
  const getStatus = (status) => {
    if (status === 'Inactive') return false;
    return true;
  };

  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <Text style={styles.title}>{title}</Text>
        <Text
          style={[
            getStatus(status) ? styles.active : styles.inActive,
            styles.status,
          ]}>
          {status}
        </Text>
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
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    elevation: 10,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10,
    overflow: 'hidden',
    shadowRadius: 30,
    width: 167,
    height: 230,
  },
  detailsContainer: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 160,
  },
  subTitle: {
    color: colors.orange,
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'right',
    marginTop: 15,
  },
  status: {
    fontWeight: '700',
    position: 'absolute',
    top: 200,
    right: 20,
  },
  title: {
    color: colors.black,
    fontSize: 18,
    fontWeight: '500',
    position: 'absolute',
    top: 170,
    left: 10,
  },
});

export default SpecialistCard;
