import React from 'react';
import Navbar from './Navbarlog';


const AfterLogin = () => {
    return(
        <div>
            <Navbar/>
            <section id="home">
                <div className="container">

               

                    <div className='row justify-content-center'>
                        <div className='col-md-8 mt-5'>
                            <h1 className="display-4 fw-bolder mb-4 text-center text-white">Você Está Cadastrado Em Nosso  <span style={{color:'#00ADFC'}}>SISTEMA</span> PARA RECEBER <span style={{color:'#9C7DFD'}}>Notificações sobre Chamadas</span> DO <span style={{color:'#00E6CF'}}>PAS</span></h1>
                            <p className="lead text-center fs-4 mb-5 text-white">No seu cadastro atual você está optado para receber e-mails sobre cada atualização no Subprograma que você está cadastrado do PAS/UNB,Se for uma nova Chamada você receberá um e-mail ou SMS sobre isso e se nosso sistema encontrar seu nome na lista de aprovados enviaremos sua notificação na forma de sms nosso e-mail <span style={{color:'#00ADFC'}}>UNB</span></p>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
}

export default AfterLogin;