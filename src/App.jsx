import { Header } from "./compenents/Header"
import {Post} from "./compenents/Post"
import { SideBar } from "./compenents/Sidebar"
import styles from './App.module.css'
import './global.css'


const posts = [
    {
      id: 1,
      author: {
        avatarUrl:'https://github.com/miqueiassevero.png',
        name: 'Miqueias Severo',
        role: 'CTO @SSComunica',
        },
      content: [
        {type : 'paragraph', content :'Fala galeraa 👋'},
        {type : 'paragraph', content :'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type : 'link', content :'jane.design/doctorcare'},
      ],
      publishedAt : new Date('2022-10-13 01:06') ,
    },
    {
      id: 2,
      author: {
        avatarUrl:'https://github.com/micaelsevero.png',
        name: 'Micael Severo',
        role: 'Developer @SSComunica',
        },
      content: [
        {type : 'paragraph', content :'Fala galeraa 👋'},
        {type : 'paragraph', content :'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type : 'link', content :'jane.design/doctorcare'},
      ],
      publishedAt : new Date('2022-10-10 01:10') ,
    }
];
export function App() {


  return (
     <div>
      <Header/>

      <div className={styles.wrapper}>
        <SideBar/>
        <main>
            {posts.map( post => {

                return (
                  <Post
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                  
                  
                  />
                )  
              })}
        </main>
      
      </div>   

     </div>
    )
}

