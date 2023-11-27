import React from "react";
import Navbar from "./navbar";
import Proyectos from "./Proyectos";
import Inicio from "./inicio";
import Fotografia from "./fotografia";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {

    return (
        <div>

            <Router>
                <Navbar
                    placement="sticky-top"
                    marca="BBonomo"
                    link1="Inicio"
                    link2="Proyectos"
                    link3="Fotografia"/>

                <Routes>
                    <Route path='/' element={<Inicio/>}/>
                    <Route path='/proyectos' element={<Proyectos/>}/>
                    <Route path='/fotografia' element={<Fotografia/>}/>

                </Routes>
            </Router>
        </div>
    )
}

export default App;