import Head from 'next/head'
import Image from 'next/image'
import modal from '../../styles/Modal.module.css'
import style from '../../styles/Home.module.css'
import Link from 'next/link';
// import data from '../../data.json'
import { useState } from 'react';

export default function Addtask({options, stage, setStage, setModalAddTask, inputList, setInputList, switchTheme, handleAddTask, taskTitle, setTaskTitle, taskDescription, setTaskDescription}) {
    
    
    
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
      };
       
      // handle click event of the Remove button
      const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
      };
       
      // handle click event of the Add button
      const handleAddClick = () => {
        setInputList([...inputList, { title: "", isCompleted: false }]);
      };

  return (
    <div className={modal.modal} onClick={() => setModalAddTask(false)}>
        <div className={modal.modalcontent} onClick={e => e.stopPropagation()}>
            <div>Title</div>
            <input type="text" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)}/>
            <div>Description</div>
            <textarea name="" id="" cols="30" rows="10" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}></textarea>
            <div>Subtasks</div>
            {inputList.map((x, i) => {
        return (
          <div className="box" key={x.firstName}>
            <input
              name="title"
              value={x.firstName}
              onChange={e => handleInputChange(e, i)}
            />
            <div className="btn-box">
              {inputList.length !== 1 && <button onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
            </div>
          </div>
        );
      })}
            <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
            <button>+ Add New Subtask</button>
            <div>Status</div>
            
            <select name="" id="" value={stage} onChange={(e) => setStage(e.target.value)}>
            {options.map((option) =>
                <option key={option.value} value={option.value}>{option.value}</option>
                )}
            </select>
            <button onClick={handleAddTask}>Create Task</button>
        </div>
    </div>
  )
}
