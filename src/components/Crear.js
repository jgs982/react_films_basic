import { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage'


export const Crear = ({setListadoState}) => {

    const tituloComponente = 'Añadir Nueva Película'

    const [peliState, setPeliState] = useState({
        titulo: '',
        descripcion: ''
    })

    const { titulo, descripcion } = peliState

    const conseguirDatosForm = (e) => {

        // Evita que la página recargue al enviar el formulario
        e.preventDefault()

        // Conseguir datos del formulario
        let titulo = e.target.titulo.value 
        let descripcion = e.target.descripcion.value 

        // Crear objeto de la película a guardar
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        }
        
        // Guardar Estado
        setPeliState(peli)

        // Actualizar el estado del padre del listado principal
        setListadoState(elementos => {
            return [
                ...elementos,           // Copio las pelis que había
                peli                    // Añado la nueva peli al array
            ]
        })

        // Guardar en el Local Storage
        GuardarEnStorage('pelis', peli)
    }    

    return (
        <div className="add">
            <h3 className="title">
                {tituloComponente}
            </h3>

            <strong>
                {
                    (titulo && descripcion) ? 'Película Creada!!' : ''
                }
            </strong>

            <form
                onSubmit={conseguirDatosForm}
            >
                <input
                    type='text'
                    id='titulo'
                    name='titulo'
                    placeholder='Título'
                />

                <textarea
                    id='descripcion'
                    name='descripcion'
                    placeholder='Descripción'
                ></textarea>

                <input
                    type='submit'
                    id='guardar'
                    value='Guardar'
                />
            </form>
        </div>
    )
}
