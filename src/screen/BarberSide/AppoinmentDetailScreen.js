import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	FlatList,
	TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Separator from '../../components/Separator';

import colors from '../../styles/colors';

export default function AppoinmentDetailScreen() {
	const [isCompleted, setCompleted] = React.useState(false);

	const customer = [
		{
			image: require('../../assets/images/image_1.jpg'),
			name: 'Masroor Ahmad',
			time: 'Oct 23, 2020 4:50 PM',
			package: 'nill',
			promo: 'nill',
			specialist: 'Humza Jameel',
			specialistImage: require('../../assets/images/image_3.jpg'),
		},
	];
	const services = [
		{
			id: 1,
			service: 'hair cut',
			price: 250,
		},
		{
			id: 2,
			service: 'shave',
			price: 200,
		},
		{
			id: 3,
			service: "Men's service",
			price: 400,
		},
	];
	console.log(customer[0].name);

	return (
		<View style={styles.screen}>
			<View style={styles.cardPerson}>
				<Image style={styles.image} source={customer[0].image} />
				<View style={styles.detailsContainer}>
					<Text style={styles.title}>{customer[0].name}</Text>
					<Text style={styles.time}>{customer[0].time}</Text>
				</View>
			</View>
			<View style={styles.servicesDetails}>
				<View style={styles.flatItemHeading}>
					<Text style={styles.heading}>Services</Text>
					<Text style={styles.heading}>Price</Text>
				</View>
				<View style={styles.card}>
					<FlatList
						style={styles.flatScreen}
						data={services}
						keyExtractor={(service) => service.id.toString()}
						renderItem={({ item }) => (
							<View style={styles.flatItem}>
								<Text>{item.service}</Text>
								<Text>{item.price}</Text>
							</View>
						)}
					/>
				</View>
				<Separator />
				<View style={styles.flatItem}>
					<Text style={styles.heading}>Promo</Text>
					<Text>-100</Text>
				</View>
				<View style={styles.flatItem}>
					<Text style={styles.heading}>Total</Text>
					<Text>750</Text>
				</View>
			</View>
			<View style={styles.cardPerson}>
				<Image style={styles.image} source={customer[0].specialistImage} />
				<View style={styles.detailsContainer}>
					<Text style={styles.title}>{customer[0].specialist}</Text>
					<Text style={styles.time}>specialist</Text>
				</View>
			</View>
			{!isCompleted ? (
				<LinearGradient
					colors={[colors.orange, colors.red]}
					style={[styles.button]}
				>
					<TouchableOpacity onPress={() => setCompleted(true)}>
						<Text style={styles.textBtn}>Mark Complete</Text>
					</TouchableOpacity>
				</LinearGradient>
			) : null}
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: colors.white,
	},
	card: {
		backgroundColor: colors.white,
		flexDirection: 'row',
	},
	cardPerson: {
		backgroundColor: colors.white,
		flexDirection: 'row',
		marginTop: 15,
		marginHorizontal: 20,
	},
	detailsContainer: {
		marginLeft: 10,
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
		margin: 10,
	},
	time: {
		color: colors.medium,
		fontWeight: '100',
		fontSize: 12,
		marginTop: 15,
	},
	title: {
		fontWeight: 'bold',
		paddingTop: 10,
	},
	flatScreen: {
		flex: 1,
		paddingVertical: 15,
	},
	flatItem: {
		flexDirection: 'row',
		marginHorizontal: 30,
		justifyContent: 'space-between',
	},
	flatItemHeading: {
		flexDirection: 'row',
		marginHorizontal: 30,
		justifyContent: 'space-between',
	},
	heading: {
		fontWeight: 'bold',
		// textDecorationLine: 'underline',
	},
	servicesDetails: {
		margin: 20,
		paddingVertical: 25,
		backgroundColor: colors.white,
		borderRadius: 20,
		elevation: 10,
	},
	buttonsContainer: {
		padding: 20,
		width: '100%',
	},
	button: {
		borderRadius: 25,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		elevation: 5,
		marginVertical: 25,
		marginHorizontal: 70,
	},
	textBtn: {
		color: colors.white,
		fontSize: 14,
		// textTransform: 'uppercase',
	},
});
