import React, {useEffect, useRef, useState} from 'react';
import {Container} from './style';
import { Link} from 'react-router-dom';
import M from 'materialize-css';
export default function Layout({children}) {
    const loginModalElement = useRef(null)
    var [modalInstance, setModalInstance] = useState(null)
    useEffect(()=>{
        setModalInstance(M.Modal.init(loginModalElement.current))
    },[])
    return (
        <Container>
             <nav>
                <div className="nav-wrapper">
                <Link to="/home" className="brand-logo left">Logo</Link>
                <ul id="nav-mobile" className="right ">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/recipe">Login</Link></li>
                    <li onClick={()=>modalInstance.open()} ><Link to="/recipe">Login</Link></li>
                </ul>
                </div>
            </nav>
            <div ref={loginModalElement} id="modal1" className="modal">
                <form action="">
                    <div className="modal-content">
                        <h4>Login</h4>
                        <div className="row">
                            <div className="input-field col s12">
                            <input id="email" type="email" className="validate"/>
                            <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <input id="password" type="password" className="validate"/>
                            <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="modal-close waves-effect waves-green btn-flat">Login</button>
                        <button type="button" className="modal-close waves-effect waves-green btn-flat">Register</button>
                    </div>
                </form>
                
            </div>
            {children}   
        </Container>
    )
}
