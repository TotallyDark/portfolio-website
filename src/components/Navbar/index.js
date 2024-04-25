import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>  
            <Nav>
                <NavMenu>
                <NavLink to="/" activeStyle>
                        <img src={require('../../media/Home.png')} width={80}/>
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/projects" activeStyle>
                        Projects
                    </NavLink>
                    <NavLink to="/blogs" activeStyle>
                        Blogs
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;