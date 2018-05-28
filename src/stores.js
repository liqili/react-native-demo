'use strict';


import thunk from 'redux-thunk';
import {
	createStore,
	applyMiddleware,
	compose
} from 'redux';
import {
	PersistGate
} from 'redux-persist/lib/integration/react';
import {
	persistStore,
	persistReducer
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import {
	AsyncStorage
} from 'react-native';
import reducers from './reducers';

const logger = store => next => action => {
	if (typeof action === 'function') console.log('dispatching a function');
	else console.log('dispatching', action);
	let result = next(action);
	console.log('next state', store.getState());
	return result;
}

let middlewares = [
	logger,
	thunk
];

let createAppStore = applyMiddleware(...middlewares)(createStore);
const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	transform: [],
};
const persistedReducer = persistReducer(persistConfig, reducers);



export default function configureStore(onComplete: () => void) {
	const store = createAppStore(persistedReducer);
	persistStore(store, null, onComplete);
	return store;
}