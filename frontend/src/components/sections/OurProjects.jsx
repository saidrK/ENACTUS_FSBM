import { Container } from "../shared/Container";
import { ProjectsData } from "../../utils/ProjectsData";
import Project from "../shared/Project";
import React, { useEffect, useRef } from "react";
import ScrollReveal from 'scrollreveal';

/**
 * Composant OurProjects - Affiche la section des projets d'Enactus FSBM
 * Utilise ScrollReveal pour les animations d'apparition
 * Affiche les projets dans une grille responsive
 */
export default function OurProjects() {
    // Référence pour l'animation ScrollReveal
    const sectionRef = useRef(null);

    // Configuration et initialisation de ScrollReveal
    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'bottom',     // Animation depuis le bas
            distance: '50px',     // Distance de déplacement
            duration: 1000,       // Durée de l'animation en ms
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
        <section ref={sectionRef} className="max-w-[85rem] px-4 py-1 sm:px-6 lg:px-8 lg:py-2 mx-auto" id="projects">
            {/* En-tête de la section avec titre et description */}
            <Container className="text-center">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    NOS PROJETS
                </h1>
                <p className="mb-10 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    Découvrez les initiatives que notre équipe développe avec passion pour répondre à des besoins concrets, innover dans nos domaines, et avoir un impact positif.
                </p>
            </Container>

            {/* Grille responsive des projets */}
            <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
                {/* Mapping des données des projets pour créer les cartes */}
                {ProjectsData.map((projet, key) => (
                    <Project 
                        key={key} 
                        title={projet.title} 
                        description={projet.description} 
                        image={projet.image} 
                        link={projet.link} 
                    />
                ))}
            </div>
        </section>
    )
}
