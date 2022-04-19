import { GET_ALL_TASK, CREATE_NEW_TASK, DELETE_TASK, DONE_TASK, ASSIGN_USER } from "../types/taskType";

export const getAllTask = () => ({
    type: GET_ALL_TASK
})

export const createTask = (payload) => ({
    type: CREATE_NEW_TASK,
    payload
})
export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: id
})
export const doneTask = (id) => ({
    type: DONE_TASK,
    payload: id
})

export const assignUserAction = (payload) => ({
    type: ASSIGN_USER,
    payload
})
