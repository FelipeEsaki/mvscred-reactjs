import Icons from "../icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ItensToChange from '../changeInfos';

export function VantagensComponent ({title, text, icon}) {
    return (
        <div class="fourth__section-content-itens">
            <FontAwesomeIcon className="i" icon={icon} />
            <div class="itens-content">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
    
}

export default

function FourthSection() {
    return (
        <section class="fourth__section">
            <h2>Nossas vantagens!</h2>
            <div class="fourth__section-content">

                <VantagensComponent 
            
                    title={'Melhores taxas do mercado'}
                    text={'Contamos com uma extensa rede de parceiros que desempenham um papel fundamental em possibilitar as ofertas mais competitivas do mercado.'}
                    icon={Icons.star}
                />

                <VantagensComponent 
             
                    title={'Equipe Especializada'}
                    text={'Equipe dedicada e altamente especializada para proporcionar as condições mais vantajosas.'}
                    icon={Icons.headset}
                />
                
                <VantagensComponent 
             
                    title={'As Melhores Parcerias'}
                    text={'Contamos com uma rede de mais de 20 instituições parceiras, cada uma oferecendo opções perfeitamente adequadas a diversos perfis.'}
                    icon={Icons.rocket}
                />

                <VantagensComponent 
                    title={'Atendimento Personalizado'}
                    text={'Converse conosco pelo WhatsApp e receba sua simulação no mesmo dia!'}
                    icon={Icons.phone}
                />

                <VantagensComponent 
             
                    title={'Mais de 20 Soluções Financeiras'}
                    text={'Oferecemos produtos e serviços de excelência, personalizados para atender às suas necessidades da melhor maneira possível.'}
                    icon={Icons.arrow}
                />

                <VantagensComponent 
             
                    title={'Profissionais Certificados'}
                    text={`A equipe da ${ItensToChange.brandname} é certificada pela Federação dos Bancos, garantindo um atendimento de excelência com total transparência e confiabilidade.`}
                    icon={Icons.adcard}
                />
            </div>

            
        </section>
    )
}
