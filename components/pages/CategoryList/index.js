import React from "react";
import { View, Text } from "react-native";
import Header from "../../Header";
import styles from "./styles";

// Список категорий товаров

const CategoryList = (props) =>
{
    return (
        <View style={styles.view}>
            <Header/>
			<Text>Если ты видишь этот текст значит всё работает нормально</Text>
		</View>
    );
}

export default CategoryList;