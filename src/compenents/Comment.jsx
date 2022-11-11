import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment({content}) {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/miqueiassevero.png"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Miqueias Severo</strong>
                            <time title='11 de Setembro as 22:00h' dateTime='2022-09-26 22:00:00'>Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                   <button>
                    <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button> 
                </footer>

                
            </div>


        </div>
    )
}