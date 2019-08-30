import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
        paddingVertical: 4,
    },
    item_name: {
        color: "#FFF",
        fontSize: 16,
    },
    item_price: {
        color: "#FFF",
        fontSize: 16,
        marginHorizontal: 8,
    },
    item_count: {
        color: "#FFF",
        fontSize: 16,
        marginHorizontal: 8,
    },
    right: {
        flexDirection: "row",
        alignItems: "center",
        alignContent: "flex-end",
    }
});

export default styles;