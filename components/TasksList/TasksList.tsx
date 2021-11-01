import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import { Todo } from "../Todo/Todo";
import {TodoType} from "../../types";
import {todolist} from "../../fakeDB";


export const TasksList: React.FC = () => {

    const getTodos = (todos: TodoType[]) => {
        return todos.map((todo, index) => <Todo key={index} todo={todo}/>)
    }

    const getListOrMsg = (data: Array<TodoType> | []) => {
        return data.length === 0 ? 
            <Text style={{fontSize: 25, width: 250}}>No plans for today! Take a rest</Text>:
            <>
                <Text style={{fontSize: 25, width: 250, marginBottom: 10}}>Plans for today:</Text>
                {getTodos(todolist)}
            </>
    }
    return(
        <View style={styles.container}>
            {getListOrMsg(todolist)}
        </View>
    )
}