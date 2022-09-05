
export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {

    const titulo_componente = 'Editar Película'

    const guardarEdicion = (e, id) => {
        
        e.preventDefault() 

        // Conseguir el target del evento
        let target = e.target 

        // Buscar el indice del objeto de la película a actualizar
        const pelis_almacenadas = conseguirPeliculas() 
        const indice = pelis_almacenadas.findIndex(peli => peli.id===id)

        // Crear Objeto con ese índice, título y descripción del formulario 
        let peli_actualiza = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value 
        }

        // Actualizar el elemento con ese índice
        pelis_almacenadas[indice] = peli_actualiza

        // Guardar el nuevo array de objetos en el localStorage
        localStorage.setItem('pelis', JSON.stringify(pelis_almacenadas))

        // Actualizar estados
        setListadoState(pelis_almacenadas)
        setEditar(0)
    }

    return (
        <div className="edit_form">
            <h3 className="title">
                {titulo_componente}
            </h3>

            <form
                onSubmit={e => guardarEdicion(e, peli.id)}
            >
                <input 
                    type='text'
                    name='titulo'
                    className='titulo_editado'
                    defaultValue={peli.titulo}
                /> 

                <textarea 
                    name='descripcion'
                    defaultValue={peli.descripcion}
                    className='descripcion_editada'
                />

                <input 
                    type='submit'
                    className='editar'
                    value='Actualizar'
                />
            </form>
        </div>
    )
}
