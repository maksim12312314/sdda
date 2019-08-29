import React from "react";
import Cart from "./components/pages/Cart";
import {AppRegistry} from 'react-native';
import {name as appName} from "./app.json";

AppRegistry.registerComponent(appName, ()=>App);

const App = () =>
{
	// Сюда запихиваем свою страницу
	// после чего можно работать над ней
	return (
		<Cart/>
	);
}
export default App;