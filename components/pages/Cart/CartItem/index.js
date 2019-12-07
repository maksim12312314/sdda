import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import ItemCount from "./ItemCount";
import styles from "./styles";


/** Компонент товара в корзине */
const CartItem = (props) =>
{
    const {id, name, price, count} = props.data;
    return (
        <View style={styles.container}>
            <Text style={styles.item_name}>{name}</Text>
            <Text style={styles.item_count}>{count} шт</Text>
            <View style={styles.right}>
                <Text style={styles.item_price}>{price*count}$</Text>
                <ItemCount id={id} count={count}/>
            </View>
        </View>
    );
}

export default CartItem; 