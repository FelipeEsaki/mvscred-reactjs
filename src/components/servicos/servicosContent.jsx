import servicosItens from "./servicosItens"

const servicos = servicosItens.map((item, index) => {
    return (
        <div className="servico" key={index}>
            <img src={item.imagem} alt={item.servico}/>
            <h2>{item.servico}</h2>
            <p dangerouslySetInnerHTML={{__html: item.texto}}></p>
        </div>
    )
})
export default 

function ServicosContent() {
    return (
        <section id="main-servicos">  
            <h1>Nossas Soluções</h1>

            <div className="servicos">
                {servicos}
            </div>

            <section className="fifth__section">
                <div className="fifth__section-all">
                    <div className="fifth__section-all-content">
                        <h2>Precisa de nossos serviços?</h2>
                        <p>Entre em contato com a nossa equipe
                            especializada e faça uma simulação!</p>
                    </div>
                    <div className="fifth__section-all-link"><a href="simulacao.html">Simule agora</a></div>
                </div>
            </section>
        </section>
    )
}