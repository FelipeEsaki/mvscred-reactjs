import Info from './headerInfoBar.jsx'
import HeaderMenu from './headerMenu.jsx'
import ItensToChange from '../changeInfos'

export default function Header() {
    return (
        <header className="header header__home">

        <Info 
        number={ItensToChange.number}
        city={ItensToChange.city}
        hour={ItensToChange.hour}
        />

        <HeaderMenu />
    </header>
    )
    
}

