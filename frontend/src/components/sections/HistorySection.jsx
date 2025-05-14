import { Container } from "../shared/Container";
import React, { useEffect, useRef } from "react";
import ScrollReveal from 'scrollreveal';

/**
 * Composant HistorySection - Affiche la section histoire d'Enactus FSBM
 * Présente l'historique, la mission et les valeurs de l'organisation
 * Utilise ScrollReveal pour les animations d'apparition
 */
const HistorySection = () => {
    // Référence pour l'animation ScrollReveal
    const sectionRef = useRef(null);

    // Configuration et initialisation de ScrollReveal
    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'bottom',     // Animation depuis le bas
            distance: '50px',     // Distance de déplacement
            duration: 1000,       // Durée de l'animation
            delay: 200,          // Délai avant l'animation
            reset: true          // Réinitialisation à chaque passage
        });

        // Application de l'animation aux éléments enfants
        if (sectionRef.current) {
            sr.reveal(sectionRef.current.children);
        }

        // Nettoyage de l'animation lors du démontage
        return () => sr.destroy();
    }, []);

    return (
        <Container>
            <section ref={sectionRef} id="history" className="py-16 bg-white dark:bg-gray-900">
                {/* Titre de la section */}
                <h1 className="text-center text-5xl font-bold text-heading-1 mb-10 font-archivo">
                    Notre Histoire
                </h1>

                <div className="container mx-auto px-4 max-w-5xl">
                    {/* Introduction et contexte historique */}
                    <p className="mb-1 text-gray-600 dark:text-gray-300 leading-relaxed text-xl font-lato">
                        Enactus FSBM, fondée en mars 2014 par Abderazak Bouhram, est l'héritière d'initiatives
                        lancées en 2009 sous l'appellation SIFE. Depuis sa création, l'équipe développe des projets à impact social
                        et économique, mobilisant chaque année 50 à 100 membres. Enactus FSBM a récemment été classée
                        parmi le top 12 du Maroc et a été demi-finaliste lors des compétitions 2023-2024.
                    </p>

                    {/* Grille à deux colonnes pour le contenu principal */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-1">
                        {/* Description des activités */}
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-xl font-lato">
                            Depuis plus d'une décennie, notre équipe travaille de manière collaborative sur des projets
                            entrepreneuriaux et innovants, en s'appuyant sur les valeurs d'engagement, de leadership et d'impact.
                        </p>

                        {/* Citation inspirante */}
                        <blockquote className="border-l-4 border-blue-600 pl-4 italic text-md font-semibold text-gray-800 dark:text-white">
                            "<span className="enac-text font-anton tracking-widest">FROM FRACTURES TO MASTERPIECES</span> — cette devise résume notre parcours. À partir de situations complexes,
                            nous avons su bâtir des solutions concrètes, utiles et pérennes. Chaque projet est une reconstruction,
                            une transformation positive du réel."
                        </blockquote>
                    </div>

                    {/* Objectif et vision */}
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-xl font-lato">
                        Notre objectif est de renforcer les capacités de nos membres, tout en fournissant des solutions durables
                        aux problématiques sociales, économiques et environnementales au niveau local et national.
                    </p>
                </div>
            </section>
        </Container>
    );
};

export default HistorySection;
