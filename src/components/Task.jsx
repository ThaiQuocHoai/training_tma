import React, {  useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import "../assets/css/task.css";
import { CheckOutlined, DeleteOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { Modal, Button, Form, Input, Checkbox } from 'antd';
import { createTask, deleteTask, doneTask } from '../redux/actions/taskAction';

function Task() {

    const { task } = useSelector(e => e.TaskReducer);
    const dispatch = useDispatch();

    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setVisible(false)
    };

    const handleCancel = () => {
        setVisible(false);
    };
    const deleteTaskById = (id) => {
        dispatch(deleteTask(id))
    }
    const doneTaskById = (id) => {
        dispatch(doneTask(id))
    }

    const renderTask = () => {
        return task?.map((item, index) => (
            <div className="card-detail" key={index}>
                <div className="card__title" style={{ height: "30px", textAlign: "center", "marginTop": "10px" }}>{item.task_name}</div>
                <div className="card__body">
                    <p>Status: <span>{item.is_done ? "Done" : "Doing"}</span></p>
                    <p>Description: {item.description}</p>
                    <div className="card__body__button">
                        <button className="card__body__button__delete" onClick={()=>{deleteTaskById(item.id)}}><DeleteOutlined /></button>
                        <button className="card__body__button__complete" onClick={()=>{doneTaskById(item.id)}}><CheckOutlined /></button>

                    </div>
                </div>
            </div>
        ))
    }


    const onFinish = (values) => {
        const {task_name, description, is_done} = values;
        const payload = {task_name, description, is_done: is_done ? true: false};
        dispatch(createTask(payload));
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="task">
            <h1>Task</h1>
            <Modal
                visible={visible}
                title="Add new task"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                centered={true}
            >
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Task name"
                        name="task_name"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Description"
                        name="description"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item name="is_done" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>done</Checkbox>
                    </Form.Item>
                    <div style={{ display: "flex", justifyContent: "center" }}>

                        <Form.Item style={{ marginRight: "20px" }} wrapperCol={{ offset: 8, span: 16 }} onClick={handleCancel}>
                            <Button type="default">
                                Cancel
                    </Button>
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit" onClick={handleOk}>
                                Submit
                    </Button>
                        </Form.Item>
                    </div>
                </Form>
            </Modal>


            <button onClick={showModal} className="addnew">Add new</button>

            <div className="card">
                {renderTask()}
            </div>

            <NavLink to="/" className="backtohome">Back to home</NavLink>
        </div>
    )
}

export default Task
