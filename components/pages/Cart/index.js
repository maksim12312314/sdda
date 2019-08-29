import React from "react";
import { ScrollView, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CartIcon from "./CartIcon";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import styles from "./styles";

// Корзина

const Cart = (props) =>
{
    return (
        <ScrollView style={styles.view}>
            <LinearGradient
                style={styles.container}
                locations={[0, 1.0]} 
                colors={["#E81C1C", "#E4724F"]}>
                
                <CartIcon style={styles.icon}/>

                <View style={styles.items}>
                    <CartItem/>
                    <CartItem/>
                    <CartTotal/>
                </View>
            </LinearGradient>
		</ScrollView>
    );
}

export default Cart; 