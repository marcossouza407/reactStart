import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/116312153?v=4"/>
                    <div className={styles.authorInfo}>
                    <strong>marcos</strong>
                    <span>web developer</span>
                
                    </div>
                </div>
                <time title="11 de maio as 8:30h" dateTime="2022-05-11 08:03:30">
                    publicado a há 1h
                </time>
            </header>

            <div className={ styles.content}>
                <p>fala galera  👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
                   no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 </p>
                   <p>👉 <a href="">jane.design/doctorcare</a></p>
                   <p>
                    <a href="">#novoprojeto</a>
                     <a href="">#nlw </a>
                     <a href="">#rocketseat</a>
                     </p>

            </div>
            <form className={styles.commentForm}>
                <strong>deixe seu feedback</strong>

                <textarea placeholder="deixe um comentário" />
                
                <footer>
                    <button type="submit">piblicar</button>
                </footer>
            </form>
            <div className={styles.commetList}>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
        
    )
}