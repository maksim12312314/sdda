import React, {useContext} from "react";
import { ScrollView, Text, Image, View, TouchableOpacity, AsyncStorage } from "react-native";
import styles from "./styles";
import config from "../../../../config";
import { stateContext, dispatchContext } from "../../../../contexts";

const address = config.getCell("StoreAddress");

// Список товаров той или иной категории

const ProductsItem = (props) =>
{
    const {data} = props;
    const state = useContext(stateContext);
    const dispatch = useContext(dispatchContext);

    return (
        <View style={styles.container}>

            <Text style={styles.title}>{data.name}</Text>
            <View style={styles.card}>
                <View style={styles.left}>
                    <Image
                        style={styles.picture}
                        source={{uri: data?.image?.mediaDetails?.file ? `${address}wp-content/uploads/` + data.image.mediaDetails.file
                        :  `${address}wp-content/uploads/woocommerce-placeholder.png` }}
                    />
                </View>
                    <View style={styles.right}>
                    <Text>Количество 14</Text>
                    <Text>Количество 14</Text>
                    <Text>Количество 14</Text>
                    </View>
            </View>
                <View style={styles.bottom}>
                    <Text style={styles.price}>Цена: {data.price || "Бесплатно"}</Text>
                        <TouchableOpacity style={styles.button} onPress={ (e) =>
                        {
                            console.log(data.price, parseInt(data.price))
                            let payload = {
                                id: data.productId,
                                name: data.name,
                                count: 1,
                                price: data.price ? data.price.match(/\d{1,5}.*\d*/)[0] : 0,
                                stockQuantity: data.stockQuantity || 99,
                            }
                            dispatch({type: "AddToCart", payload:payload});
                        }}>
                            <Text style={styles.text_button}>Купить</Text>
                        </TouchableOpacity>
                </View>
                    <View>
                        <Text>{data.description}</Text>
                    </View>
        </View>
            

    );
}

export default ProductsItem;