import { Container } from "../shared/Container";
import image from "../../assets/images/library/Compétition/Comp-D.Final-Prix-Got-Impact.JPG";
import demiFinale from "../../assets/images/library/Compétition/Compétition-Demi-Final.JPG";
import phaseLignes from "../../assets/images/library/Compétition/Compétition-Phase-des-Ligues.JPG";
import imageJournee8mars from "../../assets/images/library/8-Mars.JPG";
import imageHackaThon from "../../assets/images/library/Hackathon.JPG";
import imageStar from "../../assets/logos/logo-enactus/logooo.png";
import { useState, useCallback, useEffect, useRef } from "react";
import ScrollReveal from 'scrollreveal';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link as ScrollLink } from "react-scroll";

export default function Events() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '50px',
            duration: 1000,
            delay: 200,
            reset: true
        });

        if (sectionRef.current) {
            sr.reveal(sectionRef.current.children);
        }

        return () => sr.destroy();
    }, []);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const slides = [
        {
            title: "Demi Finale",
            subtitle: "La fin d'une aventure, mais le début d'une autre. Nous aurions pu atteindre des sommets, mais les choses ne se passent pas toujours comme on l'aurait souhaité. L'histoire est en marche et nous sommes fiers d'être parmi les 12 meilleures équipes du Maroc, une première historique pour Enactus FSBM. The journey is ongoing. E la storia continua.",
            image: demiFinale
        },
        {
            title: "Phase des lignes",
            subtitle: "From mobile apps to gaming consolesLe 29 juin 2024, en compétition à UIT Kenitra, Enactus FSBM a pris sa place méritée en tête, prouvant que la foi dépasse les statistiques. Malgré des chances qui semblaient minimes, c'est la confiance et l'esprit d'équipe qui ont dominé. Avec la certitude de se qualifier pour le prochain tour, chaque membre de l'équipe a fait preuve de détermination. Parce qu'en famille et entre coéquipiers, la force est décuplée, et ensemble, ils avancent vers de nouveaux défis avec la conviction que le meilleur est à venir.",
            image: phaseLignes
        }
    ];

    const nextSlide = useCallback(() => {
        setCurrentSlide(prevSlide => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, [slides.length]);
    
    const prevSlide = () => {
        setCurrentSlide(prevSlide => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };
    
    const goToSlide = (index) => {
        setCurrentSlide(index);
    };
    
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };
    
    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };
    
    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 75) {
            nextSlide();
        } else if (touchEnd - touchStart > 75) {
            prevSlide();
        }
    };

    return (
        <section className="py-1 w-full flex flex-col gap-y-10" id="events" ref={sectionRef}>
            <h1 className="text-6xl font-bold text-heading-2 text-center">Nos évènements</h1>
            {/* <!-- Hero --> */}
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                {/* <!-- Grid --> */}
                <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
                    <div className="order-2 md:order-1">
                        <h1 className="block text-2xl sm:text-3xl font-bold text-gray-800 lg:text-6xl lg:leading-tight dark:text-white">Journée d'intégration <br /> <span className="text-3xl sm:text-4xl">Lancement  <span className="enac-bg-2">2024/2025</span></span></h1>
                        <p className="mt-3 text-base sm:text-lg text-gray-800 dark:text-neutral-400">
                            La journée de lancement et d'intégration a permis de présenter le club Enactus FSBM tout en facilitant l'intégration des nouveaux membres
                            à travers des jeux et des activités de cohésion. Un moment de partage et de convivialité, marquant le début d'une aventure collective.
                        </p>

                        {/* <!-- Buttons --> */}
                        <div className="mt-5 sm:mt-7 grid gap-3 w-full sm:inline-flex">
                            <a className="py-2.5 sm:py-3 px-3 sm:px-4 inline-flex justify-center items-center gap-x-1.5 sm:gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                                Rejoignez-nous
                                <svg className="shrink-0 size-3.5 sm:size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </a>
                            <ScrollLink 
                            className="cursor-pointer py-2.5 sm:py-3 px-3 sm:px-4 inline-flex justify-center items-center gap-x-1.5 sm:gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" 
                            
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={-100}
                            >
                                Contacter notre team
                            </ScrollLink>
                        </div>
                        {/* <!-- End Buttons --> */}

                        {/* <!-- Review --> */}
                        <div className="mt-5 sm:mt-6 lg:mt-10 grid grid-cols-2 gap-x-5">
                            {/* <!-- Review --> */}
                            <div className="py-3 sm:py-5">
                                <div className="flex gap-x-1">
                                    <svg className="size-3.5 sm:size-4 text-gray-800 dark:text-neutral-200" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor" />
                                    </svg>
                                    <svg className="size-3.5 sm:size-4 text-gray-800 dark:text-neutral-200" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor" />
                                    </svg>
                                    <svg className="size-3.5 sm:size-4 text-gray-800 dark:text-neutral-200" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor" />
                                    </svg>
                                    <svg className="size-3.5 sm:size-4 text-gray-800 dark:text-neutral-200" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor" />
                                    </svg>
                                    <svg className="size-3.5 sm:size-4 text-gray-800 dark:text-neutral-200" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor" />
                                    </svg>
                                </div>

                                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-800 dark:text-neutral-200">
                                    <span className="font-bold">87</span> Membres en 2024/2025
                                </p>

                                <div className="mt-0 sm:mt-5">
                                    {/* <!-- Star --> */}
                                    <img className="w-38" src={imageStar} alt="Star" />
                                    {/* <!-- End Star --> */}
                                </div>
                            </div>
                            {/* <!-- End Review --> */}
                        </div>
                        {/* <!-- End Review --> */}
                    </div>
                    {/* <!-- End Col --> */}

                    <div className="relative ms-4 order-1 md:order-2 mb-6 md:mb-0">
                        <img className="w-full rounded-lg sm:rounded-md lg:h-full object-cover h-[250px] sm:h-[300px] md:h-auto" src={image} alt="Hero Image" />
                        <div className="absolute inset-0 -z-1 bg-linear-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-lg sm:rounded-md mt-3 -mb-3 me-3 -ms-3 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>

                        {/* <!-- SVG--> */}
                        <div className="absolute bottom-0 start-0">
                            <svg className="w-2/3 ms-auto h-auto text-white dark:text-neutral-900" width="630" height="451" viewBox="0 0 630 451" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="531" y="352" width="99" height="99" fill="currentColor" />
                                <rect x="140" y="352" width="106" height="99" fill="currentColor" />
                                <rect x="482" y="402" width="64" height="49" fill="currentColor" />
                                <rect x="433" y="402" width="63" height="49" fill="currentColor" />
                                <rect x="384" y="352" width="49" height="50" fill="currentColor" />
                                <rect x="531" y="328" width="50" height="50" fill="currentColor" />
                                <rect x="99" y="303" width="49" height="58" fill="currentColor" />
                                <rect x="99" y="352" width="49" height="50" fill="currentColor" />
                                <rect x="99" y="392" width="49" height="59" fill="currentColor" />
                                <rect x="44" y="402" width="66" height="49" fill="currentColor" />
                                <rect x="234" y="402" width="62" height="49" fill="currentColor" />
                                <rect x="334" y="303" width="50" height="49" fill="currentColor" />
                                <rect x="581" width="49" height="49" fill="currentColor" />
                                <rect x="581" width="49" height="64" fill="currentColor" />
                                <rect x="482" y="123" width="49" height="49" fill="currentColor" />
                                <rect x="507" y="124" width="49" height="24" fill="currentColor" />
                                <rect x="531" y="49" width="99" height="99" fill="currentColor" />
                            </svg>
                        </div>
                        {/* <!-- End SVG--> */}
                    </div>
                    {/* <!-- End Col --> */}
                </div>
                {/* <!-- End Grid --> */}
            </div>
            {/* <!-- End Hero --> */}

            {/* Competition section */}
            <Container className="mt-15">
                <h2 className="max-w-lg mb-6 font-sans text-3xl text-center font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto lg:text-6xl text-heading-2">
                    <span className="relative inline-block">
                        <span className="relative z-[999]">Compétition</span>
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 right-0 z-0 hidden w-32 -mt-8 -mr-20 text-blue-gray-100 lg:w-32 lg:-mr-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="d5589eeb-3fca-4f01-ac3e-983224745704"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#d5589eeb-3fca-4f01-ac3e-983224745704)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute bottom-0 left-0 z-0 hidden w-32 -mb-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mb-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="d5589eeb-3fca-4f01-ac3e-983224745704"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#d5589eeb-3fca-4f01-ac3e-983224745704)"
                                width="52"
                                height="24"
                            />
                        </svg>
                    </span>
                </h2>
                <div>
                    {/* <!-- Slider --> */}
                    <div className="px-2 sm:px-6 lg:px-8 py-6 sm:py-10">
                        {/* Mobile Slider View */}
                        <div className="block sm:hidden relative">
                            <div 
                                className="relative overflow-hidden w-full h-[400px] bg-gray-100 rounded-xl dark:bg-neutral-800"
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}
                            >
                                <div className="flex transition-transform duration-500 ease-in-out h-full"
                                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                                    {slides.map((slide, index) => (
                                        <div key={index} className="min-w-full h-full flex-shrink-0">
                                            <div className="h-full flex flex-col bg-cover bg-center bg-no-repeat relative"
                                                style={{ backgroundImage: `url(${slide.image})` }}>
                                                <div className="absolute inset-0 bg-black/50"></div>
                                                <div className="absolute bottom-0 w-full p-4">
                                                    <span className="block text-white font-bold text-2xl mb-2">{slide.title}</span>
                                                    <span className="block text-white/90 text-sm leading-relaxed line-clamp-4">{slide.subtitle}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                                {/* Mobile Indicators */}
                                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
                                    {slides.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToSlide(index)}
                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                                currentSlide === index 
                                                    ? 'bg-white scale-110' 
                                                    : 'bg-white/50'
                                            }`}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                            
                            {/* Mobile Navigation Buttons */}
                            <button 
                                type="button" 
                                onClick={prevSlide}
                                className="absolute top-1/2 -translate-y-1/2 left-2 inline-flex justify-center items-center w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full text-white"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            
                            <button 
                                type="button" 
                                onClick={nextSlide}
                                className="absolute top-1/2 -translate-y-1/2 right-2 inline-flex justify-center items-center w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full text-white"
                                aria-label="Next slide"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>

                        {/* Desktop Slider View */}
                        <div className="hidden sm:block relative">
                            <div 
                                className="relative overflow-hidden w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] xl:h-[calc(100vh-106px)] bg-gray-100 rounded-xl sm:rounded-2xl dark:bg-neutral-800"
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}
                            >
                                <div className="flex transition-transform duration-500 ease-in-out h-full"
                                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                                    {slides.map((slide, index) => (
                                        <div key={index} className="min-w-full h-full flex-shrink-0">
                                            <div className="h-full flex flex-col bg-cover bg-center bg-no-repeat relative"
                                                style={{ backgroundImage: `url(${slide.image})` }}>
                                                <div className="absolute inset-0 bg-black/50"></div>
                                                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
                                                    <div className="max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%]">
                                                        <span className="block text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-1 sm:mb-2 md:mb-3">{slide.title}</span>
                                                        <span className="block text-white/90 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-1 leading-relaxed line-clamp-3 sm:line-clamp-4 md:line-clamp-5 lg:line-clamp-none">{slide.subtitle}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Desktop Arrows */}
                            <button 
                                type="button" 
                                onClick={prevSlide}
                                className="absolute cursor-pointer inset-y-0 start-0 inline-flex justify-center items-center w-10 sm:w-12 md:w-14 lg:w-16 xl:w-20 h-full text-white hover:bg-black/20 rounded-l-xl sm:rounded-s-2xl focus:outline-none"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="size-4 sm:size-5 md:size-6 lg:size-7 xl:size-8" />
                            </button>

                            <button 
                                type="button" 
                                onClick={nextSlide}
                                className="absolute cursor-pointer inset-y-0 end-0 inline-flex justify-center items-center w-10 sm:w-12 md:w-14 lg:w-16 xl:w-20 h-full text-white hover:bg-black/20 rounded-r-xl sm:rounded-e-2xl focus:outline-none"
                                aria-label="Next slide"
                            >
                                <ChevronRight className="size-4 sm:size-5 md:size-6 lg:size-7 xl:size-8" />
                            </button>

                            {/* Desktop Indicators */}
                            <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 lg:bottom-6 xl:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2 md:space-x-2.5 lg:space-x-3 xl:space-x-4">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`w-2 sm:w-2.5 md:w-3 lg:w-3.5 xl:w-4 h-2 sm:h-2.5 md:h-3 lg:h-3.5 xl:h-4 rounded-full transition-all duration-300 cursor-pointer ${
                                            currentSlide === index 
                                                ? 'bg-white scale-110 sm:scale-125' 
                                                : 'bg-white/50 hover:bg-white/75'
                                        }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Slider --> */}
                </div>
            </Container>
            <Container>
                    {/* Card Blog */}
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    {/* Grid */}
                    <div className="grid lg:grid-cols-2 gap-6">
                        {/* Card */}
                        <div className="group relative block rounded-xl focus:outline-hidden">
                            <div className="shrink-0 relative rounded-xl overflow-hidden w-full h-87.5 before:absolute before:inset-x-0 before:z-1 before:size-full before:bg-linear-to-t before:from-gray-900/70">
                                <img className="size-full absolute top-0 start-0 object-cover" src={imageJournee8mars} alt="Blog Image 8 mars" />
                            </div>

                            <div className="absolute top-0 inset-x-0 z-10">
                                <div className="p-4 flex flex-col h-full sm:p-6">
                                    {/* Avatar */}
                                    <div className="flex items-center">
                                        
                                        <div className="ms-2.5 sm:ms-4">
                                            <h4 className="font-semibold text-white">
                                                Journée 8 mars
                                            </h4>
                                            <p className="text-xs text-white/80">
                                                9 mars 2024
                                            </p>
                                        </div>
                                    </div>
                                    {/* End Avatar */}
                                </div>
                            </div>

                            <div className="absolute bottom-0 inset-x-0 z-10">
                                <div className="flex flex-col h-full p-4 sm:p-6">
                                    {/* <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80 group-focus:text-white/80">
                                        Facebook is creating a news section in Watch to feature breaking news
                                    </h3> */}
                                    <p className="mt-2 text-white/80">
                                        L'événement "L'innovation au féminin : Explorer la science et l'entrepreneuriat" a mis en lumière le rôle des femmes dans ces deux domaines. Au programme : des panels sur les femmes leaders en sciences et l'entrepreneuriat, suivis d'un atelier sur le Brand Building. Des experts tels qu'Abdellah Zerhouni, Sanaâ Benahmed et Malika Izid ont partagé leurs expériences inspirantes, clôturant ainsi une journée riche en échanges et apprentissages.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* End Card */}

                        {/* Card */}
                        <div className="group relative block rounded-xl focus:outline-hidden">
                            <div className="shrink-0 relative rounded-xl overflow-hidden w-full h-87.5 before:absolute before:inset-x-0 before:z-1 before:size-full before:bg-linear-to-t before:from-gray-900/70">
                                <img className="size-full absolute top-0 start-0 object-cover" src={imageHackaThon} alt="Blog Image Hackathon" />
                            </div>

                            <div className="absolute top-0 inset-x-0 z-10">
                                <div className="p-4 flex flex-col h-full sm:p-6">
                                    {/* Avatar */}
                                    <div className="flex items-center">
                                        {/* <div className="shrink-0">
                                            <img className="size-11 border-2 border-white rounded-full" src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                                        </div> */}
                                        <div className="ms-2.5 sm:ms-4">
                                            <h4 className="font-semibold text-white">
                                                Hackathon
                                            </h4>
                                            <p className="text-xs text-white/80">
                                                15-17 décembre 2024
                                            </p>
                                        </div>
                                    </div>
                                    {/* End Avatar */}
                                </div>
                            </div>

                            <div className="absolute bottom-0 inset-x-0 z-10">
                                <div className="flex flex-col h-full p-4 sm:p-6">
                                    <p className="mt-2 text-white/80">
                                        Du 15 au 17 décembre 2023, notre équipe a participé au Méga Hackathon Panafricain, où nous avons eu l'opportunité de développer des idées de projets innovants en un temps limité, démontrant notre créativité et notre capacité à relever des défis dans un cadre compétitif.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* End Card */}
                    </div>
                    {/* End Grid */}
                </div>
                {/* End Card Blog */}
            </Container>

        </section>
    );
}
