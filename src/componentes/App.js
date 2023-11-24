import React, {useState} from "react";
import Navbar from "./navbar";
import Proyectos from "./Proyectos";

function App() {
    const [pag, setPagina] = useState("Inicio")
    function cambiarPagina(event) {
        const pagina = event.target.id;
        setPagina(pagina);
    }

    return (
        <div>
            <Navbar
                placement="sticky-top"
                marca="BBonomo"
                link1="Inicio"
                link2="Proyectos"
                link3="Fotografia"
                cambiarPag={cambiarPagina}/> {pag == "Proyectos" && <Proyectos/>}
            {pag == "Inicio" && "inicio"}
            {pag == "Fotografia" && "Fotografia"}
        </div>
    )
}

export default App;