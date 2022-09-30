import style from './Sidebar.module.css'
import  {PencilLine}  from 'phosphor-react'

export function SideBar() {
    
    return (
        <aside className={style.sidebar} >
            <img 
                className={style.cover}
                src="https://images.unsplash.com/photo-1524230659092-07f99a75c013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
                 />
            <div className={style.profile}>
                <img className={style.avatar} src='https://avatars.githubusercontent.com/u/43190592?v=4'></img>

                <strong>Miqueias Severo</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href='#'>
                   <PencilLine size={20}/>
                   Editar seu perfil 
                </a>
            </footer>
        </aside>
    )

}