import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import styl from '../../styles/Sidebar.module.css'
import Link from 'next/link';
// import data from '../../data.json'
import { useState } from 'react';

export default function Sidebar({switchTheme, data, sidebarOpened, setSelectedBoard}) {

  return (
    <div className={sidebarOpened ? styles.nav_menu_active : styles.nav_menu}>
      <div className={styles.subtitle}>ALL BOARDS ({data.boards?.length})</div>
      {data.boards?.map((board) =><div key={board.name} onClick={() => setSelectedBoard(board.name)}><img src="/assets/icon-board.svg" alt="board" />{board.name}</div>)}
      <div><img src="/assets/icon-board.svg" alt="board" />+ Create New Board</div>
      
      <label>
        <input className={styl.mode} type="checkbox"/>
        <span className={styl.check} onClick={switchTheme}></span>
      </label>

    </div>
  )
}
