import React, { useEffect } from 'react';
import {
	View,
	FlatList,
	TouchableOpacity,
	Image,
	StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Card from '../../components/Card';
import colors from '../../styles/colors';

import { connect } from 'react-redux';
import { getServices } from '../../redux/actions/serviceAction';

const listings = [
	{
		id: 1,
		title: 'Hair Cutting',
		price: 200,
		status: 'Active',
		image: require('../../assets/images/image_1.jpg'),
	},
	{
		id: 2,
		title: 'Trending Beard Dressing',
		price: 150,
		status: 'Active',
		image: require('../../assets/images/image_2.jpg'),
	},
	{
		id: 3,
		title: 'Hair Dressing',
		price: 170,
		status: 'Inactive',
		image: require('../../assets/images/image_3.jpg'),
	},
	{
		id: 4,
		title: 'Faded Hair Cut',
		price: 200,
		status: 'Active',
		image: require('../../assets/images/image_9.jpg'),
	},
	{
		id: 5,
		title: 'Hair Cutting',
		price: 200,
		status: 'Active',
		image: require('../../assets/images/image_1.jpg'),
	},
	{
		id: 6,
		title: 'Trending Beard Dressing',
		price: 150,
		status: 'Active',
		image: require('../../assets/images/image_2.jpg'),
	},
	{
		id: 7,
		title: 'Hair Dressing',
		price: 170,
		status: 'Inactive',
		image: require('../../assets/images/image_3.jpg'),
	},
	{
		id: 8,
		title: 'Faded Hair Cut',
		price: 200,
		status: 'Active',
		image: require('../../assets/images/image_9.jpg'),
	},
	{
		id: 9,
		title: 'Hair Cutting',
		price: 200,
		status: 'Active',
		image: require('../../assets/images/image_1.jpg'),
	},
	{
		id: 10,
		title: 'Trending Beard Dressing',
		price: 150,
		status: 'Active',
		image: require('../../assets/images/image_2.jpg'),
	},
	{
		id: 11,
		title: 'Hair Dressing',
		price: 170,
		status: 'Inactive',
		image: require('../../assets/images/image_3.jpg'),
	},
	{
		id: 12,
		title: 'Faded Hair Cut',
		price: 200,
		status: 'Active',
		image: require('../../assets/images/image_9.jpg'),
	},
];

function ServicesListScreen({
	navigation: { navigate },
	services,
	getServices,
	loading,
}) {
	useEffect(() => {
		getServices();
		return () => {};
	}, []);

	return (
		<View style={styles.screen}>
			<FlatList
				contentContainerStyle={{ paddingBottom: 15 }}
				style={styles.flatScreen}
				data={services}
				keyExtractor={(service, index) => index.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.name}
						subTitle={'Rs.' + item.cost}
						status={item.status}
						image={`data:${item.picture.type};base64,${item.picture.data}`}
						onPress={() => navigate('Service Details', { service: item })}
					/>
				)}
			/>
			<LinearGradient
				colors={[colors.orange, colors.red]}
				style={[styles.button]}
			>
				<TouchableOpacity onPress={() => navigate('Add Service')}>
					<Image
						style={styles.icon}
						source={require('../../assets/icons/plus.png')}
					/>
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
	flatScreen: {
		flex: 1,
		paddingTop: 10,
	},
	button: {
		backgroundColor: colors.red,
		borderRadius: 30,
		position: 'absolute',
		elevation: 5,
		right: 20,
		bottom: 30,
		padding: 10,
		width: 60,
		height: 60,
	},
	icon: {
		tintColor: colors.white,
		padding: 10,
		width: 40,
		height: 40,
	},
});

const mapStateToProps = ({ serviceReducer: { services, loading } }) => ({
	services,
	loading,
});

const mapActionToProps = { getServices };

export default connect(mapStateToProps, mapActionToProps)(ServicesListScreen);
