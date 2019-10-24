import React, {useContext, useState} from "react";
import { ScrollView, Text, Image, View, TouchableOpacity, AsyncStorage } from "react-native";
import styles from "./styles";
import config from "../../../../config";
import { stateContext, dispatchContext } from "../../../../contexts";
import {Picker} from "native-base";

const address = config.getCell("StoreAddress");

/** Список товаров той или иной категории */
const ProductsItem = (props) =>
{
    const {data} = props;
    const state = useContext(stateContext);
    const dispatch = useContext(dispatchContext);
    const [selected, setSelected] = useState("key1");

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
                    <Picker
                            note
                            mode="dropdown"
                            style={styles.picker}
                            selectedValue={selected}
                            onValueChange={(value)=>{setSelected(value)}}
                        >
                            <Picker.Item label="Wallet" value="key0" />
                            <Picker.Item label="ATM Card" value="key1" />
                            <Picker.Item label="Debit Card" value="key2" />
                            <Picker.Item label="Credit Card" value="key3" />
                            <Picker.Item label="Net Banking" value="key4" />
                        </Picker>
                        <Picker
                            note
                            mode="dropdown"
                            style={styles.picker}
                            selectedValue={selected}
                            onValueChange={(value)=>{setSelected(value)}}
                        >
                            <Picker.Item label="Wallet" value="key0" />
                            <Picker.Item label="ATM Card" value="key1" />
                            <Picker.Item label="Debit Card" value="key2" />
                            <Picker.Item label="Credit Card" value="key3" />
                            <Picker.Item label="Net Banking" value="key4" />
                        </Picker>
                    </View>
            </View>
                <View style={styles.bottom}>
                    <Text style={styles.price}>Цена: {data.price || "Бесплатно"}</Text>
                        <TouchableOpacity style={styles.button} onPress={ (e) =>
                        {
                            // Обрабатываем нажатие на кнопку "Купить"

                            // Заносим данные
                            let payload = {
                                id: data.productId,
                                name: data.name,
                                count: 1,
                                price: data.price ? data.price.match(/\d{1,5}.*\d*/)[0] : 0,
                                stockQuantity: data.stockQuantity || 99,
                            }
                            // Добавляем в корзину
                            dispatch({type: "AddToCart", payload:payload});
                        }}>
                            <Text style={styles.text_button}>Купить</Text>
                        </TouchableOpacity>
                </View>
                    <View>
                        <Text style={styles.descriptionText}>{data.description}</Text>
                    </View>
        </View>
            

    );
}

export default ProductsItem;