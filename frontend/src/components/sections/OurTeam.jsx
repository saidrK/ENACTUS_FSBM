import React, { useEffect, useRef } from "react";
import ScrollReveal from 'scrollreveal';
import TeamMember from "../shared/TeamMember";
import { teamData } from "../../utils/TeamData";

/**
 * Composant OurTeam - Affiche la section équipe d'Enactus FSBM
 * Présente tous les membres de l'équipe avec leurs rôles et informations
 * Utilise ScrollReveal pour les animations d'apparition
 */
const OurTeam = () => {
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
        <section className="bg-white dark:bg-footer-bg" id="team">
            {/* Container principal avec padding responsive */}
            <div ref={sectionRef} className="py-24 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                {/* En-tête de la section équipe */}
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 className="max-w-lg mb-6 font-sans text-5xl font-bold leading-none tracking-tight  md:mx-auto lg:text-6xl sm:text-4xl text-heading-2">
                        Our Team
                    </h2>
                    <p className="text-heading-2 text-2xl max-w-2xl mx-auto">
                        Découvrez notre équipe passionnée d'étudiants qui travaillent ensemble pour créer un impact positif à travers des projets entrepreneuriaux innovants.
                    </p>
                </div>

                {/* Grille responsive des membres de l'équipe */}
                <div className="grid gap-4 sm:gap-6 lg:gap-8 mb-6 lg:mb-16 grid-cols-1 md:grid-cols-2 px-2 sm:px-0">
                    {/* Mapping des données des membres pour créer les cartes */}
                    {teamData.map((member, index) => (
                        <TeamMember 
                            key={index} 
                            name={member.name} 
                            role={member.role} 
                            image={member.image} 
                            desc={member.desc} 
                            social={member.social} 
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurTeam;