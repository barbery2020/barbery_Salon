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
    <View>
      <TextInput
        style={styles.textInput}
        placeholder={'Title'}
        maxLength={50}
        onChangeText={(text) => setTitle(text)}
        value={title}
      />
      <TextInput
        style={styles.textInput}
        placeholder={'Price'}
        keyboardType="numeric"
        maxLength={5}
        onChangeText={(text) => setPrice(text)}
        value={price}
      />
      <TextInput
        style={styles.textInput}
        placeholder={'Description'}
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
      <TouchableOpacity style={styles.button} onPress={selectNewPhoto}>
        <Text style={styles.text}>Select Image</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: colors.red}]}
        onPress={() => props.navigation.navigate('Packages List')}>
        <Text style={styles.text}>Add Package</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.red,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  image: {
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    height: 250,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: colors.light,
    paddingHorizontal: 30,
    paddingVertical: 5,
    margin: 10,
  },
});

export default PackagesEditScreen;
