import React from "react";
import { ScrollView, Text, Image, View, TouchableOpacity } from "react-native";
import styles from "./styles";

// Список товаров той или иной категории

const ProductsItem = (props) =>
{
    return (
        <View style={styles.container}>

            <Text style={styles.title}>Кролик толстый</Text>
            <View style={styles.card}>
                <View style={styles.left}>
                    <Image
                        style={styles.picture}
                        source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
                    />
                </View>
                    <View style={styles.right}>
                    <Text>Количество 14</Text>
                    <Text>Количество 14</Text>
                    <Text>Количество 14</Text>
                    </View>
            </View>
                <View style={styles.bottom}>
                    <Text style={styles.price}>Цена: {'20 центов'}</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.text_button}>Купить</Text>
                        </TouchableOpacity>
                </View>
                    <View>
                        <Text>Ну тут описание товара которое я не смог придумать и поэтому оставил так как есть</Text>
                    </View>
        </View>
            

    );
}

export default ProductsItem;