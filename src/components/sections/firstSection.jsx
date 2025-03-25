import Icons from "../icons"
import ItensToChange from "../changeInfos";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export default

function firstSection() {
    function Blocks({servico, icon, itens, text, id}) {

        const [topPosition, setTopPosition] = useState ('-50%');

        const mouseOver = () => {
            setTopPosition('50%');
        }

        const mouseLeave = () => {
            setTopPosition('-50%');
        }

        return (
            <div 
            className="content" 
            id={`contet${id}`} 
            onMouseOver={mouseOver}
            onMouseOut={mouseLeave}
            onClick={mouseOver}
            >
                <div 
                id="produto1" 
                className="produto"
                style={{top: topPosition}}
                >
                    <h3>Linhas de {servico}:</h3>
                    <ul>
                        {itens.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <a className="produto-btn" href="simulacao.html">Saber mais</a>
                    <FontAwesomeIcon className="i" icon={icon} />
                    <span>{servico}</span>
                    <p>{text}</p>
                </div>
            </div>
        )
    }

    return(
        <section className="first__section">
            <h3>Nossos serviços</h3>
            <h2>Temos a solução ideal pra você!</h2>

            <div className="first__section-container">
                <Blocks 
                    id={'1'}
                    servico='Consórcio'
                    icon={Icons.money}
                    itens={[
                        'Veicular',
                        'Imobiliário',
                        'Cirurgias',
                        'Serviços',
                        'Festas'
                    ]}
                    text={'Aqui você encontra todos os tipos de consórcios com as melhores taxas e lances!'}
                />

                <Blocks 
                    id={'2'}
                    servico='Seguros'
                    icon={Icons.house}
                    itens={[
                        'Veicular',
                        'Imobiliário',
                        'Pessoal',
                        'Vida',
                        'Patrimônio'
                    ]}
                    text={`A ${ItensToChange.brandname} oferece todos os tipos de seguros com as melhores taxas e as melhores seguradoras!`}
                />

                <Blocks 
                    id={'3'}
                    servico='Créditos'
                    icon={Icons.dollar}
                    itens={[
                        'Pessoal',
                        'Consignado',
                        'Empresarial',
                        'FGTS',
                        'INSS'
                    ]}
                    text={'Aqui você encontra todos os tipos de consórcios com as melhores taxas e lances!'}
                />

                
            </div>
        </section>
    )
}