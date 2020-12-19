import React from 'react';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import user from './reducers/user';
import mainRecords from './reducers/mainRecords';

const config = {
	key: 'root',
	storage,
	whitelist: ['user'],
};

const rootReducer = combineReducers({ user, mainRecords });

export default persistReducer(config, rootReducer);