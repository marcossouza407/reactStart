import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';

export function Sidebar() {
 return (
  <aside className={styles.sidebar}>
  <img className={styles.cover} src="https://images.unsplash.com/photo-1670163402343-2e01bda4a53e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"/>
  
  <div className={styles.profile}>
    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/116312153?v=4" />
    <strong>marcos</strong>
    <span> web developer</span>
  </div>

  <footer>
    <a href="#"> 
    <PencilLine size={20}/>
    Editar perfil
    </a>
  </footer>

 </aside>
 );
}