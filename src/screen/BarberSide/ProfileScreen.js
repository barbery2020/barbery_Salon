import React from 'react';
import {
	View,
	StyleSheet,
	Image,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	FlatList,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-picker';
import * as Animatable from 'react-native-animatable';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ReviewCard from '../../components/ReviewCard';
import colors from '../../styles/colors';

const Tab = createMaterialTopTabNavigator();

const appointment1 = [
	{
		id: 1,
		name: 'Tuseeq Raza',
		rated: 2,
		text:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
		time: 'Oct 23, 2020 4:50 PM',
		image: require('../../assets/images/image_1.jpg'),
	},
	{
		id: 2,
		name: 'Tuseeq Ahmed',
		rated: 4,
		text: 'Active',
		time: 'Oct 17, 2020 9:50 AM',
		image: require('../../assets/images/image_2.jpg'),
	},
	{
		id: 3,
		name: 'Abdullah',
		rated: 5,
		text: 'Active',
		time: 'Oct 23, 2020 4:50 PM',
		image: require('../../assets/images/image_3.jpg'),
	},
	{
		id: 4,
		name: 'Humza Jameel',
		rated: 1,
		text: 'Active',
		time: 'Oct 16, 2020 11:50 AM',
		image: require('../../assets/images/image_5.jpg'),
	},
	{
		id: 5,
		name: 'Tuseeq Raza',
		rated: 0,
		text: 'Active',
		time: 'Oct 23, 2020 4:50 PM',
		image: require('../../assets/images/image_6.jpg'),
	},
	{
		id: 6,
		name: 'Tuseeq Ahmed',
		rated: 5,
		text: 'Active',
		time: 'Oct 17, 2020 9:50 AM',
		image: require('../../assets/images/image_7.jpg'),
	},
	{
		id: 7,
		name: 'Abdullah',
		rated: 1,
		text: 'Active',
		time: 'Oct 23, 2020 4:50 PM',
		image: require('../../assets/images/image_8.jpg'),
	},
	{
		id: 8,
		name: 'Humza Jameel',
		rated: 5,
		text: 'Active',
		time: 'Oct 16, 2020 11:50 AM',
		image: require('../../assets/images/image_9.jpg'),
	},
];

function barberAbout() {
	const [image, setImage] = React.useState('');
	const [firstName, setFirstName] = React.useState('Ahmed');
	const [lastName, setLastName] = React.useState('Raza');
	const [email, setEmail] = React.useState('ahmedraza1@gmail.com');
	const [phone, setPhone] = React.useState('+923167512234');
	const [password, setPassword] = React.useState('12345raza');
	const [salonName, setSalonName] = React.useState('HairoSol');
	const [location, setLocation] = React.useState('G-9, Lane 3, Islamabad');

	const selectFile = () => {
		var options = {
			title: 'Select Image',
			storageOptions: {
				skipBackup: true,
				path: 'images',
			},
		};

		ImagePicker.showImagePicker(options, (res) => {
			// console.log('Response = ', res);

			if (res.didCancel) {
				console.log('User cancelled image picker');
			} else if (res.error) {
				console.log('ImagePicker Error: ', res.error);
			} else {
				const uri = res.uri;
				const type = 'image/jpg';
				const name = res.fileName;
				const source = { uri, type, name };
				console.log(uri);
				setImage({
					imageURI: uri,
				});
			}
		});
	};

	return (
		<ScrollView style={styles.container}>
			<TouchableOpacity style={styles.imageContainer} onPress={selectFile}>
				<Image style={styles.profileImage} source={{ uri: image.imageURI }} />
			</TouchableOpacity>
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
					keyboardType={'numeric'}
					maxLength={13}
					minLength={11}
					onChangeText={(text) => setPhone(text)}
					value={phone}
				/>
				<Text style={styles.text}>Password</Text>
				<TextInput
					style={styles.textInput}
					placeholder={'***'}
					maxLength={20}
					onChangeText={(text) => setPassword(text)}
					secureTextEntry={true}
					value={password}
				/>
				<Text
					style={[
						styles.text,
						{
							fontSize: 20,
							fontWeight: 'bold',
							marginTop: 30,
							marginBottom: 15,
						},
					]}
				>
					Salon Details
				</Text>
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

				<LinearGradient
					colors={[colors.orange, colors.red]}
					style={[styles.button]}
				>
					<TouchableOpacity onPress={() => alert('Profile is updated.')}>
						<Text style={styles.textBtn}>Edit</Text>
					</TouchableOpacity>
				</LinearGradient>
			</View>
		</ScrollView>
	);
}

function barberReviews(props) {
	return (
		<View style={styles.screen}>
			<FlatList
				contentContainerStyle={{ paddingBottom: 15 }}
				style={styles.flatScreen}
				data={appointment1}
				keyExtractor={(appointment1) => appointment1.id.toString()}
				renderItem={({ item }) => (
					<ReviewCard
						title={item.name}
						time={item.time}
						image={item.image}
						text={item.text}
						rated={item.rated}
					/>
				)}
			/>
		</View>
	);
}

function ProfileScreen() {
	return (
		<Tab.Navigator
			initialRouteName="About"
			tabBarOptions={{
				labelStyle: { fontSize: 14 },
				indicatorStyle: { backgroundColor: colors.white },
				activeTintColor: colors.white,
				inActiveTintColor: colors.lightRed,
				style: { backgroundColor: colors.red },
			}}
		>
			<Tab.Screen
				name="About"
				component={barberAbout}
				options={{
					tabBarLabel: 'About',
				}}
			/>
			<Tab.Screen
				name="Reviews"
				component={barberReviews}
				options={{
					tabBarLabel: 'Reviews',
				}}
			/>
		</Tab.Navigator>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: colors.white,
	},
	flatScreen: {
		flex: 1,
		paddingTop: 10,
	},
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
		alignItems: 'center',
	},
	profileImage: {
		height: 160,
		width: 160,
		borderRadius: 80,
		borderColor: colors.red,
		borderWidth: 3,
		marginVertical: 40,
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
