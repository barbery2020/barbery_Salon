import React from 'react';
import {
  View, 
  StyleSheet, 
  Image, 
  ScrollView, 
  Text, 
  TextInput, 
  TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

import colors from '../../styles/colors';

function ProfileScreen(props) {
  const [firstName, setFirstName] = React.useState('Ahmed');
  const [lastName, setLastName] = React.useState('Raza');
  const [email, setEmail] = React.useState('ahmedraza1@gmail.com');
  const [phone, setPhone] = React.useState('+923167512234');
  const [password, setPassword] = React.useState('12345raza');
  const [salonName, setSalonName] = React.useState('HairoSol');
  const [location, setLocation] = React.useState('G-9, Lane 3, Islamabad');


  return(
    <ScrollView style={styles.container}>
      <Animatable.View 
        animation="slideInDown"
        style={styles.imageContainer}>
        <Image 
          style={styles.CoverImage}
          source={require('../../assets/images/image_2.jpg')}
        />
        <Image 
          style={styles.profileImage}
          source={require('../../assets/images/image_5.jpg')}
        />
      </Animatable.View>
      <View style={styles.profileData}>
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
        <Text style={styles.text}>Shop/Saloon Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder={'e.g. HairoSol'}
          maxLength={50}
          onChangeText={(text) => setSalonName(text)}
          value={salonName}
        />
        <Text style={styles.text}>Location</Text>
        <TextInput
          style={styles.textInput}
          placeholder={'e.g. G-9, Lane 3, Islamabad '}
          maxLength={50}
          onChangeText={(text) => setLocation(text)}
          value={location}
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
            onPress={() => alert('Profile is updated.')}>
            <Text style={styles.textBtn}>Edit</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ScrollView>
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
    // paddingHorizontal: 15,
  },
  imageContainer: {
    alignItems: 'flex-start',
  },
  profileImage: {
    height: 160,
    width: 160,
    borderRadius: 80,
    borderColor: colors.red,
    borderWidth: 3,
    marginLeft: 15,
    marginTop: 170,
    marginBottom: 30,
  },
  CoverImage: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: 250,
    width: '100%',
    borderBottomRightRadius: 50,
  },
  profileData: {
    paddingHorizontal: 15,
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
