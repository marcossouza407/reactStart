import styles from "./Header.module.css";

import igniteLogo from '../assets/ignite-logo.svg';
export function Header(){
    return (
        <header className={styles.header}>
        <img sec={igniteLogo} alt="Logotipo do ignite"/>
         
    
        </header>
        
    )
} 