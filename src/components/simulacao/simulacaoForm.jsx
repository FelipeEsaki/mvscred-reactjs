import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const message = `*Formulário Enviado*\n\nNome: ${data.name}\nE-mail: ${data.email}\nTelefone: ${data.number}\nServiço: ${label}\nValor: ${valorMask}`;
    
    const encodedMessage = encodeURIComponent(message);

    const whatsappLink = `https://wa.me/?text=${encodedMessage}`;

    window.open(whatsappLink, '_blank');
  };

  // Menu
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuOpen = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  }

  const [label, setLabel] = React.useState('Selecionar');

  const servico = (e) => {
    e.preventDefault();
    setLabel(e.target.textContent);
    setIsMenuOpen(false)
  }

  // Valor
  const [valorMask, setValorMask] = React.useState('R$ ');

  const formatarValor = (valor) => {
    valor = valor.replace(/\D/g, ''); 
    valor = (Number(valor) / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
    return valor;
  };

  // Form
  return (
    <div className='main__simulacao'>
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className='itens'>
        <label>Nome:</label>
        <input {...register('name', { 
            required: 'Nome é obrigatório' })} id="nome" />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div className='itens'>
        <label>E-mail:</label>
        <input {...register('email', { 
            required: 'E-mail é obrigatório', 
            pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
            message: 'E-mail inválido' } })} className="border p-2 w-full" id="email"/>
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div className='itens'>
        <label>Telefone:</label>
        <input {...register('number', { 
            required: 'Telefone é obrigatório', 
            minLength: { value: 11, message: 'Mínimo 11 caracteres' } })} id='telefone'/>
        {errors.number && <p>{errors.number.message}</p>}
      </div>

        <div className="itens">
            <label htmlFor="servico">Selecione o serviço</label>
            <button onClick={menuOpen} id="btn-selecionar">{label}</button>
        </div>

        <div className="servicos" id="servicos"
        style={{display: isMenuOpen ? 'flex' : 'none'}}>
                <button className="botao-servicos" value="consignado"
                onClick={servico}>Crédito Consignado</button>
                <button className="botao-servicos" value="consignado"
                onClick={servico}>Saque FGTS</button>
                <button className="botao-servicos" value="pessoal"
                onClick={servico}>Crédito Pessoal</button>
                <button className="botao-servicos" value="rural"
                onClick={servico}>Crédito Rural</button>
                <button className="botao-servicos" value="limpaNome"
                onClick={servico}>Limpa nome</button>
                <button className="botao-servicos" value="seguro"
                onClick={servico}>Seguros</button>
                <button className="botao-servicos" value="consorcio"
                onClick={servico}>Consórcios</button>
                <button className="botao-servicos" value="solar"
                onClick={servico}>Energia solar</button>
                <button className="botao-servicos" value="giro"
                onClick={servico}>Capital de giro</button>
                <button className="botao-servicos" value="veiculo"
                onClick={servico}>Financiamento veicular</button>
                <button className="botao-servicos" value="reveicular"
                onClick={servico}>Refinanciamento veicular</button>
                <button className="botao-servicos" value="residencia"
                onClick={servico}>Financiamento residencial</button>
                <button className="botao-servicos" value="reresidencia"
                onClick={servico}>Refinanciamento residencial</button>
                <button className="botao-servicos" value="reresidencia"
                onClick={servico}>Tele medicina</button>
                <button className="botao-servicos" value="reresidencia"
                onClick={servico}>Carta fiança</button>
                <button className="botao-servicos" value="reresidencia"
                onClick={servico}>Consultoria tributária</button>
            </div>

            <div className="itens">
                <label htmlFor="valor">Digite o valor que precisa</label>
                <input 
                {...register('valor', { required: 'Valor é obrigatório' })}
                type="text"
                id="valor"
                value={valorMask}
                onChange={(e) => {
                    setValorMask(formatarValor(e.target.value));
                }}
                />
            </div>

      <button className='button' type="submit" id="enviar">
        Enviar para WhatsApp
      </button>
    </form>
    </div>
  );
}
