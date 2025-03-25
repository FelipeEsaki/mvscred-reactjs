import { useState } from "react"
import Icons from "../icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default

function ThirdSection () {

    const [position, setPosition] = useState('20px');

    const handleRightClick = () => {
        setPosition('-65%');
    }

    const handleLeftClick = () => {
        setPosition('20px');
    };

    return (
        <section className="third__section" id="third">
            <div className="buttons">
                <button 
                className="button" 
                id="btnleft" 
                onClick={handleLeftClick}
                >
                    <FontAwesomeIcon className="i" icon={Icons.angleL} />
                </button>
                <button 
                className="button" 
                id="btnright"
                onClick={handleRightClick} 
                >
                    <FontAwesomeIcon className="i" icon={Icons.angleR} />
                </button>
            </div>

            <div className="third__section-container" id="third__section-container">

                <div 
                className="scroll-container" 
                id="scroll-container"
                style={{left: position}}
                >
                    <img src="assets/bancos/porto.png" alt=""/>
                    <img src="assets/bancos/bv.png" alt=""/>
                    <img src="assets/bancos/pan.png" alt=""/>
                    <img src="assets/bancos/bmg.png" alt=""/>
                    <img src="assets/bancos/safra.png" alt=""/>
                    <img src="assets/bancos/bevi.png" alt=""/>
                    <img src="assets/bancos/facta.png" alt=""/>
                    <img src="assets/bancos/c6.png" alt=""/>
                    <img src="assets/bancos/santander.png" alt=""/>
                    <img src="assets/bancos/bradesco.png" alt=""/>
                    <img src="assets/bancos/itau.png" alt=""/>
                    <img src="assets/bancos/banrisul.png" alt=""/>
                    <img src="assets/bancos/mercantil.png" alt=""/>
                </div>
            </div>
        </section>
    )
}