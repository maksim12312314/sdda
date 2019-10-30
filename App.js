import React, { useReducer } from "react";
import { stateContext, dispatchContext } from "./contexts";
import CategoryList from "./components/pages/CategoryList/index";
import Cart from "./components/pages/Cart/index";
import Header from "./components/Header/index";
import ProductList from "./components/pages/ProductsList/index";
import { AppRegistry, ToastAndroid } from 'react-native';
import { name as appName } from "./app.json";
import { createAppContainer,} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import DeliveryDetails from './components/Delivery/index';
import * as hehe from './utils';
import Orders from "./components/Orders/index";

const showToastMessage = (message) =>
{
    ToastAndroid.show(message, ToastAndroid.SHORT);
}

AppRegistry.registerComponent(appName, ()=>App);

/**
 * Редюсер
 * @param  {object} state - объект state
 * @param  {object} action - объект action
 */
const reducer = (state, action) =>
{
	/**
	 * Проверяет тип действия
	 */
	switch (action.type)
	{
		/**
		 * Устанавливает id категории для текущей страницы
		 */
		case "SetCategoryPageId":
		{
			const newState = {...state};
			newState.currentCategory = action.payload;
			return newState;
		}
		/**
		 * Заносит товар и его данные в state
		 */
		case "AddToCart":
		{
			const newState = {...state};

			const containing = newState.cartItems.reduce( (a,e,i,m)=>{

				if (e.id == action.payload.id)
					return i;

			}, newState.cartItems.length )

			

			if ( action.payload )
			{
				if ( !newState.cartItems[containing] )
				{
					newState.cartItems.push(action.payload)
		
				}
				else
					newState.cartItems[containing].count += action.payload.count;
			}

			showToastMessage(`Товар ${action.payload.name} добавлен в корзину!`);
			return newState;
		}
		/**
		 * Устанавливает список продуктов для текущей страницы
		 */
		case "SetProductsList":
		{
			const newState = {...state};
			
			newState.products = {...newState.products, [action.id]: action.payload.products.nodes};
			
			return newState;
		}
		/**
		 * Устанавливает список категорий для текущей страницы
		 */
		case "SetCategoriesList":
		{
			const newState = {...state};
			
			newState.categories = action.payload.productCategories.nodes;
			
			return newState;
		}
		/**
		 * Расчитывает общую цену для корзины
		 */
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
		/**
		 * Минусует 1 товар из корзины
		 */
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
		/**
		 * Плюсует 1 товар в корзину
		 */
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

/**
 * Это очень красивая (нет) навигация
 */
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
},
{
	initialRouteName : "CategoryList",
	defaultNavigationOptions: {
		tabBarVisible:false
	  },
  } );

/**Контейнер приложения */
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