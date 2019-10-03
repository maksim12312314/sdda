import React, { useReducer } from "react";
import { stateContext, dispatchContext } from "./contexts";
import CategoryList from "./components/pages/CategoryList/index";
import Cart from "./components/pages/Cart/index";
import Header from "./components/Header/index";
import ProductList from "./components/pages/ProductsList/index";
import { AppRegistry } from 'react-native';
import { name as appName } from "./app.json";
import { createAppContainer,} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import DeliveryDetails from './components/Delivery/index';
import * as hehe from './utils';


AppRegistry.registerComponent(appName, ()=>App);
const reducer = (state, action) =>
{
	switch (action.type)
	{
		case "SetCategoryPageId":
		{
			const newState = {...state};
			newState.currentCategory = action.payload;
			return newState;
		}
		case "AddToCart":
		{
			const newState = {...state};

			const containing = newState.cartItems.reduce( (a,e,i,m)=>{

				if (e.id == action.payload.id)
					return i;

			}, newState.cartItems.length )

			// console.log(newState.cartItems[containing])
			// console.log(action.payload)
			// console.log(newState?.cartItems[containing]?.count)
			// console.log(action.payload.count)

			if ( action.payload )
			{
				if ( !newState.cartItems[containing] )
				{
					newState.cartItems.push(action.payload)
					console.log("sdasdsaas", newState.cartItems)
				}
				else
					newState.cartItems[containing].count += action.payload.count;
			}


			return newState;
		}
		case "SetProductsList":
		{
			const newState = {...state};
			
			newState.products = action.payload.products.nodes;
			
			return newState;
		}
		case "SetCategoriesList":
		{
			const newState = {...state};
			
			newState.categories = action.payload.productCategories.nodes;
			
			return newState;
		}
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
		
	],
	cartTotalPrice: 0,
	currentCategory: -1,
};

const NotYoursNavigator = createBottomTabNavigator( {
	CategoryList: {  
		screen: CategoryList,
		title: 'Category',
		},
	Cart: {
		screen: Cart,
		title: 'Cart',
	},
	ProductList: {
		screen: ProductList,
		title: 'ProductList',
	},
	Orders: {
		screen: Orders,
		title: 'Orders',
	},
		
},
{
	initialRouteName : "CategoryList",
	defaultNavigationOptions: {
		tabBarVisible:false
	  },
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