import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

// Товар в корзине

const CartItem = (props) =>
{
    return (
        <View style={styles.container}>
            <Text style={styles.item_name}>Кролик толстый 2шт</Text>
            <Text style={styles.item_price}>40$</Text>
        </View>
    );
}

export default CartItem; 