import React from 'react';

const About = () => {
    return(
        <div>
            <section id="about">
                <div className="container">
                <div className='row justify-content-center'>
                        <div className='col-md-8 mt-5'>
                            <h1 className="display-4 fw-bolder mb-4 text-center text-white">O <span style={{color:'#9C7DFD'}}>CTRACKER</span> É</h1>
                            <p className="lead text-center fs-4 mb-5 text-white">Um projeto desenvolvido por alunos da <span style={{color:'#00ADFC'}}>UNB</span> com o intuito de ajudar os estudantes a descobrirem se foram aprovados pelo proceso seleetivo <span style={{color:'#00E6CF'}}>PAS</span>.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;