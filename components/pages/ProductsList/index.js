import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

// Список товаров той или иной категории

const ProductsList = (props) =>
{
    return (
        <View style={styles.view}>
			<Text>Если ты видишь этот текст значит всё работает нормально</Text>
		</View>
    );
}

export default ProductsList;