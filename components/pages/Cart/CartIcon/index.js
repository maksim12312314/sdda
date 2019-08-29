import React from "react";
import { View } from "react-native";
import SvgUri from "react-native-svg-uri";
import styles from "./styles";
import icon from "./cart.svg"

// Список категорий товаров

const CartIcon = (props) =>
{
    return (
        <View style={styles.container}>
            <SvgUri svgXmlData={icon}/>
        </View>
    );
}

export default CartIcon; 