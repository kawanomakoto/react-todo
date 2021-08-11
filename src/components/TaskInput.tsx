import React, { useState } from 'react';
import { Task } from '../Types';

type Props = {
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
    tasks: Task[]
}

const TaskInput: React.FC<Props> = ({ setTasks, tasks }) => {
    const [ inputTitle, setInputTitle ] = useState<string>('')
    const [ count, setCount ] = useState<number>(tasks.length + 1)
    const [ isTitleEmpty, setIsTitleEmpty ] = useState<boolean>(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputTitle(e.target.value)
    }

    const handleSubmit = () => {
        if (inputTitle === '') {
            return
        }
        setCount(count + 1)

        const newTask: Task = {
            id: count,
            title: inputTitle,
            done: false
        }

        setTasks([newTask, ...tasks])
        setInputTitle('')
    }

    return (
        <div>
            <div className="inputForm">
                <div className="inner">
                    <input type="text" className="input" style={{width: 50}} />
                    <input
                        type="text"
                        className="input"
                        placeholder="コメントを入力"
                        value={inputTitle}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleSubmit} className="btn is-primary">追加</button>
                </div>
            </div>
        </div>
    )
}

export default TaskInput