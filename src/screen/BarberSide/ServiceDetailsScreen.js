import React from 'react';
import {View, ScrollView, Text, Image, Switch, StyleSheet} from 'react-native';

import colors from '../../styles/colors';
import Separator from '../../components/Separator';

function ServiceDetailsScreen(props) {
  const [isSwitch, setSwitch] = React.useState(true);

  return (
    <ScrollView>
      <View>
        <Image
          style={styles.image}
          source={require('../../assets/images/image_2.jpg')}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.titleCategory}>Category>Beard Dressing</Text>
          <Text style={styles.title}>Trending Beard Shave</Text>
          <Text style={styles.price}>Rs. 150</Text>
          <Separator />
          <View style={styles.switchContainer}>
            <Text style={styles.status}>Service Status</Text>
            <Switch
              value={isSwitch}
              onValueChange={(value) => setSwitch(value)}
            />
          </View>
          <Separator />
          <Text style={styles.status}>Service Description</Text>
          <Text style={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  description: {
    textAlign: 'justify',
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    color: colors.red,
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  status: {
    color: colors.black,
    fontWeight: '300',
    fontSize: 20,
    marginVertical: 15,
  },
  switchContainer: {
    //flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.black,
    fontSize: 24,
    fontWeight: '500',
    marginVertical: 5,
  },
  titleCategory: {
    color: colors.medium,
    fontSize: 14,
    fontWeight: '300',
  },
});

export default ServiceDetailsScreen;
