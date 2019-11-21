import { StyleSheet, Dimensions } from "react-native";

// CART PAGE STYLES

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        /*justifyContent: "flex-start",
        alignItems: "center",*/
        minHeight: Dimensions.get("window").height,
        //height: Dimensions.get("window").height,
    },
    items: {
        justifyContent: "center",
        alignItems: "center"
    },
    itemsBlock: {
        flexDirection: "column",
    },
    button: {
        paddingHorizontal: 18,
        paddingVertical: 4,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: '#ffffff',
        left: 0,
        right: 0,
        bottom: 0,
        marginBottom: 50,
    },
    text_button: {
        color: "#E4724F",
    },
});

export default styles;