import { Group } from "react-native"
import {TodoType, GroupType} from "./types"

export const todolist: Array<TodoType> | [] = [
    {'id': 1,
     'completed': false,
     'title': 'Drink water'},
     {'id': 2,
     'completed': false,
     'title': 'Go to dantist'},
     {'id': 3,
     'completed': false,
     'title': 'Workout'}
]

export const groupList: Array<GroupType> | [] = [{
    "id": 1,
    "title": "Important",
    "isSelected": true,
    "todos": []
},
{
    "id": 2,
    "title": "Challenges",
    "isSelected": true,
    "todos": [1, 3]
},
{
    "id": 3,
    "title": "Health",
    "isSelected": true,
    "todos": [2]
},
{
    "id": 4,
    "title": "Work",
    "isSelected": true,
    "todos": []
}]