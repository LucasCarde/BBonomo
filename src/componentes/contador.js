import React, {useState} from "react";

function Contador() {
    
    const [num, cambiarEstado] = useState(0);

    function restar() {
        cambiarEstado(num - 1)

    }

    function sumar() {
        cambiarEstado(num + 1)

    }

    return <div className="contador">
        <h1>{num}</h1>
        <button type="button" className="btn btn-light btn-lg" onClick={restar} id="cambiarContador">-</button>
        <button type="button" className="btn btn-light btn-lg" onClick={sumar} id="cambiarContador">+</button>
    </div>

}

export default Contador;