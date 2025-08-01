import './SpamTarea.css';
export const SpamTarea = ({tarea, onEditar, onEliminar}) =>{
    return(
        <section className='Spam-tarea'>
            <header className='tarea-header'>
                <span>{tarea}</span>
            </header>
        <div className='tarea-botones'>
            <button className='btn-edit' onClick={onEditar}>Editar Tarea</button>
            <button className='btn-delete' onClick={onEliminar}>Eliminar Tarea</button>
        </div>
       </section>
    )
}