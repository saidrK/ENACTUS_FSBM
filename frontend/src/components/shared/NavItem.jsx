import { ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";

export const NavItem = ({ item, onLinkClick }) => {
    // States pour gérer les interactions
    const [isHovered, setIsHovered] = useState(false);          // Gère le survol sur desktop
    const [isMobileExpanded, setIsMobileExpanded] = useState(false);  // Gère l'expansion sur mobile
    const [submenuPosition, setSubmenuPosition] = useState('left-0');  // Position du sous-menu

    // Vérifie si l'élément a un sous-menu
    const hasSubMenu = item?.subMenu?.length > 0;
    const submenuRef = useRef(null);

    // Effet pour gérer la position du sous-menu sur desktop
    // Évite que le sous-menu ne sorte de l'écran
    useEffect(() => {
        if (submenuRef.current && isHovered) {
            const rect = submenuRef.current.getBoundingClientRect();
            if (rect.right > window.innerWidth) {
                setSubmenuPosition('right-0');
            } else {
                setSubmenuPosition('left-0');
            }
        }
    }, [isHovered]);

    // Gestionnaire de clic sur l'élément
    const handleItemClick = (e) => {
        if (hasSubMenu) {
            e.preventDefault();
            setIsMobileExpanded(!isMobileExpanded);
        }
    };

    // Ferme le sous-menu mobile après navigation
    const scrollToSection = () => {
        setIsMobileExpanded(false);
        onLinkClick?.(); // Appelle la fonction pour fermer le menu mobile
    };

    return (
        <li 
            className="relative" 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Lien principal avec icône de flèche si sous-menu */}
            <ScrollLink 
                to={item.href}
                smooth={true}
                duration={500}
                offset={-100}
                className="cursor-pointer flex items-center justify-between w-full px-3 py-3 font-medium text-heading-1 dark:text-heading-2 hover:text-yellow-700 transition-colors duration-300"
                onClick={(e) => {
                    handleItemClick(e);
                    if (!hasSubMenu) {
                        onLinkClick?.(); // Ferme le menu mobile si ce n'est pas un sous-menu
                    }
                }}
            >
                <span>{item.text}</span>
                {hasSubMenu && (
                    <ChevronDown 
                        className={`transition-transform duration-300 ease-in-out transform
                                ${isHovered ? 'lg:rotate-180' : ''}
                                ${isMobileExpanded ? 'rotate-180' : ''}`}
                    />
                )}
            </ScrollLink>
            
            {/* Sous-menu version desktop */}
            {hasSubMenu && (
                <div 
                    ref={submenuRef}
                    className={`absolute ${submenuPosition} top-full w-48 bg-subNav dark:bg-footer-bg shadow-lg rounded-lg py-2 z-50
                            transform transition-all duration-200 origin-top 
                            hidden lg:block
                            ${isHovered ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}
                >
                    {item.subMenu.map((subItem, index) => (
                        <ScrollLink 
                            key={index} 
                            to={subItem.href}
                            smooth={true}
                            duration={500}
                            offset={-100}
                            className="cursor-pointer block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-yellow-700 dark:hover:text-yellow-700 transition-colors duration-200"
                            onClick={scrollToSection}
                        >
                            {subItem.text}
                        </ScrollLink>
                    ))}
                </div>
            )}
            
            {/* Sous-menu version mobile */}
            {hasSubMenu && (
                <div 
                    className={`lg:hidden pl-4 space-y-2 overflow-hidden transition-all duration-300 ease-in-out shadow-[5px_5px_10px_0px_rgba(0,_0,_0,_0.1)]
                            ${isMobileExpanded ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}`}
                >
                    {item.subMenu.map((subItem, index) => (
                        <ScrollLink 
                            key={index} 
                            to={subItem.href}
                            smooth={true}
                            duration={500}
                            offset={-100}
                            className="cursor-pointer block py-2 text-gray-700 dark:text-gray-200 hover:text-yellow-700 dark:hover:text-yellow-700 transition-colors duration-200"
                            onClick={scrollToSection}
                        >
                            {subItem.text}
                        </ScrollLink>
                    ))}
                </div>
            )}
        </li>
    );
}