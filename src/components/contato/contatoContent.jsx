import React from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icons from '../icons';

export default function ContatoContent() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const message = `*Novo Contato*\n\nNome: ${data.nome}\nE-mail: ${data.email}\nAssunto: ${data.assunto}\nMensagem: ${data.mensagem}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappLink = `https://wa.me/5547996076274?text=${encodedMessage}`;
        window.open(whatsappLink, '_blank');
    };

    return (
        <section className="section__contato">
            <div className="contato">
                <h1>Entre em contato conosco</h1>
                <p>Retornaremos assim que possível!</p>
                <div className="info">
                    <div className="informacoes telefone">
                    <FontAwesomeIcon className="i" icon={Icons.phone}/>
                        <div className="info-content">
                            <p>Telefone</p>
                            <span>(47) 99607-6274</span>
                        </div>
                    </div>
                    <div className="informacoes endereco">
                        <FontAwesomeIcon className="i" icon={Icons.location}/>
                        <div className="info-content">
                            <p>Endereço</p>
                            <span>Joinville - SC</span>
                        </div>
                    </div>
                    <div className="informacoes horario">
                    <FontAwesomeIcon className="i" icon={Icons.clock}/>
                        <div className="info-content">
                            <p>Horário de atendimento</p>
                            <span>Seg - Sex: 09:00 - 17:00</span>
                        </div>
                    </div>
                    <div className="informacoes email">
                    <FontAwesomeIcon className="i" icon={Icons.email}/>
                        <div className="info-content">
                            <p>Email</p>
                            <span>contato@mvscred.com.br</span>
                        </div>
                    </div> 
                </div>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <div className="itens">
                    <label htmlFor="nome">Nome</label>
                    <input 
                        {...register('nome', { 
                            required: 'Nome é obrigatório' 
                        })}
                        id="nome" 
                        type="text" 
                        placeholder="Digite seu nome"
                    />
                    {errors.nome && <p className="error-message">{errors.nome.message}</p>}
                </div>

                <div className="itens">
                    <label htmlFor="email">Email</label>
                    <input 
                        {...register('email', { 
                            required: 'Email é obrigatório',
                            pattern: { 
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Email inválido'
                            }
                        })}
                        id="email" 
                        type="email" 
                        placeholder="Digite seu melhor Email"
                    />
                    {errors.email && <p className="error-message">{errors.email.message}</p>}
                </div>

                <div className="itens">
                    <label htmlFor="assunto">Assunto</label>
                    <input 
                        {...register('assunto', { 
                            required: 'Assunto é obrigatório' 
                        })}
                        id="assunto" 
                        type="text" 
                        placeholder="Assunto"
                    />
                    {errors.assunto && <p className="error-message">{errors.assunto.message}</p>}
                </div>

                <div className="itens">
                    <label htmlFor="mensagem">Observações</label>
                    <textarea 
                        {...register('mensagem')}
                        id="mensagem" 
                        rows="5"
                        placeholder="Digite sua mensagem"
                    />
                </div>

                <button type="submit" className="btn-enviar">
                    Enviar para WhatsApp
                </button>
            </form>
        </section>
    );
}