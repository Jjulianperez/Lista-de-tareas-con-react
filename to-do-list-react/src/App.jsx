import './App.css'
import { SpamTarea } from './components/SpamTarea'
import { ContMjs } from './components/ContMsj'
function App() {
  return (
    <>
      <section className='content-tareas'>
        <ContMjs mensaje={"Hola Irina"}/>
        <SpamTarea tarea={"Pasear al perro"}/>  
        <SpamTarea tarea={"Comprar alimento"}/>  
        <SpamTarea tarea={"comprar flores a iri"}/>
      </section>
    </>  
  )
}

export default App
