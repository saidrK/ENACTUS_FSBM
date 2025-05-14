import { useState, useEffect } from "react";
import { Layout } from "../components/Layout";
import Partenaires from "../components/sections/Partenaires";
import Hero from "../components/sections/Hero";
import Mission from "../components/sections/Mission";
import HistorySection  from "../components/sections/HistorySection";
import Chiffres from "../components/sections/Chiffres";
import Reussites from "../components/sections/Reussites";
import OurTeam from "../components/sections/OurTeam";
import OurProjects from "../components/sections/OurProjects";
import Events from "../components/sections/Events";
import IntroVideoSection from "../components/sections/IntroVideoSection";

// Composant principal de la page d'accueil
function Home() {
    // État pour gérer l'affichage du loader pendant le chargement de la page
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simule le chargement de la page
        const timer = setTimeout(() => setLoading(false), 1200);
        // Nettoie le timer si le composant est démonté avant la fin du timeout
        return () => clearTimeout(timer);
    }, []);

    // Affiche un spinner de chargement tant que la page n'est pas prête
    if (loading) return (
        <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
        </div>
    );

    // Rendu principal de la page une fois le chargement terminé
    return (
        <Layout title="Enactus FSBM">
            {/* Section d'accueil principale */}
            <Hero />
            {/* Section présentant la mission de l'association */}
            <Mission />
            {/* Section sur l'historique de l'association */}
            <HistorySection />
            {/* Section affichant les chiffres clés */}
            <Chiffres />
            {/* Section présentant les réussites */}
            <Reussites />
            {/* Section présentant l'équipe */}
            <OurTeam />
            {/* Section présentant les projets */}
            <OurProjects />
            {/* Section présentant les événements */}
            <Events />
            {/* Section présentant les partenaires */}
            <Partenaires />
            {/* Section vidéo d'introduction */}
            <IntroVideoSection />
        </Layout>
    )
}

export default Home;