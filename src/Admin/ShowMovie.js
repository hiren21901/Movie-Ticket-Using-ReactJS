import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";



function ShowMovie() {


    const [view, setView] = useState([]);

    const getMovie = () => {
        axios.get('http://localhost:5000/Movie/ShowMovie')

            .then(function (response) {
                setView(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    useEffect(() => {
        getMovie();
    }, []);

    return (
        <>

            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                {/* Left navbar links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#" role="button">
                            <i className="fas fa-bars" />
                        </a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="../../index3.html" className="nav-link">
                            Home
                        </a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="#" className="nav-link">
                            Contact
                        </a>
                    </li>
                    {/* <li className="nav-item d-none d-sm-inline-block">
                        <form className="d-flex" role="search">
                            <button className="btn btn-outline-info" type="submit">
                                <a href="../../LogoutAdmin.php">LogOut</a>
                            </button>
                        </form>
                    </li> */}
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-widget="navbar-search"
                            href="#"
                            role="button"
                        >
                            <i className="fas fa-search" />
                        </a>
                        <div className="navbar-search-block">
                            <form className="form-inline">
                                <div className="input-group input-group-sm">
                                    <input
                                        className="form-control form-control-navbar"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                    <div className="input-group-append">
                                        <button className="btn btn-navbar" type="submit">
                                            <i className="fas fa-search" />
                                        </button>
                                        <button
                                            className="btn btn-navbar"
                                            type="button"
                                            data-widget="navbar-search"
                                        >
                                            <i className="fas fa-times" />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-widget="fullscreen"
                            href="#"
                            role="button"
                        >
                            <i className="fas fa-expand-arrows-alt" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-widget="control-sidebar"
                            data-slide="true"
                            href="#"
                            role="button"
                        >
                            <i className="fas fa-th-large" />
                        </a>
                    </li>
                </ul>
            </nav>
            {/* /.navbar */}
            {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a href="../../index3.html" className="brand-link">
                    <img
                        src="../../dist/img/AdminLTELogo.png"
                        alt="AdminLTE Logo"
                        className="brand-image img-circle elevation-3"
                        style={{ opacity: ".8" }}
                    />
                    <span className="brand-text font-weight-light">AdminLTE 3</span>
                </a>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img
                                src="../../dist/img/user2-160x160.jpg"
                                className="img-circle elevation-2"
                                alt="User Image"
                            />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">
                                Alexander Pierce
                            </a>
                        </div>
                    </div>
                    <nav className="mt-2">
                        <ul
                            className="nav nav-pills nav-sidebar flex-column"
                            data-widget="treeview"
                            role="menu"
                            data-accordion="false"
                        >
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                <i class="fa-solid fa-video movie movies"></i>
                                    <p>
                                        MOVIE
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to='/AddMovie'><a
                                            href="./pages/forms/RegShowTables.php"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon" />
                                            <p>Add Movie</p>
                                        </a></Link>
                                    </li>
                                </ul>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to='/showMovie'><a
                                            href="./pages/forms/RegShowTables.php"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon" />
                                            <p>Show Movie</p>
                                        </a></Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                <i class="fa-solid fa-clapperboard series"></i>
                                    <p>
                                        SERIES
                                        <i className="right fas fa-angle-left" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to='/addcategory'><a
                                            href="#"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon" />
                                            <p>Add Category</p>
                                        </a></Link>
                                    </li>
                                </ul>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to='/showcategory'><a
                                            href="./pages/forms/BookShowTables.php"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon" />
                                            <p>Show Category</p>
                                        </a></Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-tree" />
                                    <p>
                                        Sub Category
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to='/addsubcategory'><a href="./pages/forms/ContactShow.php" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Add SubCategory</p>
                                        </a></Link>
                                    </li>
                                </ul>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to='/showsubcategory'><a href="./pages/forms/ContactShow.php" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Show SubCategory</p>
                                        </a></Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-edit" />
                                    <p>
                                        Add Product
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to='/Addproduct'><a href="./pages/forms/AddProduct.php" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Add</p>
                                        </a></Link>
                                    </li>
                                </ul>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to='/Showproduct'><a href="./pages/forms/Showproduct.php" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Show</p>
                                        </a></Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-table" />
                                    <p>
                                        Buy Now
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="./pages/forms/BuyNow.php" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Show Tables</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-table" />
                                    <p>
                                        New Sletter
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a
                                            href="./pages/forms/NewsletterShow.php"
                                            className="nav-link"
                                        >
                                            <i className="far fa-circle nav-icon" />
                                            <p>Show Tables</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>

            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>View Product</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">View Product</li>
                                </ol>
                            </div>
                        </div>
                    </div>{/* /.container-fluid */}
                </section>
                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                        <div className="row" style={{ padding: '20px 0', margin: '-28px 0 0 0' }}>
                            {/* left column */}

                            <div className='product d-flex' style={{ gap: '20px' }}>
                                {
                                    view.map((val, i) => {
                                        return (
                                            <div className='view_product' key={i}>
                                                <img src={val.image} className='viewproduct_img' style={{ border: '5px solid', width: '184px', height: '150px' }}></img>
                                                <h3 style={{ border: '5px solid', margin: '5px 0 0 0px', padding: '3px', width: '184px' }}>{val.name}</h3>
                                                <p style={{ border: '5px solid', margin: '5px 0 0 0px', padding: '3px', width: '184px' }}>{val.description}</p>
                                                <h4 style={{ border: '5px solid', margin: '5px 0 0 0px', padding: '3px', width: '184px' }}>{val.time}</h4>
                                                <h4 style={{ border: '5px solid', margin: '5px 0 0 0px', padding: '3px', width: '184px' }}>₹{val.price}</h4>
                                                <h4 style={{ border: '5px solid', margin: '5px 0 0 0px', padding: '3px', width: '184px' }}>{val.type}</h4>
                                                <h4 style={{ border: '5px solid', margin: '5px 0 0 0px', padding: '3px', width: '184px' }}>{val.release}</h4>
                                                <h4 style={{ border: '5px solid', margin: '5px 0 0 0px', padding: '3px', width: '184px' }}>{val.language}</h4>
                                                <h4 style={{ border: '5px solid', margin: '5px 0 0 0px', padding: '3px', width: '184px' }}>{val.graphics}</h4>
                                                <h4 style={{ border: '5px solid', margin: '5px 0 0 0px', padding: '3px', width: '184px' }}>{val.screennumber}</h4>
                                                <h4 style={{ border: '5px solid', margin: '5px 0 0 0px', padding: '3px', width: '184px' }}>{val.fooddiscount}</h4>
                                                <h4 style={{ border: '5px solid', margin: '5px 0 0 0px', padding: '3px', width: '184px' }}>{val.status}</h4>


                                                <Link to={`/EditMovie/${val?._id}`} >
                                                    <button className='mt-3 me-5 btn btn-primary' style={{ border: '5px solid', borderBlockColor: 'black !impotant', padding: '6px 25px ', margin: '0px 0px 30px', width: '' }}>Edit</button>
                                                </Link>
                                                {/* <Link className='mt-3 btn btn-danger' style={{ border: '5px solid', borderColor: 'black', padding: '6px 25px', margin: '9px 2px 30px 11px' }} onClick={() => deletehendle(val._id)} >Delete</Link> */}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>{/* /.container-fluid */}
                </section>``
                {/* /.content */}
            </div>
            {/* </div> */}




        </>
    )
}

export default ShowMovie;