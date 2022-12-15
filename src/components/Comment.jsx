import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
return (
    <div className={styles.comment}>
    <img src="https://avatars.githubusercontent.com/u/116312153?v=4"/>

    <div className={styles.commentbox}>
        <div className={styles.commentContent}>
        <header>
            <div className={styles.authorAndtime}>
                <strong>diego fernandes</strong>
                <time title="11 de maio as 8:30h" dateTime="2022-05-11 08:03:30">
                cerca de 1h atrás
                </time>

                <buttton title="deletar comentário">
                    <Trash size={20}/>
                </buttton>
            </div>
        </header>

        <p>muito bom devon, parabéns!!</p>
        </div>

        <footer>aplaudir
        <button>
            <ThumbsUp/>
            aplaudir <sapn>20</sapn>
        </button>
        </footer>
    </div>
    </div>
)
}