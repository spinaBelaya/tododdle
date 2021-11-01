import React from "react";
import { Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from "./styles";
import { View } from "react-native";


export const NavBar: React.FC = () => {

    const getDate = () => {
        const rawDate = new Date().toDateString()
        const date = rawDate.slice(0, 3) + ', ' + rawDate.slice(4, 10)
        return date
    }

    return(
        <View style={styles.container}>
            <Icon name = 'menu' size={32}/>
            <Text style={{fontSize: 15}}>{getDate()}</Text>
            <Icon name='person-outline' size={32}/>
        </View>
    )
}