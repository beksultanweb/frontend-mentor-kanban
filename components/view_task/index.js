import Head from 'next/head'
import Image from 'next/image'
import modal from '../../styles/Modal.module.css'
import style from '../../styles/Home.module.css'
import Link from 'next/link';
// import data from '../../data.json'
import { useState } from 'react';

export default function Viewtask({handleSubtaskCompleted, options, setModalOpened, selectedBoard, selectedTitle, switchTheme, data, sidebarOpened}) {

  return (
    <div className={modal.modal} onClick={() => setModalOpened(false)}>
      <div className={modal.modalcontent} onClick={e => e.stopPropagation()}>
        {data.boards.filter((board) => board.name === selectedBoard)[0].columns.map((col) => col.tasks.filter((task) => task.title === selectedTitle).map((item) => (
          <div key={item.title}>
            <div className={style.task_title}>{item.title}</div>
            <div className={modal.task_subtitle}>{item.description}</div>
            <div className={style.task_subtitle}>{item.subtasks.filter((subtask) => subtask.isCompleted === true).length} of {item.subtasks.length} subtasks</div>
            <div className={modal.subtask_list}>
            {item.subtasks.map((subtask) => (
              <div key={subtask.title}>
                {subtask.isCompleted && <div className={modal.subtask}><input type="checkbox" checked onClick={() => handleSubtaskCompleted(col.name, item.title, subtask.title)}/> <div className={modal.done_subtask}>{subtask.title}</div></div>}
                {!subtask.isCompleted && <div className={modal.subtask}><input type="checkbox" onClick={() => handleSubtaskCompleted(col.name, item.title, subtask.title)}/> <div className={modal.undone_subtask}>{subtask.title}</div></div>}
              </div>
            ))}
            </div>
            
                <select name="" id="">
                <option value={item.status}>{item.status}</option>
                {options.map(option => (
                <>
                {item.status !== option.value && <option value={option.value}>{option.value}</option>}
                </>
                ))}
              </select>
                
            
          </div>
        )))}
      </div>
    </div>
  )
}
