import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

export default function AppoinmentDetailScreen() {
	const customer = [
		{
			name: 'Masroor Ahmad',
			time: 'Oct 23, 2020 4:50 PM',
			package: 'nill',
			specialist: 'Humza Jameel',
			promo: 'nill',
			image: require('../../assets/images/image_1.jpg'),
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
			<View style={styles.card}>
				<Image style={styles.image} source={customer[0].image} />
				<View style={styles.detailsContainer}>
					<Text style={styles.title}>{customer[0].name}</Text>
					<Text style={styles.time}>{customer[0].time}</Text>
				</View>
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
		paddingTop: 15,
	},
	flatItem: {
		flexDirection: 'row',
		marginHorizontal: 30,
		justifyContent: 'space-between',
	},
});
