import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="row d-flex justify-content-center">


                    <div className="col-md-5 d-flex flex-column align-items-center text-white form" style={{ borderRadius: 50 }}>
                        <h1 className="display-5 fw-bolder mt-5">Bem vindo de volta</h1>
                        <p className="lead text-center mt-5">Insira suas informações para entrar</p>
                        <h5 className="mb-4 mt-4">Ou</h5>
                        <NavLink to="/register" className="btn btn-outline-light rounded-pill pb-2 w-50 mt-4"><i className='fa fa-user-plus'></i> Cadastrar-se</NavLink>
                    </div>


                    <div className="col-md-5 p-5 align-items-center justify-content-center text-white ms-5" style={{ backgroundColor: "#009485", borderRadius: 50 }}>
                        <h1 className="display-6 fw-bolder mb-5 text-center">Entrar</h1>
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Endereço de email</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Senha</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" class="btn btn-outline-light rounded-pill pb-2 w-25 mt-2"><i className='fa fa-sign-in'></i> Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;