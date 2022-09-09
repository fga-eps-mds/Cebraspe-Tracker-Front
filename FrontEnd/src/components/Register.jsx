import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="row d-flex justify-content-center">


                    <div className="col-md-5 d-flex flex-column align-items-center text-white ms-5 form order-2 justify-content-center" style={{ borderRadius: 50 }}>
                        <h1 className="display-5 fw-bolder">Seja bem vindo</h1>
                        <p className="lead text-center mt-4">Insira suas informações para realizar seu cadastro</p>
                        <h5 className="mb-4 mt-3">Ou</h5>
                        <p className="lead text-center mt-3">Se ja foi cadastrado</p>
                        <NavLink to="/login" className="btn btn-outline-light rounded-pill pb-2 w-50 mt-5"><i className='fa fa-sign-in'></i> Entrar</NavLink>
                    </div>


                    <div className="col-md-5 p-5 align-items-center justify-content-center text-white" style={{ backgroundColor: "#009485", borderRadius: 50 }}>
                        <h1 className="display-6 fw-bolder mb-5 text-center">Entrar</h1>
                        <form>
                            <div class="mb-3 ">
                                <label for="name" class="form-label">Nome</label>
                                <input type="Text" class="form-control" id="name" placeholder='Nome Completo' />
                            </div>
                            <div class="mb-3 ">
                                <label for="number" class="form-label">Número de telefone</label>
                                <input type="number" class="form-control" id="number" placeholder='(61) 9XXXX-XXXX' />
                            </div>
                            <div class="mb-3 text-white">
                                <label for="exampleInputEmail1" class="form-label">Endereço de Email</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder='Nome@exemplo.com' />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Senha</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Senha Exemplo'/>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                <label class="form-check-label" for="flexCheckIndeterminate">
                                    Concordo com termos de uso
                                </label>
                            </div>
                            <button type="submit" class="btn btn-outline-light rounded-pill pb-2 mt-4"><i className='fa fa-user-plus'></i> Cadastrar-se</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;