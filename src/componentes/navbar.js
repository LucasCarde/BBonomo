import React from "react";

function Navbar(props) {
    const clasesNav = "navbar navbar-expand-lg bg-body-tertiary " + props
        .placement
        .toString();
    return (
        <nav className={clasesNav} id="navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="#" id="marca">{props.marca}</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                                onClick={props.cambiarPag}
                                id={props.link1}>{props.link1}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={props.cambiarPag} id={props.link2}>{props.link2}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={props.cambiarPag} id={props.link3}>{props.link3}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;