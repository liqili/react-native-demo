'use strict';

import React, {
	Component
} from 'react';
import * as Expo from "expo";

import {
	Provider
} from 'react-redux';
import {StyleProvider} from 'native-base';
import configureStore from './src/stores';
import Root from './src/Root/Root.Container';
import getTheme from "./src/theme/components";
import variables from "./src/theme/variables/commonColor";



export default class App extends Component {
	constructor() {
		super();
		this.state = {
			isReady: false,
			store: configureStore(() => {
				this.loadFonts();
			})
		}
	}
	async loadFonts() {
		await Expo.Font.loadAsync({
			Roboto: require("native-base/Fonts/Roboto.ttf"),
			Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
			Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
		});
		this.setState({
			isReady: true
		})
	}
	render() {
		if (!this.state.isReady) {
			return <Expo.AppLoading />;
		}
		return (
			<Provider store={this.state.store}>
				<StyleProvider style={getTheme(variables)}>
					<Root />
      			</StyleProvider>
			</Provider>
		)
	}
}