import React from "react";
import { View, TextInput, KeyboardAvoidingView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from "./styles";

export const AddTaskButton: React.FC = () => {
    return(
        <View style={styles.container}>
            <Icon name='add' size={27} color='white'/>
        </View>
    )
}