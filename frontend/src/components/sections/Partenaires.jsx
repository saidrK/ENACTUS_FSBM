import React, { useEffect, useRef } from "react";
import ScrollReveal from 'scrollreveal';
import { Container } from "../shared/Container";
// import { Title } from "../shared/Title";

// Import des logos des partenaires
import eerchadLogo from "../../assets/logos/Partenaires-logo/eerchad.png";
import fsbmLogo from "../../assets/logos/Partenaires-logo/fsbm.png";
import imitechLogo from "../../assets/logos/Partenaires-logo/imitech.png";
import injazLogo from "../../assets/logos/Partenaires-logo/injaz.png";
import pe2iLogo from "../../assets/logos/Partenaires-logo/pe2i01.png";
import pieLogo from "../../assets/logos/Partenaires-logo/pie.png";

// Tableau des partenaires avec leur nom et logo
const PartenairesData = [
    { name: "EERCHAD", logo: eerchadLogo },
    { name: "FSBM", logo: fsbmLogo },
    { name: "IMITECH", logo: imitechLogo },
    { name: "INJAZ", logo: injazLogo },
    { name: "PE2I", logo: pe2iLogo },
    { name: "PIE", logo: pieLogo }
];

export default function Partenaires() {
    // Référence pour l'animation ScrollReveal
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

    return ( 
        <section ref={sectionRef} className="bg-white dark:bg-gray-900">
            <Container className="space-y-8 mb-15 mt-15">
                {/* Titre de la section partenaires */}
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-heading-1 text-5xl font-bold">Nos Partenaires</h1>
                </div>
                {/* Affichage des logos partenaires : vertical sur mobile, horizontal sur grand écran */}
                <div className="flex flex-col justify-center flex-wrap gap-4 lg:flex-row sm:flex-col md:flex-col">
                    {PartenairesData.map((partenaire, key) => (
                        // Carte individuelle pour chaque partenaire
                        <div key={key} className="p-4 sm:p-5 lg:p-6 rounded-xl bg-body border border-box-border group flex items-center justify-center">
                            <img 
                                src={partenaire.logo}
                                width="100"
                                height="60"
                                alt={partenaire.name}
                                className="h-15 sm:h-20 lg:h-35 xl:h-16 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}