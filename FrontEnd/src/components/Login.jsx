import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="display-4">Bem vindo de volta</h1>
                        <p className="lead">Insira suas informações para entrar</p>
                        <h5>Ou</h5>
                        <NavLink to="/register" className="btn btn-outline-light rounded-pill pb-2 w-50"></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;