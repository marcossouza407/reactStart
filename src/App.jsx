import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/header"
import { Post } from "./Post"

import styles from './App.module.css';

import './global.css';




export function App() {


 return (
  <div>

  <Header/>
  <div className={styles.wrapper}>
   <Sidebar/>
    <main>
    <Post
   author="eu mesmo"
   content="dslfjkhvgdfhgljjfsljghslnvolshglnloshglh"
   />
    </main>
    </div>
   </div>
  )
}


