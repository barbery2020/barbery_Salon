import 'react-native-gesture-handler';
import React from 'react';

import BarberAuth from './src/components/AuthStack';
import axios from 'axios';
import { connect } from 'react-redux';
import setAuthToken from './config';
import { StatusBar } from 'react-native';
import colors from './src/styles/colors';

axios.defaults.baseURL = 'http://barbery.herokuapp.com/api';

function App({ token }) {
	if (token) {
		setAuthToken(token);
	}
	return (
		<>
			<StatusBar backgroundColor={colors.red} />
			<BarberAuth />
		</>
	);
	// return <Check />;
}

const mapStateToProps = ({ user: { token } }) => ({ token });

export default connect(mapStateToProps)(App);
