import React from "react";
import Navbar from "./navbar";
import ButtonBaseDemo from "./fotoBotones";

function App() {
    return (
        <div>
            <Navbar
                placement="sticky-top"
                marca="BBonomo"
                link1="Inicio"
                link2="Proyectos"
                link3="Fotografia"/>

            <ButtonBaseDemo
                title="Edificio"
                width="33%"
                url="fotos/premium_photo-1676657954811-9409c4830467.avif"/>
            <ButtonBaseDemo
                title="Carcel"
                width="34%"
                url="fotos/photo-1546450334-5a84ac3a1f0e.avif"/>
            <ButtonBaseDemo
                title="Playita"
                width="33%"
                url="fotos/photo-1683009427666-340595e57e43.avif"/>

            <ButtonBaseDemo
                title="Playita"
                width="33%"
                url="fotos/photo-1683009427666-340595e57e43.avif"/>
            <ButtonBaseDemo
                title="Edificio"
                width="34%"
                url="fotos/premium_photo-1676657954811-9409c4830467.avif"/>
            <ButtonBaseDemo
                title="Carcel"
                width="33%"
                url="fotos/photo-1546450334-5a84ac3a1f0e.avif"/>

            <ButtonBaseDemo
                title="Edificio"
                width="33%"
                url="fotos/premium_photo-1676657954811-9409c4830467.avif"/>
            <ButtonBaseDemo
                title="Carcel"
                width="34%"
                url="fotos/photo-1546450334-5a84ac3a1f0e.avif"/>
            <ButtonBaseDemo
                title="Playita"
                width="33%"
                url="fotos/photo-1683009427666-340595e57e43.avif"/>

        </div>
    )
}

export default App;