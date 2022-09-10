import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router';


const Register = () => {

    const history = useNavigate()

    const [user, setUser] = useState({
      username : "",
      email:"",
      password : "",
      phone : ""
    });


    //handle inputs
    const handleInput = (event) =>{
      let name = event.target.name;
      let value = event.target.value;
  
      setUser({...user, [name]:value});
    }
    const handleSubmit = async (event)=>{
      event.preventDefault();
      // Object DeStructuring
      // Store Object Data into Variables
      const {username, email, password,phone } = user;
      try {
        //It is Submitted on port 3000 by default
        // Which is Front End but we need to 
        // Submit it on Backend which is on 
        // Port 3001. So we need Proxy.
        const res = await fetch('http://localhost:3000/register', {
          method : "POST",
          headers : {
            "Content-Type" : "application/json"
          },
          body : JSON.stringify({
            username, email, password,phone
          })
        })
        console.log(res.status)
        if(res.status === 400 || !res){
          window.alert("Usuario ja existente")
        }else{
          
          window.alert("Registrado Com Sucesso");
          history('/login')
        }
      } catch (error) {
        console.log(error);
      }
    }
  

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


                    <div 
                    className="col-md-5 p-5 align-items-center justify-content-center text-white" 
                    style={{ backgroundColor: "#009485", 
                    borderRadius: 50 }}>
                        <h1 className="display-6 fw-bolder mb-5 text-center">Entrar</h1>
                        <form onSubmit={handleSubmit} method="POST">
                            <div class="mb-3 ">
                                <label for="name" class="form-label">Nome</label>
                                <input type="Text" 
                                class="form-control" 
                                id="name" 
                                name="username"
                                 placeholder='Nome Completo' 
                                  value ={user.username}
                                   onChange={handleInput}/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="typePhone">Numero de telefone</label>
                                <input type="Text" id="typePhone"
                                class="form-control"
                                placeholder='(61)99999-9999'
                                value={user.phone}
                                name="phone" 
                                onChange={handleInput}/>
                            </div>
                            <div class="mb-3 text-white">
                                <label for="exampleInputEmail1" class="form-label">Endereço de Email</label>
                                <input type="email" name="email" class="form-control" id="exampleInputEmail1" placeholder='Nome@exemplo.com' value={user.email}  onChange={handleInput}/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Senha</label>
                                <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder='Senha Exemplo' value={user.password} onChange={handleInput} />
                            </div>
                            <div class="form-check">
                                <input class="form-check-input"  type="checkbox" value="" id="flexCheckIndeterminate" />
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