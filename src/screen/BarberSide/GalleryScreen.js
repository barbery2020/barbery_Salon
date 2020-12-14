import React, { useState, useEffect } from 'react';
import {
	View,
	Image,
	FlatList,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import ImageView from 'react-native-image-viewing';
import LinearGradient from 'react-native-linear-gradient';
import { Picker } from '@react-native-picker/picker';
import ImagePicker from 'react-native-image-picker';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import ImageGalleryCard from '../../components/ImageGalleryCard';
import colors from '../../styles/colors';

const photosList = [
	{
		id: 1,
		uri: 'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4',
	},
	{
		id: 2,
		uri: 'https://images.unsplash.com/photo-1573273787173-0eb81a833b34',
	},
	{
		id: 3,
		uri: 'https://images.unsplash.com/photo-1569569970363-df7b6160d111',
	},
];

export default function GalleryScreen(props) {
	const [imageIndex, setImageIndex] = useState(0);
	const [visible, setIsVisible] = useState(false);
	const [photos, setPhotos] = useState([]);
	const columns = 4;

	useEffect(() => {
		setPhotos(photosList);
	}, []);

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
				const newImg = {
					id: uuidv4(),
					uri: res.uri,
				};
				console.log(newImg);
				setPhotos([...photos, newImg]);
				console.log(photos);
			}
		});
	};

	return (
		<View style={styles.screen}>
			<FlatList
				style={{ flex: 1 }}
				numColumns={columns}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				data={photos}
				keyExtractor={(photo) => photo.id.toString()}
				renderItem={({ item, index }) => (
					<ImageGalleryCard
						image={item.uri}
						onPress={() => {
							setIsVisible(true);
							setImageIndex(index);
						}}
					/>
				)}
			/>
			<LinearGradient
				colors={[colors.orange, colors.red]}
				style={[styles.button]}
			>
				<TouchableOpacity onPress={selectFile}>
					<Image
						style={styles.icon}
						source={require('../../assets/icons/plus.png')}
					/>
				</TouchableOpacity>
			</LinearGradient>
			<ImageView
				images={photos}
				imageIndex={imageIndex}
				visible={visible}
				onRequestClose={() => setIsVisible(false)}
				onLongPress={() => console.log('long pressed')}
			/>
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
		bottom: 20,
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
