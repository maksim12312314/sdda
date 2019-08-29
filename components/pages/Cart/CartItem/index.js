import React from "react";
import { View, Text } from "react-native";
import ItemCount from "./ItemCount";
import styles from "./styles";

// Товар в корзине

const CartItem = (props) =>
{
    const {id, name, price, count} = props.data;
    return (
        <View style={styles.container}>
            <Text style={styles.item_name}>{name}</Text>
            <ItemCount id={id} count={count}/>
            <Text style={styles.item_price}>{price}$</Text>
        </View>
    );
}

export default CartItem; 