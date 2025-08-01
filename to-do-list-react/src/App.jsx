import './App.css'
import { SpamTarea } from './components/SpamTarea'
function App() {
  return (
    <>
      <section className='content-tareas'>
        <SpamTarea tarea={"Pasear al perro"}/>  
        <SpamTarea tarea={"Comprar alimento"}/>  
        <SpamTarea tarea={"Besar un arbol lindo"}/>
      </section>
    </>  
  )
}

export default App
