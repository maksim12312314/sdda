import React from "react";
import { ScrollView, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import CategoryItem from "./CategoryItem";
import styles from "./styles";
import Header from "../../Header/index";

// Список категорий товаров

const CategoryList = (props) =>
{
    return (
        <ScrollView style={styles.view}>
            <LinearGradient
                style={styles.categorylist}
                locations={[0, 1.0]} 
                colors={['#078998', '#65B7B9']}>
                    <Header {...props}/>
                    <CategoryItem/>
                    <CategoryItem/>
                    <CategoryItem/>
                    <CategoryItem/>
                    <CategoryItem/>
                    <CategoryItem/>
                    <CategoryItem/>
                    <CategoryItem/>
            </LinearGradient>
		</ScrollView>
    );
}

export default CategoryList;