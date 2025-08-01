export const SpamTarea = ({tarea, onEditar, onEliminar}) =>{
    return(
        <section>
            <header>
                <span>{tarea}</span>
            </header>
        <div>
            <button onClick={onEditar}>Editar Tarea</button>
            <button onClick={onEliminar}>Eliminar Tarea</button>
        </div>
       </section>
    )
}