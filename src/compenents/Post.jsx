import {format, formatDistanceToNow}  from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react';

import { Comment } from './Comment'
import styles from './Post.module.css'


//estado = variáveis que eu quero que o componente olhe. 

export function Post({author, publishedAt, content}){

    const [comments, setComments] =useState([
        'Post muito legal!'
    ]);

    const publishedDateFormatted = format(
        publishedAt,
        "d 'de' LLLL 'as' HH:mm'h'",
        {locale: ptBR}     
    );

    const publishedRelativeToNow = formatDistanceToNow(
        publishedAt,
        {locale: ptBR, addSuffix: true}

    );
    function handleCreateNewComment(){
        event.preventDefault()
        setComments([...comments,comments.length + 1])
       
    }
    return (
       
       <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>

                    </div>   
                </div>  


                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(line => {
                    if (line.type == 'paragraph'){
                        return <p>{line.content}</p>;
                    }else if (line.type == 'link'){
                        return <p><a href="#">{line.content}</a></p>;
                    }        
                })}
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea
                    placeholder='Deixe seu comentário '
                />
                <footer>
                     <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                   {comments.map(commet => {
                        return <Comment content={commet}/>
                   })}
                </div>

       </article>
    )
}