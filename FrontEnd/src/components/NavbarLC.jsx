import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div>
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
                <NavLink to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span className="fs-4 fw-bold" style={{ color: '#00ADFC', marginLeft: 50 }}>CTRACKER</span>
                </NavLink>
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 mx-auto">
                    <li><NavLink to="/" className="nav-link px-2 link-secondary">Produto</NavLink></li>
                    <li><NavLink to="/contact" className="nav-link px-2 link-secondary">Contato</NavLink></li>
                    <li><NavLink to="/about" className="nav-link px-2 link-secondary">Quem Somos</NavLink></li>
                </ul>

                <div className="col-md-3 text-end">

                        </div>
            </header>
        </div>
    );
}
export default Navbar