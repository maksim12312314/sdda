import React, { useContext } from "react";
import { stateContext, dispatchContext } from "../../../contexts";

import { ScrollView, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CartIcon from "./CartIcon";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import styles from "./styles";

// Корзина

const Cart = (props) =>
{
    const state = useContext(stateContext);
    const dispatch = useContext(dispatchContext);
    console.log(state.cartItems.length)
    return (
        <ScrollView style={styles.view}>
            <LinearGradient
                style={styles.container}
                locations={[0, 1.0]} 
                colors={["#E81C1C", "#E4724F"]}>
                
                <CartIcon style={styles.icon}/>

                <View style={styles.items}>
                    { !state.cartItems.length
                        ? <Text>Товаров нет</Text>
                        : state.cartItems.map( (v, i) =>
                        {
                            return <CartItem key={i} data={v}/>
                        }) }
                    <CartTotal/>
                </View>
            </LinearGradient>
		</ScrollView>
    );
}

export default Cart; 