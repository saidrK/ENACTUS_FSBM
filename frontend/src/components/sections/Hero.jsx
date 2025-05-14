import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph"
import image from "../../assets/images/library/Compétition/Compétition-Demi-Final(1).JPG"
import BlockQuote from "../shared/BlockQuote";
import { Link as ScrollLink } from "react-scroll";

/**
 * Composant Hero - Section principale de la page d'accueil
 * Affiche le titre, la description, les boutons d'action et l'image principale
 */
export default function Hero ()  {
    // const scrollToVideo = () => {
    //     const videoSection = document.getElementById("video-teaser");
    //     if (videoSection) {
    //         videoSection.scrollIntoView({ behavior: "smooth" });
    //     }
    // };

    return (
        <section className="relative pt-32 lg:pt-36" id="hero">
            <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12">
                {/* Effets de fond décoratifs */}
                <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
                    <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 
                            skew-x-12 rounded-3xl bg-[#F7941D] 
                            blur-xl opacity-60 lg:opacity-95 lg:block hidden">
                    </span>
                    <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-[#F7941D] blur-xl opacity-80"></span>
                </div>

                {/* Contenu principal : Titre, description et boutons */}
                <div className="relative flex flex-col item-center text-center lg:text-left lg:py-8 lg:items-start lg:max-w-none max-w-3xl
                                mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
                >
                    {/* Titre principal avec accent sur "Enactus" */}
                    <h1 className="text-heading-1 font-archivo-bold  text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold"> 
                        WELCOME TO {" "} <span className="text-transparent bg-clip-text bg-[#F7941D] ml-2">ENACTUS{" "}</span> FSBM
                    </h1>

                    {/* Description de Enactus */}
                    <Paragraph className="mt-8">
                        Enactus est un réseau mondial qui inspire les jeunes à utiliser l'entrepreneuriat pour résoudre les défis sociaux et économiques. 
                        Enactus Maroc, fondé en 2003, fait partie de ce réseau et offre aux étudiants l'opportunité de concrétiser des projets innovants 
                        ayant un impact direct sur leur communauté.
                    </Paragraph>

                    {/* Section des boutons d'action */}
                    <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
                        {/* Bouton Contact avec défilement vers la section contact */}
                        <ScrollLink 
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={-100}
                        >
                            <Button 
                                className="group relative overflow-hidden bg-btn text-white px-8 py-4 rounded-full 
                                        hover:bg-transparent hover:text-[#F7941D] transition-all duration-300
                                        border-2 border-[#F7941D]"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="group-hover:rotate-12 transition-transform duration-300"
                                    >
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                    </svg>
                                    Contact Us
                                </span>
                            </Button>
                        </ScrollLink>

                        {/* Bouton Watch Teaser avec défilement vers la section vidéo */}
                        <ScrollLink
                            to="video-teaser"
                            smooth={true}
                            duration={500}
                            offset={-100}
                        >
                            <button
                                className="group relative overflow-hidden bg-transparent text-[#F7941D] px-8 py-4 rounded-full cursor-pointer
                                        border-2 border-[#F7941D] hover:bg-[#F7941D] hover:text-white transition-all duration-300"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="group-hover:scale-110 transition-transform duration-300"
                                    >
                                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                    </svg>
                                    Watch Teaser
                                </span>
                            </button>
                        </ScrollLink>
                    </div>
                </div>

                {/* Image principale */}
                <div className="flex flex-1 lg-:w-1/2 lgh-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
                    <img 
                        src={image} 
                        alt="Hero image"
                        width={2350}
                        height={2359}
                        className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96"
                    />
                </div>
            </Container>
            <BlockQuote />
        </section>
    );
};