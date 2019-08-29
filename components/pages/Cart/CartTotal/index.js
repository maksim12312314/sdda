import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

// Итог

const CartTotal = (props) =>
{
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Итого: 120$</Text>
        </View>
    );
}

export default CartTotal; 