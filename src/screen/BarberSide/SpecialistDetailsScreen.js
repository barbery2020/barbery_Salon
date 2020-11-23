import React from 'react';
import {
	View,
	ScrollView,
	Text,
	TouchableWithoutFeedback,
	TouchableOpacity,
	Image,
	Switch,
	StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Root, Popup } from 'popup-ui';

import colors from '../../styles/colors';
import Separator from '../../components/Separator';

function SpecialistDetailsScreen(props) {
	const [isSwitch, setSwitch] = React.useState(true);

	return (
		<Root>
			<ScrollView>
				<View>
					<TouchableWithoutFeedback
						onPress={() => props.navigation.navigate('Image View')}
					>
						<Image
							style={styles.image}
							source={require('../../assets/images/image_5.jpg')}
						/>
					</TouchableWithoutFeedback>
					<View style={styles.detailsContainer}>
						<Text style={styles.title}>Tuseeq Ahmed</Text>
						<Separator />
						<View style={styles.switchContainer}>
							<Text style={styles.status}>Specialist Status</Text>
							<Switch
								value={isSwitch}
								onValueChange={(value) => setSwitch(value)}
							/>
						</View>
						<Separator />
						<Text style={styles.status}>About</Text>
						<Text style={styles.description}>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the industry's standard
							dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type specimen book. It
							has survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.
						</Text>
						<View style={styles.editBtn}>
							<LinearGradient
								colors={[colors.orange, colors.red]}
								style={styles.button}
							>
								<TouchableOpacity
									onPress={() => props.navigation.navigate('Update Specialist')}
								>
									<Text style={styles.textBtn}>Edit</Text>
								</TouchableOpacity>
							</LinearGradient>
							<LinearGradient
								colors={[colors.orange, colors.red]}
								style={styles.button}
							>
								<TouchableOpacity
									onPress={() =>
										Popup.show({
											type: 'Success',
											title: 'Specialist Deleted',
											// button: false,
											textBody: 'Specialist deleted successfully.',
											buttonText: 'Ok',
											callback: () => Popup.hide(),
										})
									}
								>
									<Text style={styles.textBtn}>Delete</Text>
								</TouchableOpacity>
							</LinearGradient>
						</View>
					</View>
				</View>
			</ScrollView>
		</Root>
	);
}

const styles = StyleSheet.create({
	description: {
		textAlign: 'justify',
	},
	detailsContainer: {
		padding: 20,
	},
	image: {
		width: '100%',
		height: 300,
	},
	price: {
		color: colors.red,
		fontWeight: 'bold',
		fontSize: 20,
		marginBottom: 20,
	},
	status: {
		color: colors.black,
		fontWeight: '300',
		fontSize: 20,
		marginVertical: 15,
	},
	switchContainer: {
		//flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	title: {
		color: colors.black,
		fontSize: 24,
		fontWeight: '500',
		marginVertical: 10,
	},
	titleCategory: {
		color: colors.medium,
		fontSize: 14,
		fontWeight: '300',
	},
	textBtn: {
		color: colors.white,
		fontSize: 16,
	},
	button: {
		borderRadius: 25,
		width: '30%',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		elevation: 5,
		marginVertical: 10,
	},
	editBtn: {
		flex: 1,
		flexDirection: 'row',
		marginTop: 20,
		justifyContent: 'space-evenly',
	},
});

export default SpecialistDetailsScreen;
