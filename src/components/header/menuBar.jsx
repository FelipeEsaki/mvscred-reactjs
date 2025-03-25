import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Icons from '../icons'

export default

function MenuBar() {
    return (
        <div className="menu__bar" id="menu__bar" >
            <ul className="menu__bar-content">
            <FontAwesomeIcon className="i" icon={Icons.x} id="close-btn" />
                <li><a href="index.html">Home</a></li>
                <li><a href="sobreNos.html">Quem somos</a></li>
                <li><a href="servicos.html">Serviços</a></li>
                <li><a href="simulacao.html">Simulação</a></li>
                <li><a href="contato.html">Contato</a></li>
            </ul>
        </div>
    )
}
