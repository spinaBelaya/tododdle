import React from "react";
import { View, Text, ListRenderItem } from "react-native";
import styles from "./styles";
import {TodoType} from "../../types";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { todolist, groupList } from "../../fakeDB";
import { useState, useEffect } from "react";

export const Todo: React.FC<{todo: TodoType}> = ({todo}) => {

    const [color, setColor] = useState<string>('black')

    const colors: Record<string, string> = {
        'Important': '#4bb1f9',
        'Health': '#53db89',
        'Challenges': '#664ef6',
        'Work': '#fa8a4b',
        'Studies': '#fa8a4b',
        'All plans': '#8191a1'
    }

    const {id, title, completed} = todo
    
    const getColor = () => {
        groupList.forEach(group => {
            group.todos.forEach(todo => {if (todo === id){setColor(colors[group.title]!)}})
        })
    }

    useEffect(getColor, [])

    return(
        <View style={{borderStyle: 'solid',
                      borderColor: color,
                      borderRadius: 7,
                      borderWidth: 1,
                      marginBottom: 10}}>
        <View style={styles.container}>
            <BouncyCheckbox
                style={{width: 30, marginRight: 10}}
                isChecked={completed}
                fillColor={color}
                size={30}
                />
            <Text style={styles.text}>{title}</Text>
        </View>
        </View>
    )
}