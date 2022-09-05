import { useState } from "react"
import { Buscador } from "./components/Buscador"
import { Crear } from "./components/Crear"
import { Header } from "./components/Header"
import { Listado } from "./components/Listado"
import { Footer } from "./components/Footer"
import { Navegacion } from "./components/Navegacion"

function App() {

    const [listadoState, setListadoState] = useState([])

    return (
        <div className="layout">
            <Header/>  

            <Navegacion/>
        
            <section id="content" className="content">            
                <Listado
                    listadoState={listadoState}
                    setListadoState={setListadoState}
                />
            </section>
        
            <aside className="lateral">
                <Buscador
                    listadoState={listadoState}
                    setListadoState={setListadoState}
                />

                <Crear
                    setListadoState={setListadoState}
                />
            </aside>
            
            <Footer/>
        </div>
    )
}

export default App