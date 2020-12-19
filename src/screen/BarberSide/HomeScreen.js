import React from 'react';
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import GradientHeader from 'react-native-gradient-header';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

import HomeCard from '../../components/HomeCard';
import colors from '../../styles/colors';
import { connect } from 'react-redux';
import { getUser, logout } from '../../redux/actions/user';
import { useEffect } from 'react';
import { useState } from 'react';

const listings = [
	{
		id: 1,
		title: 'Total Customers',
		price: 984,
		color: '#4287f5',
		image: require('../../assets/icons/profile.png'),
	},
	{
		id: 2,
		title: 'Total Specialists',
		price: 14,
		color: '#f5424b',
		image: require('../../assets/icons/profile.png'),
	},
	{
		id: 3,
		title: 'Appointments Completed',
		price: 1976,
		color: '#4dc94b',
		image: require('../../assets/icons/calendar.png'),
	},
	{
		id: 4,
		title: 'Appointments Pending',
		price: 70,
		color: '#b342f5',
		image: require('../../assets/icons/calendar.png'),
	},
	{
		id: 5,
		title: 'Total Services',
		price: 68,
		color: '#c9c742',
		image: require('../../assets/icons/services.png'),
	},
	{
		id: 6,
		title: 'Total Packages',
		price: 21,
		color: '#cc841f',
		image: require('../../assets/icons/services.png'),
	},
	{
		id: 7,
		title: 'Revenue',
		price: 100345,
		color: '#1fb5ab',
		image: require('../../assets/icons/dollar.png'),
	},
];

function HomeScreen({ getUser, navigation: { goBack }, user, logout }) {
	useEffect(() => {
		if (!user) {
			getUser();
		}
		return () => {};
	}, []);

	return (
		<View style={styles.screen}>
			<View style={styles.headerScreen}>
				<Animatable.View animation="slideInDown">
					<GradientHeader
						title={`Hi, ${user?.firstName}`}
						subtitle="Have a nice day!"
						gradientColors={[colors.orange, colors.red]}
						imageSource={{
							uri: user?.image
								? `data:${user?.image?.type};base64,${user?.image?.data}`
								: profileImg.img,
						}}
					/>
				</Animatable.View>
			</View>
			<View style={styles.flatContainer}>
				<FlatList
					contentContainerStyle={{ paddingBottom: 15 }}
					style={styles.flatScreen}
					data={listings}
					numColumns={2}
					showsVerticalScrollIndicator={false}
					keyExtractor={(listing) => listing.id.toString()}
					renderItem={({ item }) => (
						<HomeCard
							title={item.title}
							subTitle={item.price}
							bgImage={item.image}
							onPress={() => console.log(item)}
						/>
					)}
				/>
			</View>
			<LinearGradient
				colors={[colors.orange, colors.red]}
				style={styles.button}
			>
				<TouchableOpacity
					style={{ width: '100%', alignItems: 'center' }}
					onPress={() => {
						logout();
						goBack();
					}}
				>
					<Text style={styles.textBtn}>Logout</Text>
				</TouchableOpacity>
			</LinearGradient>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: colors.white,
	},
	headerScreen: {
		flex: 1,
	},
	flatContainer: {
		flex: 3,
		zIndex: -1,
		paddingHorizontal: 20,
	},
	flatScreen: {
		flex: 1,
		paddingTop: 10,
	},
	textBtn: {
		color: colors.white,
		fontSize: 18,
		textTransform: 'uppercase',
	},
	button: {
		backgroundColor: colors.red,
		borderRadius: 25,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		elevation: 5,
		marginBottom: 10,
		marginHorizontal: 90,
	},
});

const mapStateToProps = ({ user: { user, token } }) => ({ user, token });

const mapActionToProps = { getUser, logout };

export default connect(mapStateToProps, mapActionToProps)(HomeScreen);
