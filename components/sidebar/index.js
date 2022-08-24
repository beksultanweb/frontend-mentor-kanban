import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link';
import data from '../../data.json'
import { useState } from 'react';

export default function Sidebar({data, sidebarOpened}) {
  return (
    <div className={sidebarOpened ? styles.nav_menu_active : styles.nav_menu}>
      <div className={styles.subtitle}>ALL BOARDS ({data.boards.length})</div>
      {data.boards.map((board) =><div><img src="/assets/icon-board.svg" alt="board" />{board.name}</div>)}
      <div><img src="/assets/icon-board.svg" alt="board" />+ Create New Board</div>
    </div>
  )
}