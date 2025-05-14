import React, { useState, useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import { Play, X } from 'lucide-react';
import videoThumbnail from '../../assets/video-teaser/Capture-decran-2025-05-09-015646.png';
// import videoSource from '../../assets/video-teaser/official-trailer.mp4';
// import videoSource from "https://drive.google.com/file/d/1FrK3QwbDIl1Fw-ji-R9nYT1oPb6KH3sh/view?usp=sharing";

// Composant IntroVideoSection : affiche une section avec une vidéo de présentation
const IntroVideoSection = () => {
    // État pour savoir si la vidéo est en cours de lecture
    const [playing, setPlaying] = useState(false);
    // Référence pour ScrollReveal
    const sectionRef = useRef(null);

    useEffect(() => {
        // Initialisation de ScrollReveal pour l'animation d'apparition
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '50px',
            duration: 1000,
            delay: 200,
            reset: true
        });

        // Application de l'animation aux enfants de la section
        if (sectionRef.current) {
            sr.reveal(sectionRef.current.children);
        }

        // Nettoyage lors du démontage du composant
        return () => sr.destroy();
    }, []);

    // Fonction pour lancer la lecture de la vidéo
    const handlePlay = (e) => {
        e.preventDefault();
        setPlaying(true);
    };

    // Fonction pour fermer la vidéo
    const handleClose = (e) => {
        e.preventDefault();
        setPlaying(false);
    };

    return (
        // Section principale avec animation et styles
        <section className="relative py-24 text-body-light-11 dark:text-body-dark-11 odd:bg-[#00005506] dark:odd:bg-[#adc5f30f] group" ref={sectionRef} id="video-teaser">
            <div className="container w-full mx-auto px-5" ref={sectionRef}>
                {/* En-tête de la section vidéo */}
                <div className="text-center max-w-[550px] mx-auto mb-12">
                    <h6 className="mb-2 block text-heading-2 text-5xl font-semibold text-primary">
                        Vidéo de Présentation
                    </h6>
                    <h2 className="mb-6 text-heading-1 text-4xl font-bold">Découvrez Notre Vidéo</h2>
                    <p className="text-heading-3 text-2xl">
                        Une présentation détaillée de notre mission et de nos services.
                    </p>
                </div>
                {/* Bloc vidéo ou miniature selon l'état */}
                <div className="relative max-w-[900px] mx-auto" ref={sectionRef}>
                    {/* Affichage de la miniature et du bouton play si la vidéo n'est pas lancée */}
                    {!playing ? (
                        <>
                            <img
                                src={videoThumbnail}
                                alt="Miniature de la vidéo"
                                className="w-full h-full aspect-video rounded-xl object-cover"
                            />
                            <button
                                onClick={handlePlay}
                                className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-primary text-white text-[1.875rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg hover:bg-[#F7941D] hover:text-white focus:bg-black focus:text-white transition-all duration-300  hover:shadow-2xl group cursor-pointer"
                            >
                                <Play size={32} className="ml-1 group-hover:scale-110 transition-transform duration-300" />
                            </button>
                        </>
                    ) : (
                        // Affichage de la vidéo avec bouton de fermeture si la vidéo est lancée
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
                            <video
                                src="https://drive.google.com/file/d/1FrK3QwbDIl1Fw-ji-R9nYT1oPb6KH3sh/view?usp=sharing"
                                className="w-full h-full"
                                controls
                                autoPlay
                                playsInline
                            />
                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-300 cursor-pointer"
                            >
                                <X size={20} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default IntroVideoSection;