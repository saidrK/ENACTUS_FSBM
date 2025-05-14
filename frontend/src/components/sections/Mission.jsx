import { Container } from "../shared/Container";
// Import des images pour la section
import image1 from "../../assets/images/library/left.JPG";
import image2 from "../../assets/images/library/right.JPG";
import React, { useEffect, useRef } from "react";
import ScrollReveal from 'scrollreveal';

/**
 * Composant Mission - Affiche la section mission d'Enactus FSBM
 * Utilise ScrollReveal pour les animations d'apparition
 */
export default function Mission() {
    // Référence pour l'animation ScrollReveal
    const sectionRef = useRef(null);

    // Configuration et initialisation de ScrollReveal
    useEffect(() => {
        // Configuration de l'animation
        const sr = ScrollReveal({
            origin: 'bottom',     // Animation depuis le bas
            distance: '50px',     // Distance de déplacement
            duration: 1000,       // Durée de l'animation en ms
            delay: 200,           // Délai avant l'animation
            reset: true           // Réinitialisation à chaque passage
        });

        // Application de l'animation aux éléments enfants de la section
        if (sectionRef.current) {
            sr.reveal(sectionRef.current.children);
        }

        // Nettoyage de l'animation lors du démontage du composant
        return () => sr.destroy();
    }, []);

    return (
        <Container>
            <section ref={sectionRef} className="bg-white dark:bg-gray-900" id="mission">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    {/* Partie textuelle de la mission */}
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Notre Mission
                        </h2>
                        <p className="mb-4 text-2xl">
                            Enactus fsbm a pour mission de mobiliser les étudiants pour devenir des leaders engagés en 
                            réalisant des projets innovants qui offrent des solutions durables aux défis sociaux et
                            environnementaux.
                        </p>
                        <p className="enac-text dark:text-gray-300 text-xl">
                            Notre équipe engagée a su franchir des étapes clés et obtenir des distinctions majeures grâce à son travail collectif.
                        </p>
                    </div>

                    {/* Grille d'images */}
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img
                            className="w-full rounded-lg"
                            src={image1}
                            alt="Illustration des activités Enactus 1"
                        />
                        <img
                            className="mt-4 w-full lg:mt-10 rounded-lg"
                            src={image2}
                            alt="Illustration des activités Enactus 2"
                        />
                    </div>
                </div>
            </section>
        </Container>
    );
}