import React from 'react';
import {
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../../styles/colors';

const options = {
  title: 'Select Photo',
  takePhotoButtonTitle: 'Take photo with your camera',
  chooseFromLibraryButtonTitle: 'Choose photo from library',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

function PackagesEditScreen(props) {
  const [title, setTitle] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [imagePicked, setImagePicked] = React.useState();

  selectNewPhoto = async () => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image Picker Error: ', response.error);
      } else {
        const uri = response.uri;
        const type = 'image/jpg';
        const name = response.fileName;
        const source = {uri, type, name};
        console.log(source);

        // let source = {uri: response.uri};
        setImagePicked({
          imageURI: uri,
        });
        //console.log(source);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Title</Text>
      <TextInput
        style={styles.textInput}
        placeholder={'e.g. Hair Cutting'}
        maxLength={50}
        onChangeText={(text) => setTitle(text)}
        value={title}
      />
      <Text style={styles.text}>Price</Text>
      <TextInput
        style={styles.textInput}
        placeholder={'e.g. 150'}
        keyboardType="numeric"
        maxLength={5}
        onChangeText={(text) => setPrice(text)}
        value={price}
      />
      <Text style={styles.text}>Description</Text>
      <TextInput
        style={styles.textInput}
        maxLength={255}
        numberOfLines={3}
        onChangeText={(text) => setDescription(text)}
        value={description}
      />
      {imagePicked && (
        <Image
          style={styles.image}
          source={require('../../assets/images/image_4.png')}
        />
      )}
      <LinearGradient 
        colors={[ colors.orange , colors.red ]} 
        style={[styles.button]}>
        <TouchableOpacity onPress={selectNewPhoto}>
          <Text style={styles.textBtn}>Select Image</Text>
        </TouchableOpacity>
      </LinearGradient>
      <LinearGradient 
          colors={[ colors.orange , colors.red ]} 
          style={[styles.button]}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Packages List')}>
            <Text style={styles.textBtn}>Add Package</Text>
          </TouchableOpacity>
        </LinearGradient>

    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    elevation: 5,
    marginVertical: 10,
    marginHorizontal: 70,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignContent: 'center',
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  image: {
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    height: 250,
  },
  text: {
    color: colors.black,
    fontSize: 14,
    paddingHorizontal: 20,
  },
  textBtn: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
  },
  textInput: {
    height: 40,
    fontSize: 14,
    borderRadius: 25,
    elevation: 5,
    backgroundColor: colors.light,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginHorizontal: 10,
    marginTop: 5,
    marginBottom: 20,
  },
});

export default PackagesEditScreen;
