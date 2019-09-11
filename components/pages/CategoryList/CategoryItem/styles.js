import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: 110,
        flexDirection: "column",
        justifyContent: "center",
        paddingVertical: 10,
        marginHorizontal: 20,
    },
    title: {
        fontSize: 22,
        color: "#fff",
        textAlign: "center",
    },
    picture: {
        width: 110,
        height: 110,
        borderRadius: 36,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#707070",
    }
});

export default styles;