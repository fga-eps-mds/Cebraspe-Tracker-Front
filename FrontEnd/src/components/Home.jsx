import React from 'react';
import Navbar from './Navbar';

const Home = () => {
    return(
        <div>
            <Navbar/>
            <section id="home">
                <div className="container">
                    <div className='row justify-content-center'>
                        <div className='col-md-8 mt-5'>
                            <h1 className="display-4 fw-bolder mb-4 text-center text-white">NÃO TENHA MAIS <span style={{color:'#00ADFC'}}>ESTRESSE</span> COM AS <span style={{color:'#9C7DFD'}}>CHAMADAS</span> DO <span style={{color:'#00E6CF'}}>PAS</span></h1>
                            <p className="lead text-center fs-4 mb-5 text-white">Se cadastre-se agora no cebraspe tracker gratuitamente, para receber atualizações sobre as chamadas e se você foi convocado para a vaga na <span style={{color:'#00ADFC'}}>UNB</span></p>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
}

export default Home;