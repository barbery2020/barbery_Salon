import React, { useState } from 'react';
import {
	View,
	TextInput,
	FlatList,
	Button,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { Icon } from 'react-native-elements/FontAwesome';
import { useIsFocused } from '@react-navigation/native';

import LoadingIndicator from '../../components/LoadingIndicator';
import Card from '../../components/AppointmentCard';
import colors from '../../styles/colors';
import axios from '../../../config';
import { useEffect } from 'react';

const appointment1 = [
	{
		id: 1,
		name: 'Tuseeq Raza',
		price: 200,
		status: 'Active',
		time: 'Oct 23, 2020 4:50 PM',
		image: require('../../assets/images/image_1.jpg'),
	},
	{
		id: 2,
		name: 'Tuseeq Ahmed',
		price: 300,
		status: 'Active',
		time: 'Oct 17, 2020 9:50 AM',
		image: require('../../assets/images/image_2.jpg'),
	},
	{
		id: 3,
		name: 'Abdullah',
		price: 100,
		status: 'Active',
		time: 'Oct 23, 2020 4:50 PM',
		image: require('../../assets/images/image_3.jpg'),
	},
	{
		id: 4,
		name: 'Humza Jameel',
		price: 250,
		status: 'Active',
		time: 'Oct 16, 2020 11:50 AM',
		image: require('../../assets/images/image_5.jpg'),
	},
	{
		id: 5,
		name: 'Tuseeq Raza',
		price: 200,
		status: 'Active',
		time: 'Oct 23, 2020 4:50 PM',
		image: require('../../assets/images/image_6.jpg'),
	},
	{
		id: 6,
		name: 'Tuseeq Ahmed',
		price: 300,
		status: 'Active',
		time: 'Oct 17, 2020 9:50 AM',
		image: require('../../assets/images/image_7.jpg'),
	},
	{
		id: 7,
		name: 'Abdullah',
		price: 100,
		status: 'Active',
		time: 'Oct 23, 2020 4:50 PM',
		image: require('../../assets/images/image_8.jpg'),
	},
	{
		id: 8,
		name: 'Humza Jameel',
		price: 250,
		status: 'Active',
		time: 'Oct 16, 2020 11:50 AM',
		image: require('../../assets/images/image_9.jpg'),
	},
];

const appointment2 = [
	{
		id: 1,
		name: 'Masroor Ahmad',
		price: 200,
		status: 'Completed',
		time: 'Oct 23, 2020 4:50 PM',
		image: require('../../assets/images/image_9.jpg'),
	},
	{
		id: 2,
		name: 'Raza Saleem',
		price: 300,
		status: 'Completed',
		time: 'Oct 17, 2020 9:50 AM',
		image: require('../../assets/images/image_8.jpg'),
	},
	{
		id: 3,
		name: 'Awais',
		price: 100,
		status: 'Completed',
		time: 'Oct 23, 2020 4:50 PM',
		image: require('../../assets/images/image_7.jpg'),
	},
	{
		id: 4,
		name: 'Kashif Habib',
		price: 250,
		status: 'Completed',
		time: 'Oct 16, 2020 11:50 AM',
		image: require('../../assets/images/image_6.jpg'),
	},
	{
		id: 5,
		name: 'Naveed',
		price: 200,
		status: 'Completed',
		time: 'Oct 23, 2020 4:50 PM',
		image: require('../../assets/images/image_5.jpg'),
	},
	{
		id: 6,
		name: 'Amjad Ahmad',
		price: 300,
		status: 'Completed',
		time: 'Oct 17, 2020 9:50 AM',
		image: require('../../assets/images/image_3.jpg'),
	},
	{
		id: 7,
		name: 'Faisal Shah',
		price: 100,
		status: 'Completed',
		time: 'Oct 23, 2020 4:50 PM',
		image: require('../../assets/images/image_2.jpg'),
	},
	{
		id: 8,
		name: 'Jahangeer Khan',
		price: 250,
		status: 'Completed',
		time: 'Oct 16, 2020 11:50 AM',
		image: require('../../assets/images/image_1.jpg'),
	},
];

function ActiveAppointmentsScreen(props) {
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
	const [isDate, setDate] = useState('Select Date');

	// const showDatePicker = () => {
	// 	setDatePickerVisibility(true);
	// };

	// const hideDatePicker = () => {
	// 	setDatePickerVisibility(false);
	// };

	// const handleConfirm = (selectedDate) => {
	// 	// console.warn('Selected Date: ', selectedDate);
	// 	const day = selectedDate.getDate();
	// 	const month = selectedDate.getMonth();
	// 	const year = selectedDate.getFullYear();
	// 	const date = day + '/' + month + '/' + year;
	// 	setDate(date);
	// 	console.warn('Selected Date: ', date);
	// 	hideDatePicker();
	// };

	return (
		<View style={styles.screen}>
			{props?.loading && <LoadingIndicator />}
			<FlatList
				contentContainerStyle={{ paddingBottom: 15 }}
				style={styles.flatScreen}
				data={props?.appointment}
				keyExtractor={(appointment) => appointment.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						subTitle={'Rs.' + item.price}
						time={`${item.date} / ${item.time}`}
						status={item.status}
						image={item.image}
						selectedDate={isDate}
						onPress={() =>
							props.navigation.navigate('Appointment Details', {
								item,
								update: props?.update,
							})
						}
					/>
				)}
			/>
		</View>
	);
}

function CompletedAppointmentsScreen(props) {
	return (
		<View style={styles.screen}>
			{props?.loading && <LoadingIndicator />}
			<FlatList
				contentContainerStyle={{ paddingBottom: 15 }}
				style={styles.flatScreen}
				data={props?.appointment}
				keyExtractor={(appointment) => appointment.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						subTitle={'Rs.' + item.price}
						time={`${item.date} / ${item.time}`}
						status={item.status}
						image={item.image}
						onPress={() =>
							props.navigation.navigate('Appointment Details', { item })
						}
					/>
				)}
			/>
		</View>
	);
}

const Tab = createMaterialBottomTabNavigator();

export default function AppointmentScreen(props) {
	const [appointments, setAppointments] = useState([]);
	const [completed, setCompleted] = useState([]);
	const [active, setActive] = useState([]);
	const [loading, setLoading] = useState(true);

	const isFocused = useIsFocused();

	useEffect(() => {
		if (isFocused) {
			setLoading(true);
			axios.get('/appointment/barber').then((res) => {
				setAppointments(
					res.data.map((SS) => ({
						title: SS?.user?.firstName,
						image: `data:${SS?.user?.image?.type};base64,${SS?.user?.image?.data}`,
						status: SS?.status,
						price: SS?.bill,
						time: SS?.timing,
						date: SS?.date?.split('T')[0],
						id: SS?._id,
						specialist: SS?.specialist,
						services: SS?.services,
						promo: SS?.promo,
						bill: SS?.bill,
						review: SS?.review,
					})),
				);
				setLoading(false);
			});
		}
		return () => {};
	}, [isFocused]);

	useEffect(() => {
		setActive(appointments.filter((val) => val?.status));
		setCompleted(appointments.filter((val) => !val?.status));

		return () => {};
	}, [appointments]);

	return (
		<Tab.Navigator
			initialRouteName="Active"
			activeColor={colors.white}
			inactiveColor={colors.lightRed}
			barStyle={{ backgroundColor: colors.red }}
		>
			<Tab.Screen
				name="Active"
				// component={ActiveAppointmentsScreen}
				options={{
					tabBarLabel: 'Active',
					tabBarIcon: ({ color }) => (
						<Icon name="history" color={color} size={20} />
					),
				}}
			>
				{(props) => (
					<ActiveAppointmentsScreen
						{...props}
						appointment={active}
						loading={loading}
					/>
				)}
			</Tab.Screen>
			<Tab.Screen
				name="Completed"
				// component={CompletedAppointmentsScreen}
				options={{
					tabBarLabel: 'Completed',
					tabBarIcon: ({ color }) => (
						<Icon name="check" color={color} size={20} />
					),
				}}
			>
				{(props) => (
					<CompletedAppointmentsScreen
						{...props}
						appointment={completed}
						loading={loading}
					/>
				)}
			</Tab.Screen>
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
	row: {
		alignContent: 'center',
		justifyContent: 'space-between',
		textAlign: 'center',
		flexDirection: 'row',
		backgroundColor: colors.white,
		elevation: 5,
	},
	rowInput: {
		width: '100%',
	},
	textInput: {
		flexDirection: 'row',
		height: 40,
		borderRadius: 20,
		elevation: 5,
		paddingHorizontal: 20,
		justifyContent: 'space-between',
		margin: 15,
		borderWidth: 1,
		borderColor: colors.red,
		backgroundColor: colors.white,
	},
});
