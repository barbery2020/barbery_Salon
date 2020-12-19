import {
	SET_CURRENT_USER,
	SET_TOKEN,
	SET_LOADING,
	LOGIN,
	LOGOUT,
	SIGNUP,
	UPDATE_CURRENT_USER,
} from '../types';

const initialState = {
	user: null,
	loading: false,
	token: null,
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case UPDATE_CURRENT_USER:
		case SET_CURRENT_USER:
			return {
				...state,
				user: payload,
				loading: false,
			};
		case LOGIN:
		case SIGNUP:
		case SET_TOKEN:
			return {
				...state,
				token: payload,
				loading: false,
			};

		case SET_LOADING:
			return {
				...state,
				loading: payload,
			};
		case LOGOUT:
			return initialState;
		default:
			return state;
	}
};
