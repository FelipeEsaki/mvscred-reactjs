import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';
import ItensToChange from '../changeInfos';

function InfoItem({icon, content}) {
    return (
        <div className="informacoes telefone">
            <FontAwesomeIcon icon={icon} />
            <div className="info-content">
                <>{content}</>
            </div>
        </div>
    )
}

export default function Info() {
    return (
        <div className="info">
            <InfoItem 
                icon={faPhone}
                content={ItensToChange.number}
            />

            <InfoItem 
                icon={faLocationDot}
                content={ItensToChange.city}
            />

            <InfoItem
                icon={faClock}
                content={ItensToChange.hour}
            />
        </div>
    )
}
