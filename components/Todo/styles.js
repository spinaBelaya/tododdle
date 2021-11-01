import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: "100%",
        paddingHorizontal: 10,
        paddingVertical: 10,
        minHeight: 60
    },
    text: {
        width: width-90,
        fontSize: 16
    }
})

export default styles;