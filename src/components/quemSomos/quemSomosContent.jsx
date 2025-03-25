import ItensToChange from "../changeInfos";

export default

function QuemSomosContent() {
    return (
        <>
            <section className="first__section-sobrenos">
                <img id="first__section-img" src={`assets/${ItensToChange.logoQuemSomos}`} alt={`Logo ${ItensToChange.brandname}`}/>
                <div className="first__section-content">
                    <h1>A {ItensToChange.brandname}</h1>
                    <p>é uma empresa familiar que une confiança, modernidade e empatia para oferecer soluções financeiras que ajudam nossos clientes a atingir seus objetivos. Buscamos criar conexões genuínas e impactar positivamente a vida das pessoas, sempre com criatividade e compromisso.
                    </p>
                </div>
            </section>

            <section className="second__section">
                <div className="second-content">
                    <span className="span">Nossa Missão</span>
                    <p>Estabelecer conexões de confiança e oferecer soluções financeiras acessíveis, criativas e modernas. Nosso compromisso é impactar positivamente a vida das pessoas, ajudando-as a atingir seus objetivos e construir um futuro financeiro sólido.
                    </p>
                </div>
                <div className="second-content">
                    <span className="span">Nossos Valores</span>
                    <p><strong>Confiança</strong>: Construir relacionamentos sólidos e transparentes com nossos clientes. 
                        <strong>Criatividade</strong>: Oferecer soluções modernas que despertem interesse e tragam inovação ao setor financeiro. 
                        <strong>Empatia</strong>: Entender as necessidades de nossos clientes e trabalhar para ajudá-los a realizar seus sonhos. 
                        <strong>Compromisso</strong>: Buscar sempre a excelência e o impacto positivo em cada interação.
                    </p>
                </div>
                <div className="second-content">
                    <span>Nossa Visão</span>
                    <p>Ser referência no mercado financeiro como uma empresa que une inovação, conexão humana e excelência no atendimento, destacando-se por sua autenticidade e proximidade com as famílias.</p>
                </div>
            </section>
        </>
    );
}
