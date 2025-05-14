import { Container } from "../shared/Container";
import { NavItem } from "../shared/NavItem";
import { BtnLink } from "../shared/BtnLink";
import logo from "../../assets/logos/cropped-favicon-192x192.png";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { navItems } from "../../utils/navItems-list";


export const Navbar = () => {
    // State pour gérer l'ouverture/fermeture du menu mobile
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // State pour gérer le style de la navbar lors du scroll
    const [isScrolled, setIsScrolled] = useState(false);

    // Effet pour détecter le scroll et mettre à jour isScrolled
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 20);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        // Header principal avec position fixe et z-index élevé
        <header className={`fixed inset-x-0 top-0 z-[999] transition-all duration-300 ${
            isScrolled 
                ? 'py-4 bg-[rgb(37,47,62)] backdrop-blur-md shadow-lg' 
                : 'py-6 bg-transparent'
        }`}>
            <Container>
                {/* Navigation principale */}
                <nav className="w-full flex justify-between gap-6 relative">
                    {/* Logo et nom du site */}
                    <div className="min-w-max inline-flex relative group">
                        <a href="/" className="relative flex items-center gap-3">
                            <img src={logo} alt="EdgeAI Logo" className="w-10 h-10" />
                            <div className="inline-flex text-lg font-semibold text-white hover:text-yellow-700 duration-300">Enactus FSBM</div>
                        </a>
                    </div>

                    {/* Bouton du menu mobile - visible uniquement sur mobile */}
                    <button 
                        className="lg:hidden p-2 text-white hover:text-yellow-700 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Menu de navigation et bouton CTA */}
                    <div
                        className={`flex flex-col lg:flex-row w-full lg:justify-between lg:items-center
                                    absolute top-full left-0 lg:static lg:top-0
                                    ${isScrolled ? 'bg-nav backdrop-blur-md border-none' : 'bg-body'}
                                    lg:bg-transparent lg:mt-0 lg:rounded-none lg:shadow-none
                                    border-x border-box-border lg:border-x-0 lg:h-auto
                                    transition-all duration-300 ease-in-out
                                    ${isMenuOpen 
                                        ? 'h-auto opacity-100 mt-4 rounded-lg bg-body flex flex-col items-center justify-center shadow-lg' 
                                        : 'h-0 opacity-0 lg:opacity-100'
                                    }
                                    overflow-hidden lg:overflow-visible`}
                    >
                        {/* Liste des liens de navigation */}
                        <ul className="border-t border-box-border lg:border-t-0 px-6 lg:px-0 
                                        pt-6 lg:pt-0 flex flex-col lg:flex-row gap-x-3 
                                        text-lg text-white lg:text-heading-2 w-full lg:justify-center lg:items-center group"
                        >
                            {navItems.map((item, key) => (
                                <NavItem 
                                    key={key} 
                                    item={item} 
                                    onLinkClick={() => setIsMenuOpen(false)}
                                />
                            ))}
                        </ul>

                        {/* Bouton CTA "Rejoignez-nous" */}
                        <div className="lg:min-w-max flex items-center sm:w-max w-full pb-6 
                                        lg:pb-0 border-b border-box-border lg:border-0
                                        px-6 lg:px-0 group"
                        >
                            <BtnLink 
                                text="Rejoignez-nous" 
                                link="/rejoindre" 
                                className="bg-btn hover:bg-yellow-700 duration-300 border-none"
                                onClick={() => setIsMenuOpen(false)}
                            />
                        </div>
                    </div>
                </nav>
            </Container>
        </header>
    );
}