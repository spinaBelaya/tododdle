import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { groupList } from "../../fakeDB";
import { GroupType } from "../../types";
import { TaskGroup } from "../TaskGroup/TaskGroup";

export const TaskGroupsList = () => {

    const getGroups = (groups: Array<GroupType>) => groups.map((group, index) => <TaskGroup key={index} group={group}/>)

    return(
        <View style={styles.container}>
            {getGroups(groupList)}
        </View>
    )
    
}