import React from "react";
import Navbar from "./navbar";
import Proyectos from "./Proyectos";

function App() {

    return (
        <div>
            <Navbar
                placement="sticky-top"
                marca="BBonomo"
                link1="Inicio"
                link2="Proyectos"
                link3="Fotografia"/>
            <Proyectos/>
        </div>
    )
}

export default App;