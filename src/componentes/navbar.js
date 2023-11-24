import React, {useState} from "react";

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
                            <a className="nav-link active" aria-current="page" href="#">{props.link1}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{props.link2}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{props.link3}</a>
                        </li>
                        {/*
                        MENU DROP
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                {props.link3}
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="#">{props.accion1}</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">{props.accion2}</a>
                                </li>
                                <li><hr className="dropdown-divider"/></li>
                                <li>
                                    <a className="dropdown-item" href="#">{props.accion3}</a>
                                </li>
                            </ul>
                        </li> */
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;