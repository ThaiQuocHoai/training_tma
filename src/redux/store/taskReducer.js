import { CREATE_NEW_TASK, DELETE_TASK, DONE_TASK, ASSIGN_USER } from "../types/taskType";

const initialState = {
    task: [
        { id: 1, task_name: 'Learning ReactJs', description: "this is description", is_done: true },
        { id: 2, task_name: 'Learning NodeJs', description: "this is description", is_done: true },
        { id: 3, task_name: 'Learning Angular', description: "this is description", is_done: false }
    ],
    enhanceTasks: [
        { id: 1, datetime: "03/05/2022", deadline: "04/05/2022", task_name: 'Learning ReactJs', description: "this is description", is_done: true, userAssigned: 2 },
        { id: 2, datetime: "02/05/2022", deadline: "04/05/2022", task_name: 'Learning NodeJs', description: "this is description", is_done: true, userAssigned: "" },
        { id: 3, datetime: "04/05/2022", deadline: "03/05/2022", task_name: 'Learning Angular', description: "this is description", is_done: false, usersSsigned: "" }
    ],
}

const TaskReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case CREATE_NEW_TASK: {
            let taskList = [...state.task];
            let id = Math.random()
            payload={...payload, id}
            taskList.push(payload);
            return {...state, task: taskList};
        }

        case DELETE_TASK: {
            let taskList = [...state.task];
            taskList = taskList.filter(s => s.id !== payload);
            return {...state, task: taskList};
        }

        case DONE_TASK: {
            let taskList = [...state.task];
            let task = taskList.find(s=>s.id === payload);
            if(task){
                task.is_done = true;
            }
            return {...state, task: taskList}
        }

        case ASSIGN_USER: {
            const taskList = [...state.enhanceTasks];
            const task = taskList.find(s=>s.id == payload.id);
            if(task){
                task.userAssigned = payload.assign
            }

            console.log("Tasklist: ", taskList);
            return {...state, enhanceTasks: taskList};
        }

        default:
            return state
    }
}
export default TaskReducer;