import React, { useReducer } from "react";
import { stateContext, dispatchContext } from "./contexts";
import Cart from "./components/pages/Cart";
import { AppRegistry } from 'react-native';
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, ()=>App);
const reducer = (state, action) =>
{
	switch (action.type)
	{
		case "minus":
		{
			const elem = state.cartItems.filter( (v, i) =>
			{
				if ( v.id == action.payload )
					return true;
			});
			const newState = {...state};
			elem[0].count = elem[0].count - 1;
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
};

const App = () =>
{
	const [state, dispatch] = useReducer(reducer, initialState);

	// Сюда запихиваем свою страницу
	// после чего можно работать над ней
	return (
		<stateContext.Provider value={state}>
			<dispatchContext.Provider value={dispatch}>
				<Cart/>
			</dispatchContext.Provider>
		</stateContext.Provider>
	);
}
export default App;