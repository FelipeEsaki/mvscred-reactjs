import Icons from '../icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ItensToChange from '../changeInfos'
import { Link } from 'react-router-dom';

export default function Footer () {

    const year = new Date().getFullYear();

    return (
        <footer id="footer">
        <div className="footer__content">
            <div className="footer__logo">
                <div className="footer__logo__content">
                    <img src={`assets/${ItensToChange.logoFooter}`} alt={`Logo ${ItensToChange.brandname}`}/>
                </div>

                <h4>{ItensToChange.cnpj}</h4>
                <br/>
                
                <p>A {ItensToChange.brandname} é uma empresa que engloba uma ampla variedade de serviços financeiros, incluindo linhas de crédito, financiamentos, consórcios e seguros.</p>

                <br/><br/>

                <div className="icons">
                    <a target="_blank" href={ItensToChange.instagram}>
                    <FontAwesomeIcon className="i" icon={Icons.instagram} />
                    </a>
                    <a target="_blank" href={ItensToChange.instagram}>Instagram</a>

                    <a target="_blank" href={ItensToChange.facebook}>
                    <FontAwesomeIcon className="i" icon={Icons.facebook} />
                    </a> 
                    <a target="_blank" href={ItensToChange.facebook}>Facebook</a>
                </div>
            </div>
            <div className="footer__menu footer__itens">
                <span>Menu</span>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/quemSomos">Quem somos</Link></li>
                    <li><Link to="/quemSomos">Serviços</Link></li>
                    <li><Link to="/quemSomos">Simulação</Link></li>
                    <li><Link to="/quemSomos">Contato</Link></li>
                </ul>
            </div>
            <div className="footer__servicos footer__itens">
                <span>Serviços</span>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/quemSomos">Crédito Consignado</Link></li>
                    <li><Link to="/quemSomos">Capital de Giro</Link></li>
                    <li><Link to="/quemSomos">Financiamentos</Link></li>
                    <li><Link to="/quemSomos">Consórcios</Link></li>
                    <li><Link to="/quemSomos">Crédito Pessoal</Link></li>
                </ul>
            </div>
            <div className="footer__contato footer__itens">
                <span>Contato</span>
                <ul>
                    <li>
                    <FontAwesomeIcon className="i" icon={Icons.phone} />
                        <div>
                            <p>Telefone</p>
                            <span>{ItensToChange.number}</span>
                        </div>
                    </li>
                    <li>
                    <FontAwesomeIcon className="i" icon={Icons.location} />
                        <div>
                            <p>Endereço</p>
                            <span>{ItensToChange.city}</span>
                        </div>
                    </li>
                    <li>
                    <FontAwesomeIcon className="i" icon={Icons.clock}/>
                        <div>
                            <p>Horário de atendimento</p>
                            <span>{ItensToChange.hour}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <span className="copy"> &copy; Copyright {year} Direitos Reservados. Proibido cópia total ou parcial do nosso
            conteúdo.
            Desenvolvido por Esaki Desenvolvimentos.</span>
    </footer>
    )
}

