import React from 'react';
import {Container} from './style';
import { Link} from 'react-router-dom';

export default function Layout({children}) {
    
    return (
        <Container>
             <nav>
                <div className="nav-wrapper">
                <a href="#" className="brand-logo left">Logo</a>
                <ul id="nav-mobile" className="right ">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/recipe">Login</Link></li>
                </ul>
                </div>
            </nav>
            {children}   
        </Container>
    )
}
