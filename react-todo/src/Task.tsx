import React, { Dispatch, useRef } from 'react';
import { TaskType } from './types';

type Props = TaskType & {
    setTasks:Dispatch<TaskType[]>,
    tasks:TaskType[]
}

const Task:React.FC<Props> = (props: Props) => {
    const ref = useRef(null);
    const handleOnChange = () => {
        const newTasks = props.tasks.map((task,i) => {
            if (props.id !== i) return task
            return {
                id: task.id,
                text: task.text,
                done:!task.done
            }
        }) 
        props.setTasks(newTasks);
    }
    return ( 
        <li ref={ref} style={{display: "flex", margin:10}}>
            <button onClick={handleOnChange}>削除</button>
            <p style={{margin: 0}}>{props.text}</p>
        </li>
    )
}

export default Task;