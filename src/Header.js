import React from "react";
import "../src/App.css";
// import axios from 'axios';

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary rounded " aria-label="Thirteenth navbar example"
            >
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarsExample11"
                        aria-controls="navbarsExample11"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse d-lg-flex backgroundcolor menu-1" id="navbarsExample11">
                        <a className="navbar-brand col-lg-3 me-0" href="#">
                            <img className="position-absolute " src={require('../src/images/logo/logo.png')} style={{ objectFit: "cover" }} />
                        </a>
                        <ul className="navbar-nav col-lg-6 justify-content-lg-center menu">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    HOME
                                </a>
                                <ul class="submenu">
                                    <li>
                                        <a href="#0" class="active">Home One</a>
                                    </li>
                                    <li>
                                        <a href="index-2.html">Home Two</a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    MOVIES
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    EVENTS
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    SPORTS
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    PAGES
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link">
                                    BLOG
                                </a>
                            </li>

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    CONTACT
                                </a>
                                <ul className="dropdown-menu">
                                    <ul class="submenu">
                                        <li>
                                            <a href="movie-grid.html">Movie Grid</a>
                                        </li>
                                        <li>
                                            <a href="movie-list.html">Movie List</a>
                                        </li>
                                        <li>
                                            <a href="movie-details.html">Movie Details</a>
                                        </li>
                                        <li>
                                            <a href="movie-details-2.html">Movie Details 2</a>
                                        </li>
                                        <li>
                                            <a href="movie-ticket-plan.html">Movie Ticket Plan</a>
                                        </li>
                                        <li>
                                            <a href="movie-seat-plan.html">Movie Seat Plan</a>
                                        </li>
                                        <li>
                                            <a href="movie-checkout.html">Movie Checkout</a>
                                        </li>
                                        <li>
                                            <a href="popcorn.html">Movie Food</a>
                                        </li>
                                    </ul>
                                </ul>
                            </li>
                        </ul>
                        <div className="d-lg-flex col-lg-3 justify-content-lg-end">
                            <button className="btn btn-primary">Button</button>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header;