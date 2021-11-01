import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get("window").width

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 56,
        height: 56,
        backgroundColor: '#8191a1',
        borderRadius: 28,
        position: 'absolute',
        bottom: 15,
        right: 15,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        // elevation: 5
    },
})

export default styles;