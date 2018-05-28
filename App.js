'use strict';

import React, {
	Component
} from 'react';
import {
	Provider
} from 'react-redux';

import configureStore from './src/stores';

let store = configureStore();


import Root from './src/Root/Root.Container';


export default class App extends Component {
	constructor() {
		super();
		this.state = {
			isLoading: true,
			store: configureStore(() => {
				this.setState({
					isLoading: false
				})
			})
		}
	}
	render() {
		if (this.state.isLoading) {
			console.log('loading app');
			return null;
		}
		return (
			<Provider store={this.state.store}>
				<Root />
			</Provider>
		)
	}
}