import ptBR from "date-fns/locale/pt-BR";
import { format, formatDistanceToNow } from "date-fns";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";
import { useState } from "react";



export function Post({ author, publishedAt, content }) {
    const [comments,setComments] = useState ([
     'poot muito bacana, hein?!'
    ])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",{
      locale: ptBR,
    });

  const publishedDaterelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNemcomment(){
    event.preventDefault()

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  
  }

  function handleNewCommentChange() {
   setNewCommentText(event.target.value);
  }
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{AuthenticatorResponse.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDaterelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type == "paragraph") {
            return <p key={line.content}> {line.content}</p>;
          } else if (line.type == "link") {
            return (
              <p key={line.content}> <a href="#">{line.content}</a></p>
            );
          }
        })}
      </div>
      <form onSubmit={handleCreateNemcomment} className={styles.commentForm}>
        <strong>deixe seu feedback</strong>

        <textarea
        name="comment"
        placeholder="deixe um comentário"
        value={newCommentText}
        onChange={handleNewCommentChange} />

        <footer>
          <button type="submit">piblicar</button>
        </footer>
      </form>
      <div className={styles.commetList}>
        {comments.map(comment=> { 
          return <Comment key={comment}content={comment} />
      })}
        
      </div>
    </article>
  );
}
