import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function Navbar(props) {
    const clasesNav = "navbar navbar-expand-lg bg-body-tertiary " + props
        .placement
        .toString();
    return (
        <nav className={clasesNav} id="navbar">
            <div className="container-fluid">
                <Link className="links navbar-brand" id="marca" to='/'>
                    <a>{props.marca}</a>
                </Link>
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
                            <Link className="links" to='/'>
                                <a className="nav-link active" aria-current="page" id={props.link1}>{props.link1}</a>
                            </Link>
                        </li>
                        <li className="nav-item">

                            <Link className="links" to='/proyectos'>
                                <a className="nav-link" id={props.link2}>{props.link2}</a>
                            </Link>
                        </li>
                        <li className="nav-item">

                            <Link className="links" to='/fotografia'>
                                <a className="nav-link" id={props.link3}>{props.link3}</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;