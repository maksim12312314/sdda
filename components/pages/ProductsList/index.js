import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./styles";
import Header from "./../../Header/index";
import { LinearGradient } from 'expo-linear-gradient';
import ProductsItem from './ProductsItem/index';

// Список товаров той или иной категории

const ProductsList = (props) =>
{
    return (
        
            <ScrollView style={styles.view}>
                <LinearGradient
                    style={styles.productslist}
                    locations={[0, 1.0]} 
                    colors={['#078998', '#65B7B9']}>
                    <Header {...props}/>
                    <View style={styles.items}>
                    <View style={styles.headTitle}>
                        <Text style={styles.textTitle}>Кралики</Text>
                    </View>
                    
                        <ProductsItem/>
                        <ProductsItem/>
                        <ProductsItem/>
                        <ProductsItem/>
                        <ProductsItem/>
                        <ProductsItem/>
                        <ProductsItem/>
                    </View>
                </LinearGradient>
            </ScrollView>

    );
}

export default ProductsList;