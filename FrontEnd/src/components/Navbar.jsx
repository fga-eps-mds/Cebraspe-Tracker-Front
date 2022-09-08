import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
                    <NavLink to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <span className="fs-4" style={{color: 'white', marginLeft: 50}}>CTRACKER</span>
                    </NavLink>
                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 " style={{marginRight: 350}}>
                        <li><NavLink to="/" className="nav-link px-2 link-secondary">Produto</NavLink></li>
                        <li><NavLink to="/contact" className="nav-link px-2 link-secondary">Contato</NavLink></li>
                        <li><NavLink to="/about" className="nav-link px-2 link-secondary">Quem Somos</NavLink></li>
                    </ul>

                    <div className="col-md-3 text-end">
                        <button type="button" className="btn btn-outline-light me-4"style={{color: '#9C7DFD'}}>
                            <i className='fa fa-sign-in'></i> Entrar</button>
                        <button type="button" className="btn btn-outline-light" style={{marginRight: 50, color: '#009485'}}>
                        <i className='fa fa-user-plus'></i> Cadastrar-se</button>
                    </div>
                </header>
        </div>
    );
}
export default Navbar