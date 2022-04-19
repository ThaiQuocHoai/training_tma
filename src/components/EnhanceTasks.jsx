import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CheckOutlined, DeleteOutlined } from '@ant-design/icons';
import { assignUserAction } from '../redux/actions/taskAction';
import { Button } from '@mui/material';


export default function EnhanceTasks() {

    let { enhanceTasks } = useSelector(s => s.TaskReducer);
    const dispatch = useDispatch();
    const [render, setRender] = useState(true);

    const users = [
        { id: 1, name: "Nguyen Van A" },
        { id: 2, name: "Nguyen Van B" },
        { id: 3, name: "Nguyen Van C" },
    ]
    const checkDeadline = (deadline, datetime, is_done) =>{
        if(deadline < datetime && is_done === false){
            return "red";
        }
        return ""
    }
    console.log(enhanceTasks);

    const handleChange = (e) => {
        const userId = e.target.value.split(' ')[0];
        const taskId = e.target.value.split(' ')[1];
        dispatch(assignUserAction({id: taskId, assign: userId}));
    }

    const renderTask = () => {
        return enhanceTasks.map((item, index) => (
            <div className="card-detail" style={{height: 300}} key={index}>
                <div className="card__title" style={{ height: "30px", textAlign: "center", "marginTop": "10px", color: checkDeadline(item.deadline, item.datetime, item.is_done)}}>{item.task_name}</div>
                <div className="card__body">
                    <p>Status: <span>{item.is_done ? "Done" : "Doing"}</span></p>
                    <p>Description: {item.description}</p>
                    <div className="card__body__button flex-column">
                        <p>Datetime: {item.datetime}</p>
                        <p>Deadline: {item.deadline}</p>
                        <p>Assign User: <select onChange={handleChange}>
                            {users.map((user, index)=>(
                                <option value={user.id + ' ' + item.id} selected={user.id == item.userAssigned? true: false} >{user.name}</option>
                            ))}
                        </select></p>

                    </div>
                </div>
            </div>
        ))
    }

    const sortByDateTime = () =>{
        enhanceTasks.sort(function(a,b){
            if(a.datetime > b.datetime){
                return 1;
            } else if(a.datetime<b.datetime){
                return -1
            } 
            return 0
        })
        setRender(!render);
    }
    const sortByDeadline = () =>{
        enhanceTasks.sort(function(a,b){
            if(a.deadline > b.deadline){
                return 1;
            } else if(a.deadline<b.deadline){
                return -1
            } 
            return 0
        })
        setRender(!render);
    }


    return (
        <div className="container task mt-5">
            <h1>Enhanced Task</h1>

            <Button onClick={sortByDateTime}>Sort by datetime</Button>
            <Button onClick={sortByDeadline}>Sort by deadline</Button>
            <div className="card">
                {renderTask()}
            </div>
        </div>
    )
}
