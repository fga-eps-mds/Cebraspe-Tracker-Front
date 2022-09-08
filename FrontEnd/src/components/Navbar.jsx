import React from 'react'

const Navbar = () => {
    return (
        <div>
                <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
                    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <span class="fs-4" style={{color: 'white', marginLeft: 50}}>CTRACKER</span>
                    </a>
                    <a href="/" class="d-flex align-item-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
                    </a>

                    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 " style={{marginRight: 350}}>
                        <li><a href="#" class="nav-link px-2 link" style={{color: '#9C7DFD'}}>Produto</a></li>
                        <li><a href="#" class="nav-link px-2 link-secondary">Contato</a></li>
                        <li><a href="#" class="nav-link px-2 link-secondary">Quem Somos</a></li>
                    </ul>

                    <div class="col-md-3 text-end">
                        <button type="button" class="btn btn-outline-light me-4"style={{color: '#9C7DFD'}}>
                            <i className='fa fa-sign-in m-2'></i>Entrar</button>
                        <button type="button" class="btn btn-outline-light" style={{marginRight: 50, color: '#009485'}}>
                        <i className='fa fa-user-plus m-2'></i>Cadastrar-se</button>
                    </div>
                </header>
        </div>
    );
}
export default Navbar