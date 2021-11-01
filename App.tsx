import React from 'react';
import { View, Dimensions, ScrollView } from 'react-native';
import { NavBar } from './components/NavBar/NavBar';
import { StyleSheet } from "react-native";
import { TaskGroup } from './components/TaskGroup/TaskGroup';
import { TasksList } from './components/TasksList/TasksList';
import { AddTaskButton } from './components/AddTaskButton/AddTaskButton';
import { TaskGroupsList } from './components/TaskGroupsList/TaskGroupsList';
const width = Dimensions.get("window").width

export default function App() {
  return (
    <View style={styles.container}>
      <NavBar/>
      <ScrollView>
        <TasksList/>
      <TaskGroupsList/>
      </ScrollView>
      {/* <AddTaskButton/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: 35,
    paddingHorizontal: 15,
    height: '100%'
  },
  taskGroups: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    width: "100%",
    flexWrap: 'wrap',
    marginTop: 30
  },
  footer: {
    position: 'absolute',
    bottom: 15,
    width: width,
    paddingHorizontal: 15
  }
})
