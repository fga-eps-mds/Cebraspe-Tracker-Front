import React from 'react';
import Navbar from './Navbar';

const About = () => {
    return (
        <div>
            <Navbar/>

            <section id="about">
                <div className="container my-5 py-5">
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className="display-4 fw-bolder mb-4 text-center text-white">O <span style={{ color: '#00ADFC' }}>CTRACKER</span> É</h3>
                            <h1 className="lead text-center fs-4 mb-5 text-white">Um projeto desenvolvido por alunos da <span style={{ color: '#9C7DFD' }}>UNB</span> com o intuito de ajudar os estudantes a descobrirem se foram aprovados pelo proceso seletivo <span style={{ color: '#00E6CF' }}>PAS</span>.</h1>
                        </div>
                    </div>
                    <div className="row mt-5 justify-content-center">
                            <h1 className="display-4 fw-bolder mb-4 text-center text-white mt-5">NÓS</h1>
                        <div className="col-md-4" style={{maxWidth:"250px"}}>
                            <div class="card p-1 border-0"style={{backgroundColor:'#00ADFC'}}>
                                <img src="src/assets/Asafe.jpg" class="card-img-top" alt="Asafe"/>
                                    <div class="card-body text-center">
                                        <h5 class="card-title mb-3 fs-4 fw-bold text-white">Asafe</h5>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-4" style={{maxWidth:"250px"}}>
                            <div class="card p-1 border-0"style={{backgroundColor:'#00E6CF'}}>
                                <img src="src/assets/Biel.jpg" class="card-img-top" alt="Biel"/>
                                    <div class="card-body text-center">
                                        <h5 class="card-title mb-3 fs-4 fw-bold text-white">Gabriel</h5>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-4" style={{maxWidth:"250px"}}>
                            <div class="card p-1 border-0"style={{backgroundColor:'#9C7DFD'}}>
                                <img src="src/assets/Joao.jpg" class="card-img-top" alt="Joao"/>
                                    <div class="card-body text-center">
                                        <h5 class="card-title mb-3 fs-4 fw-bold text-white">João Lucas</h5>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-4" style={{maxWidth:"250px"}}>
                            <div class="card p-1 border-0"style={{backgroundColor:'#00E6CF'}}>
                                <img src="src/assets/Hannan.jpg" class="card-img-top" alt="Hannan"/>
                                    <div class="card-body text-center">
                                        <h5 class="card-title mb-3 fs-4 fw-bold text-white">Hannan</h5>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-4" style={{maxWidth:"250px"}}>
                            <div class="card p-1 border-0"style={{backgroundColor:'#00ADFC'}}>
                                <img src="src/assets/Matheus.jpg" class="card-img-top" alt="Matheus"/>
                                    <div class="card-body text-center">
                                        <h5 class="card-title mb-3 fs-4 fw-bold text-white">Matheus</h5>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
}

export default About;