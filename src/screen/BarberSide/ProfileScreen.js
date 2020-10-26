import React from 'react';
import {View, StyleSheet, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../../styles/colors';

function ProfileScreen(props) {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [conPassword, setConPassword] = React.useState('');


  return(
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          style={styles.profileImage}
          source={require('../../assets/images/image_2.jpg')}
        />
      </View>
      <View styles={styles.profileData}>
        <View style={styles.row}>
          <View style={styles.rowInput}>
          <Text style={styles.text}>First Name</Text>
          <TextInput
            style={styles.textInput}
            placeholder={'Ahmed'}
            maxLength={50}
            onChangeText={(text) => setFirstName(text)}
            value={firstName}
          />
          </View>
          <View style={styles.rowInput}>
          <Text style={styles.text}>Last Name</Text>
          <TextInput
            style={styles.textInput}
            placeholder={'Raza'}
            maxLength={50}
            onChangeText={(text) => setLastName(text)}
            value={lastName}
          />
          </View>
        </View>
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.textInput}
          placeholder={'e.g. abc@gmail.com'}
          maxLength={50}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Text style={styles.text}>Phone no.</Text>
        <TextInput
          style={styles.textInput}
          placeholder={'+92'}
          keyboardType={"numeric"}
          maxLength={13}
          minLength={11}
          onChangeText={(text) => setPhone(text)}
          value={phone}
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder={'*****'}
          maxLength={20}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          value={password}
        />
        <LinearGradient 
          colors={[ colors.orange , colors.red ]} 
          style={[styles.button]}>
          <TouchableOpacity
            // onPress={() => props.navigation.navigate('Home')}
            >
            <Text style={styles.textBtn}>Edit</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
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
    elevation: 5,
    marginVertical: 20,
    marginHorizontal: 90,
  },
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    // paddingVertical: 30,
  },
  imageContainer: {
    // flex: 1,
    alignItems: 'center',
  },
  profileImage: {
    height: 180,
    width: 180,
    borderRadius: 90,
    borderColor: colors.red,
    borderWidth: 3,
    marginVertical: 30,
  },
  profileData: {
    backgroundColor: colors.red,
  },
  row: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  rowInput: {
    width: 170,
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
    marginBottom: 15,
  },
});

export default ProfileScreen;
