import React from "react";
import { Link } from "react-router-dom";


function State() {
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
            <select id="country-state" name="country-state">
                <option value="">Select state</option>
                <option value="AN">Andaman and Nicobar Islands</option>
                <option value="AP">Andhra Pradesh</option>
                <option value="AR">Arunachal Pradesh</option>
                <option value="AS">Assam</option>
                <option value="BR">Bihar</option>
                <option value="CH">Chandigarh</option>
                <option value="CT">Chhattisgarh</option>
                <option value="DN">Dadra and Nagar Haveli</option>
                <option value="DD">Daman and Diu</option>
                <option value="DL">Delhi</option>
                <option value="GA">Goa</option>
                <option value="GJ">Gujarat</option>
                <option value="HR">Haryana</option>
                <option value="HP">Himachal Pradesh</option>
                <option value="JK">Jammu and Kashmir</option>
                <option value="JH">Jharkhand</option>
                <option value="KA">Karnataka</option>
                <option value="KL">Kerala</option>
                <option value="LA">Ladakh</option>
                <option value="LD">Lakshadweep</option>
                <option value="MP">Madhya Pradesh</option>
                <option value="MH">Maharashtra</option>
                <option value="MN">Manipur</option>
                <option value="ML">Meghalaya</option>
                <option value="MZ">Mizoram</option>
                <option value="NL">Nagaland</option>
                <option value="OR">Odisha</option>
                <option value="PY">Puducherry</option>
                <option value="PB">Punjab</option>
                <option value="RJ">Rajasthan</option>
                <option value="SK">Sikkim</option>
                <option value="TN">Tamil Nadu</option>
                <option value="TG">Telangana</option>
                <option value="TR">Tripura</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="UT">Uttarakhand</option>
                <option value="WB">West Bengal</option>
            </select>
        </>
    )
}

export default State;