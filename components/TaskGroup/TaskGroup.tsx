import React from "react";
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from "./styles";
import { GroupType, TodoType } from "../../types";
import Emoji from 'react-native-emoji';

export const TaskGroup: React.FC<{group: GroupType}> = ({group}) => {

    const {id, title, isSelected, todos} = group

    const colors: Record<string, string> = {
        'Important': '#4bb1f9',
        'Health': '#53db89',
        'Challenges': '#664ef6',
        'Work': '#ff5d5e',
        'Studies': '#fa8a4b',
        'All plans': '#8191a1'
    }

    const emojis: Record<string, string> = {
        Important: 'fire',
        Health: 'pill',
        Challenges: 'trophy',
        Work: 'briefcase',
    }

    const getTasksMsg = (todos: number[]) => {
        return todos.length == 0 ? "No tasks're pending":
            todos.length == 1 ? "1 task is pending": `${todos.length} tasks're pending`
    }
    

    return(
        <View style={{backgroundColor: colors[title], height: 95, borderRadius: 7, marginBottom: 10}}>
        <View style={styles.container}>
            <View>
            <Emoji name={emojis[title]!} style={{fontSize: 20, paddingLeft: 10, paddingTop: 10, paddingBottom: 2}} />
                <Text style={{paddingLeft: 10, fontSize: 18, fontWeight: '500', color: 'white'}}>{title}</Text>
            </View>
            <Text style={{paddingLeft: 10, paddingBottom: 10, fontSize: 12, color: 'white'}}>{getTasksMsg(todos)}</Text>
        </View>
        </View>
    )
}