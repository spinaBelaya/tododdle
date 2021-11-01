export interface TodoType {
    "id": number,
    "title": string,
    "completed": boolean
}

export interface GroupType {
    "id": number,
    "title": string,
    "isSelected": boolean,
    "todos": number[] | []
}