import { Nav } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import './Navbar.css'

export function Navbar(){

    function addAnimatedClass(e){
        
        e.target.className += " animated";
        console.log(e.target);
    } 
    function removeAnimatedClass(e){
        e.target.className = e.target.className.replace(" animated", "");
    }

    return(
        <Nav className="glass border border-dark d-flex justify-content-around py-3">
            <Nav.Item>
                <Link onMouseEnter= {addAnimatedClass} onMouseLeave={removeAnimatedClass} className="link-navbar" to="/">Home</Link>
            </Nav.Item>
            <Nav.Item>
                <Link onMouseEnter= {addAnimatedClass} onMouseLeave={removeAnimatedClass} className="link-navbar" to="/movies">Search</Link>
            </Nav.Item>
            <Nav.Item>
                <Link onMouseEnter= {addAnimatedClass} onMouseLeave={removeAnimatedClass} className="link-navbar" to="/contacto">Contact</Link>
            </Nav.Item>
        </Nav>
    );
}