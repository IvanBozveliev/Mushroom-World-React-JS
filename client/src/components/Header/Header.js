import { useContext } from "react";
import { Link } from "react-router-dom";
import { NavDropdown, Nav } from 'react-bootstrap';
import { AuthContext } from "../../contexts/AuthContext";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {

    const { user } = useContext(AuthContext);

    let guestNav = (
        <>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/about">About</Link> </li>
            <li> <Link to="/register">Register</Link> </li>
            <li> <Link to="/login">Login</Link> </li>
        </>
    );

    let userNav = (
        <>

            <li> <Link to="/">Home</Link> </li>
            
            <div className='navBootstrap'>
                <Nav>
                    <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="Mushrooms"
                    >
                        <NavDropdown.Item to="/all-mushrooms" as={Link}>All Mushrooms</NavDropdown.Item>
                        <NavDropdown.Item to="/add-mushroom" as={Link}>Add Mushroom</NavDropdown.Item>
                        
                    </NavDropdown>
                </Nav>

                <Nav>
                    <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="Recipes"
                    >
                        <NavDropdown.Item to="/all-recipes" as={Link}>All Recipes</NavDropdown.Item>
                        <NavDropdown.Item to="/add-recipe" as={Link}>Add Recipe</NavDropdown.Item>
                       
                    </NavDropdown>
                </Nav>

            </div>
            <li> <Link to="/about">About</Link> </li>
            {/* 
            <li> <Link to="/all-mushrooms">All Mushrooms</Link> </li>
            <li> <Link to="/add-mushroom">Add Mushroom</Link> </li> */}

            {/* <li> <Link to="/all-recipes">All Recipes</Link> </li>
            <li> <Link to="/add-recipe">Add Recipe</Link> </li> */}

            <div className='divName'>
                <li><p className='usernameStyle'><Link to="#">[ Welcome, <strong className='llow'>{user.username} </strong> ]</Link> </p></li>
            </div>
            <li> <Link to="/logout">Logout</Link> </li>

        </>
    )


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
                                            <div className="titleDiv"><img src="/images/mushlogo2.png" alt="#" /><Link id="logoTitle" to="/">MushWorld</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-8 col-md-8 col-sm-9">

                                <div className="menu-area">
                                    <div className="limit-box">
                                        <nav className="main-menu ">
                                            <ul className="menu-area-main">

                                                {user.username ? userNav : guestNav}

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