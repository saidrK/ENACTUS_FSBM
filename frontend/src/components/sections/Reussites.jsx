import React, { useEffect, useRef } from "react";
// import { Container } from "../shared/Container";
import { Trophy, Award, Star } from 'lucide-react';
import ScrollReveal from 'scrollreveal';

/**
 * Composant Reussites - Affiche la section des réussites d'Enactus FSBM
 * Utilise ScrollReveal pour les animations d'apparition au défilement
 */
const Reussites = () => {
    // Référence pour l'animation ScrollReveal
    const sectionRef = useRef(null);

    // Configuration et initialisation de ScrollReveal
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

    // Données des réussites avec leurs icônes, titres et descriptions
    const successes = [
        {
            icon: <Trophy className="w-8 h-8" />,
            title: "Top 12 du Maroc",
            description:
                "Nous faisons partie des 12 meilleures équipes du Maroc grâce à notre engagement continu.",
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Demi-finaliste 2023-2024",
            description:
                "Une performance remarquable nous a permis d'atteindre les demi-finales nationales.",
        },
        {
            icon: <Star className="w-8 h-8" />,
            title: "Prix Enactus Got Impact",
            description:
                "Lauréat du prix prestigieux pour l'impact positif et durable de notre projet.",
        },
    ];

    return (
        <section ref={sectionRef} id="success" className="py-1">
            <div className="container mx-auto px-4">
                {/* En-tête de la section avec titre et sous-titre */}
                <div className="text-center max-w-xl mx-auto mb-12">
                    <h1 className="max-w-lg mb-6 font-sans text-5xl font-bold leading-none tracking-tight  md:mx-auto lg:text-6xl sm:text-4xl text-heading-2">Nos Réussites</h1>
                    <h2 className="mb-4 text-3xl font-bold text-heading-1 text-gray-800 dark:text-gray-200">Découvrez notre parcours</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        Grâce à l'implication de toute notre équipe, nous avons franchi plusieurs étapes importantes.
                    </p>
                </div>

                {/* Grille des cartes de réussite */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Mapping des données pour créer les cartes de réussite 
                        Chaque carte contient :
                        - Une icône dans un cercle coloré
                        - Un titre en gras
                        - Une description
                        - Une animation au survol
                    */}
                    {successes.map((item, index) => (
                        <div
                            key={index}
                            className="group hover:-translate-y-1 transition transform duration-300 bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-none"
                        >
                            <div className="w-[70px] h-[70px] mb-6 rounded-2xl flex items-center justify-center bg-blue-100 dark:bg-blue-600">
                                {React.cloneElement(item.icon, { className: "w-8 h-8 text-blue-700 dark:text-white" })}
                            </div>
                            <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{item.title}</h4>
                            <p className="text-gray-700 dark:text-gray-400">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reussites;