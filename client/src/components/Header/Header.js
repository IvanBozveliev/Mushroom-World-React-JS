import { Link } from "react-router-dom";
import mushlogo2 from '../images/mushlogo2.png';

import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="header-top">
                <div className="header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-3 col logo_section">
                                <div className="full">
                                    <div className="center-desk">
                                        <div className="logo">
                                            <p><img src={mushlogo2} alt="#" />MushWorld</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-8 col-md-8 col-sm-9">

                                <div className="menu-area">
                                    <div className="limit-box">
                                        <nav className="main-menu ">
                                            <ul className="menu-area-main">
                                                <li> <Link to="/">Home</Link> </li>
                                                <li> <Link to="/about">About</Link> </li>
                                                <li> <Link to="/all-mushrooms">All Mushrooms</Link> </li>
                                                <li> <Link to="/all-recipes">All Recipes</Link> </li>
                                                <li> <Link to="/contacts">Contact Us</Link> </li>
                                                <li> <Link to="/add-recipe">Add Recipe</Link> </li>
                                                <li> <Link to="add-mushroom">Add Mushroom</Link> </li>
                                                <li> <Link to="/register">Register</Link> </li>
                                                <li> <Link to="/login">Login</Link> </li>
                                                <li> <Link to="#">Logout</Link> </li>
                                            </ul>
                                        </nav>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;