import { Header } from "./compenents/Header"
import {Post} from "./compenents/Post"
import { SideBar } from "./compenents/Sidebar"
import styles from './App.module.css'
import './global.css'


export function App() {


  return (
     <div>
      <Header/>

      <div className={styles.wrapper}>
        <SideBar/>
        <main>
            <Post 
            author="Miqueias Severo"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab commodi modi necessitatibus eveniet, magnam ipsum incidunt mollitia quod cum provident vel delectus vero? Maxime non, magni harum dolor accusamus est?
            "
            />
            <Post 
            author="Janaina Severo"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab commodi modi necessitatibus eveniet, magnam ipsum incidunt mollitia quod cum provident vel delectus vero? Maxime non, magni harum dolor accusamus est?
            "
            /> 
        </main>
      
      </div>   

     </div>
    )
}

