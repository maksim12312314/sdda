import React from "react";
import { ScrollView, View } from "react-native";
import CategoryItem from "./CategoryItem";
import styles from "./styles";

// Список категорий товаров

const CategoryList = (props) =>
{
    return (
        <ScrollView style={styles.view}>
			<View style={styles.categorylist}>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
            </View>
		</ScrollView>
    );
}

export default CategoryList;