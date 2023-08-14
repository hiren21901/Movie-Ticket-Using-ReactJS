import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


function EditMovie() {


    const navigate = useNavigate();
    const [image, setimage] = useState('');
    const [name, setname] = useState('');
    const [type, settype] = useState('');
    const [release, setrelease] = useState('');
    const [language, setlanguage] = useState('');
    const [description, setdesc] = useState('');
    const [price, setprice] = useState('');
    const [time, settime] = useState('');
    const [graphics, setgraphics] = useState('');
    const [screennumber, setscreennumber] = useState('');
    const [fooddiscount, setfooddiscount] = useState('');
    const [status, setstatus] = useState('');


    const params = useParams();

    const getproduct = async () => {
        await axios.get(`http://localhost:5000/Movie/ShowOneMovie/${params.id}`)
            .then(function (response) {
                console.log(response.data);
                setimage(response.data.data.image)
                setname(response.data.data.name)
                settype(response.data.data.type)
                setrelease(response.data.data.release)
                setlanguage(response.data.data.language)
                setdesc(response.data.data.description)
                setprice(response.data.data.price)
                settime(response.data.data.time)
                setgraphics(response.data.data.graphics)
                setscreennumber(response.data.data.screennumber)
                setfooddiscount(response.data.data.fooddiscount)
                setstatus(response.data.data.status)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {
        getproduct();
    }, []);


    const Submit = (e) => {

        e.preventDefault();
        axios.patch(`http://localhost:5000/Movie/UpdateMovie/${params.id}`, {
            image: image,
            name: name,
            description: description,
            type: type,
            release: release,
            language: language,
            description:description,
            price: price,
            time:time,
            graphics:graphics,
            screennumber:screennumber,
            fooddiscount:fooddiscount,
            status:status

        })
            .then(function (response) {
                console.log(response);
                setimage('')
                setname('')
                settype('')
                setrelease('')
                setlanguage('')
                setdesc('')
                setprice('')
                settime('')
                setgraphics('')
                setscreennumber('')
                setfooddiscount('')
                setstatus('')
                navigate('/ShowMovie')
            })
            .catch(function (error) {
                console.log(error);
            })

    }


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
                                <h1>Product Form</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <a href="#">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active">General Form</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    {/* /.container-fluid */}
                </section>
                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            {/* left column */}
                            <div className="col-md-6">
                                {/* general form elements */}
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">Movie Example</h3>
                                    </div>
                                    {/* /.card-header */}
                                    {/* form start */}
                                    <form>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="productImage">Movie Image</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="MovieImage"
                                                    placeholder="URL"
                                                    value={image}
                                                    onChange={(e) => { setimage(e.target.value) }}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="productName">Movie Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="MovietName"
                                                    placeholder="Enter Movie name"
                                                    value={name}
                                                    onChange={(e) => { setname(e.target.value) }}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="productDescription">Movie Description</label>
                                                <textarea
                                                    type="tex"
                                                    className="form-control"
                                                    id="MovieDescription"
                                                    placeholder="Enter Movie Description"
                                                    value={description}
                                                    onChange={(e) => { setdesc(e.target.value) }}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="productPrice">Movie Price</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="MoviePrice"
                                                    placeholder="Enter Movie price"
                                                    value={price}
                                                    onChange={(e) => { setprice(e.target.value) }}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="productPrice">Movie Time</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="Movietime"
                                                    placeholder="Enter Movie time"
                                                    value={time}
                                                    onChange={(e) => { settime(e.target.value) }}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="productPrice">Movie Type</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="Movietype"
                                                    placeholder="Enter Movie type"
                                                    value={type}
                                                    onChange={(e) => { settype(e.target.value) }}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="productPrice">Movie Release</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="Movierelease"
                                                    placeholder="Enter Movie release"
                                                    value={release}
                                                    onChange={(e) => { setrelease(e.target.value) }}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="productPrice">Movie language</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="Movielanguage"
                                                    placeholder="Enter Movie language"
                                                    value={language}
                                                    onChange={(e) => { setlanguage(e.target.value) }}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="productPrice">Movie Graphics</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="Moviegraphics"
                                                    placeholder="Enter Movie graphics"
                                                    value={graphics}
                                                    onChange={(e) => { setgraphics(e.target.value) }}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="productPrice">Movie Screennumber</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="Moviescreennumber"
                                                    placeholder="Enter Movie screennumber"
                                                    value={screennumber}
                                                    onChange={(e) => { setscreennumber(e.target.value) }}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="productPrice">Movie fooddiscount</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="Moviefooddiscount"
                                                    placeholder="Enter Movie fooddiscount"
                                                    value={fooddiscount}
                                                    onChange={(e) => { setfooddiscount(e.target.value) }}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="productPrice">Movie status</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="Moviestatus"
                                                    placeholder="Enter Movie status"
                                                    value={status}
                                                    onChange={(e) => { setstatus(e.target.value) }}
                                                />
                                            </div>


                                        </div>
                                        {/* /.card-body */}
                                        <div className="card-footer">
                                            <button type="button" className="btn btn-primary" onClick={Submit}>
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                            {/*/.col (left) */}

                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container-fluid */}
                </section>
                {/* /.content */}
            </div>


        </>
    )

}
export default EditMovie;