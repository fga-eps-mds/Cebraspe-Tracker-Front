import React from 'react';

const Contact = () => {
    return (
        <div>
            <section id="contact">
                <div className="container my-5 py-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0 text-white">Entre em contato</h3>
                            <h1 className="display-6 text-center mb-4 text-white">Possui alguma <b style={{ color: '#9C7DFD' }}>Pergunta ?</b></h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src="src/assets/Contato.jpg" alt="contato" className="w-75" />
                        </div>
                        <div className="col-md-6">
                            <form action="">
                                <div class="mb-3 text-white">
                                    <label for="name" class="form-label">Nome</label>
                                    <input type="Text" class="form-control" id="name" placeholder='Maria Luiza'/>
                                </div>
                                <div class="mb-3 text-white">
                                    <label for="exampleInputEmail1" class="form-label">Endereço de Email</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder='nome@exemplo.com'/>
                                </div>
                                <div class="mb-3 text-white">
                                    <label for="exampleFormControlTextarea1" class="form-label">Sua mensagem</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder='Mensagem'/>
                                </div>
                                
                                <button type="submit" class="btn mt-4" style={{backgroundColor:'#9C7DFD',color:'white'}}>Enviar mensagem <i className='fa fa-paper-plane ms-2'></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;