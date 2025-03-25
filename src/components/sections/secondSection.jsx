import Icons from '../icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ItensToChange from '../changeInfos';

export default 

function SecondSection() {
    return (
        <section className="second__section">
            <img className="second__section-imagem" src="assets/second section imagem.png" alt="pessoas comemorando suas conquistas"/>

            <div className="second__section-conteudo">
                <h3>Todas as linhas de Crédito</h3>
                <h2>Aqui na {ItensToChange.brandname} você encontra a linha de empréstimo ideal para sua necessidade! </h2>
                <p>Nós da {ItensToChange.brandname} estamos aqui para te ajudar a realizar tudo aquilo que sempre sonhou! </p>
                <ul>
                    <li>
                        <FontAwesomeIcon className="i" icon={Icons.trophy} />
                        <p>Temos as melhores taxas do mercado!</p>
                    </li>
                    <li>
                        <FontAwesomeIcon className="i" icon={Icons.trophy} />
                        <p>Temos mais de 20 instituições financeiras parceiras!</p>
                    </li>
                    <li>
                        <FontAwesomeIcon className="i" icon={Icons.trophy} />
                        <p>Conte com nossa equipe especializada que irá te auxiliar em todo o processo!</p>
                    </li>
                </ul>

                <a href="simulacao.html">Saiba Mais</a>
            </div>
        </section>
    )
}
