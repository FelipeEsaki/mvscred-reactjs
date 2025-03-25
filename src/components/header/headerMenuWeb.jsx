import ItensToChange from '../changeInfos'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Icons from '../icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default 

function HeaderMenuWeb() {

    const [menuTop, setMenuTop] = useState("-700%")

    const toggleMenu = () => {
               setMenuTop(menuTop === "-700%" ? "0" : "-700%")
    }
         
    return (
        <>
            <div className="header__all-first">
                <div className="menu">
                    <img className="banner" id="logo" src={`assets/${ItensToChange.logoHeader}`} alt={`Logo ${ItensToChange.brandname}`}/>
                    <img id="logomb" src={`assets/${ItensToChange.logoMobile}`} alt={`Logo ${ItensToChange.brandname}`}/>
                    <FontAwesomeIcon
                    onClick={toggleMenu}
                    className="i" 
                    icon={Icons.bars} 
                    id="menu-icon"/>
                </div>
                <nav className="header__all-second" >
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/quemSomos">Quem somos</Link></li>
                        <li><Link to="/servicos">Serviços</Link></li>
                        <li><Link to="/simulacao">Simulação</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                    </ul>
                </nav>
            </div>
            <nav className="menu__bar" id="menu__bar"  style={{top: menuTop}} >
                    <ul className="menu__bar-content">
                    <FontAwesomeIcon className="i" icon={Icons.x} onClick={toggleMenu}   id="close-btn" />
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/quemSomos">Quem somos</Link></li>
                    <li><Link to="/servicos">Serviços</Link></li>
                    <li><Link to="/simulacao">Simulação</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                </ul>
            </nav>
        </>
    )
}