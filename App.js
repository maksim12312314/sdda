import React, { useReducer } from "react";
import { stateContext, dispatchContext } from "./contexts";
import CategoryList from "./components/pages/CategoryList/index";
import Cart from "./components/pages/Cart/index";
import Header from "./components/Header/index";
import { AppRegistry } from 'react-native';
import { name as appName } from "./app.json";
import { createAppContainer,} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";

Math.clamp = function(num, min, max) {
	return this.min(this.max(num, min), max);
};

AppRegistry.registerComponent(appName, ()=>App);
const reducer = (state, action) =>
{
	switch (action.type)
	{
		case "ComputeTotalPrice":
		{
			const newState = {...state};
			newState.cartTotalPrice = 0;

			state.cartItems.map( (v) =>
			{
				newState.cartTotalPrice += v.price * v.count;
			});
			return newState;
		}
		case "minus":
		{
			const elem = state.cartItems.filter( (v, i) =>
			{
				if ( v.id == action.payload )
					return true;
			});
			const newState = {...state};
			elem[0].count = Math.clamp(--elem[0].count, 1, 99);

			newState.cartItems[newState.cartItems.indexOf(elem[0])] = elem[0];
			return newState;
		}
		case "plus":
		{
			const elem = state.cartItems.filter( (v, i) =>
			{
				if ( v.id == action.payload )
					return true;
			});
			const newState = {...state};
			elem[0].count = Math.clamp(++elem[0].count, 1, 99);
			
			newState.cartItems[newState.cartItems.indexOf(elem[0])] = elem[0];
			return newState;
		}
		default:
			return state;
	}
}

const initialState = {
	cartItems: [
		{
			id: 15,
			count: 2,
			price: 40,
			name: "КрАлик жОский",
		},
		{
			id: 16,
			count: 3,
			price: 80,
			name: "КрАлик лехчи",
		},
	],
	cartTotalPrice: 0,
};

const NotYoursNavigator = createBottomTabNavigator( {
	CategoryList: {  
		screen: CategoryList,
		title: 'Category',
		navigationOptions: {tabBarVisible:false}
		},
	Cart: {
		screen: Cart,
		title: 'Cart',
		navigationOptions: {tabBarVisible:false}
	},
	Head: {
		screen: Header,
		title: 'Head',
		navigationOptions: {tabBarVisible:false}
	},
		
},
{
	initialRouteName : "CategoryList"
  } );

const AppContainer = createAppContainer(NotYoursNavigator);

const App = () =>
{
	const [state, dispatch] = useReducer(reducer, initialState);

	// Сюда запихиваем свою страницу
	// после чего можно работать над ней
	return (
		<stateContext.Provider value={state}>
			<dispatchContext.Provider value={dispatch}>
				<AppContainer/>
			</dispatchContext.Provider>
		</stateContext.Provider>
	);
}
export default App;