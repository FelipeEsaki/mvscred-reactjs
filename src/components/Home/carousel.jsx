import { useState, useEffect, useCallback } from 'react';
import ItensToChange from '../changeInfos';

export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStartX, setTouchStartX] = useState(0);
    const swipeThreshold = 50;

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % 3);

    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + 3) % 3);
    }, []);

    useEffect(() => {
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const deltaX = touchEndX - touchStartX;

        if (deltaX > swipeThreshold) {
            prevSlide();
        } else if (deltaX < -swipeThreshold) {
            nextSlide();
        }
    };

    return (
        <div className="carousel-container">
            <div 
                className="carousel" 
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                <div className="carousel-slide">
                    <h2 id="h2-banner1">Todas as linhas de empréstimo</h2>
                    <p id="p-banner1">Temos a linha de crédito ideal para cada situação!</p>
                    <a href="simulacao.html">Saiba Mais</a>
                    <img src="assets/Banner 1.jpg" alt="Imagem 1"/>
                </div>
                <div className="carousel-slide">
                    <h2>Limpa Nome</h2>
                    <p>Nós da {ItensToChange.brandname} queremos te ajudar a solucionar o seu problema da melhor forma!</p>
                    <a href="simulacao.html">Saiba Mais</a>
                    <img src="assets/Banner 2.jpg" alt="Imagem 2"/>
                </div>
                <div className="carousel-slide">
                    <h2>Todas a linhas de Seguros!</h2>
                    <p>Aqui na {ItensToChange.brandname} você encontra o seguro ideal para você!</p>
                    <a href="simulacao.html">Saiba Mais</a>
                    <img src="assets/Banner 3.jpg" alt="Imagem 3"/>
                </div>
            </div>
        </div>
    );
}