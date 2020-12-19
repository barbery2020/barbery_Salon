import {
	GET_SERVICES,
	ADD_SERVICE,
	UPDATE_SERVICE,
	DELETE_SERVICE,
	SET_SERVICE_LOADING,
	LOGOUT,
} from '../types';

const initialState = {
	services: null,
	loading: false,
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case GET_SERVICES:
			return {
				...state,
				services: payload,
				loading: false,
			};
		case ADD_SERVICE:
			return {
				...state,
				services: [...services, payload],
				loading: false,
			};
		case UPDATE_SERVICE:
			return {
				...state,
				services: services.map((service) =>
					service._id === payload._id ? payload : service,
				),
				loading: false,
			};
		case DELETE_SERVICE:
			return {
				...state,
				services: services.filter((service) => service._id !== payload),
				loading: false,
			};
		case SET_SERVICE_LOADING:
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
