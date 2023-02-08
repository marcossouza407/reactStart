import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment() {
return (
    <div className={styles.comment}>
    <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/116312153?v=4"/>

    <div className={styles.commentBox}>
        <div className={styles.commentContent}>
        <header>
            <div className={styles.authorAndTime}>
                <strong>diego fernandes</strong>
                <time title="11 de maio as 8:30h" dateTime="2022-05-11 08:03:30">
                cerca de 1h atrás
                </time>

            </div>
                <button title="Deletar comentário">
                    <Trash size={24}/>
                </button>
        </header>

        <p>muito bom devon, parabéns!!</p>
        </div>

        <footer>
        <button>
            <ThumbsUp/>
            aplaudir <span>20</span>
        </button>
        </footer>
    </div>
    </div>
)
}