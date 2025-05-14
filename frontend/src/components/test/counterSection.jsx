
import { useState, useEffect } from 'react';
import { User, Activity, Handshake, BarChart3, Target } from 'lucide-react';

// Définition des données
const data = [
    {
        icon: "user",
        title: "Jeunes mobilisés",
        count: 1000,
        prefix: "+",
        description: "étudiants impactés",
    },
    {
        icon: "activity",
        title: "Projets développés",
        count: 40,
        prefix: "+",
        description: "projets réalisés",
    },
    {
        icon: "handshake",
        title: "Bénéficiaires impactés",
        count: 500,
        prefix: "+",
        description: "personnes",
    },
    {
        icon: "chart",
        title: "Formation",
        count: 3000,
        prefix: "+",
        description: "heures de formations et d'accompagnement dispensées",
    },
    {
        icon: "goal",
        title: "ODD",
        count: 13,
        prefix: "+",
        description: "Objectifs du développement durable touchés",
    },
];

// Composant pour l'icône
const IconComponent = ({ iconName }) => {
    // Mapping des noms d'icônes aux composants
    switch (iconName) {
        case 'user':
            return <div className="w-12 h-12 rounded-full bg-indigo-100 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>;
        case 'activity':
            return <div className="w-12 h-12 rounded-full bg-indigo-100 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            </div>;
        case 'handshake':
            return <div className="w-12 h-12 rounded-full bg-indigo-100 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path></svg>
            </div>;
        case 'chart':
            return <div className="w-12 h-12 rounded-full bg-indigo-100 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><rect x="3" y="3" width="18" height="18" rx="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line></svg>
            </div>;
        case 'goal':
            return <div className="w-12 h-12 rounded-full bg-indigo-100 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
            </div>;
        default:
            return null;
    }
};

// Composant pour le compteur animé
const AnimatedCounter = ({ value, prefix = '', duration = 3000 }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!isVisible) return;

        let startTime;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            setCount(Math.floor(percentage * value));

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, [isVisible, value, duration]);

    return (
        <span
            className="tabular-nums text-heading-3 text-3xl font-bold mb-2"
            ref={(el) => {
                if (!el) return;
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            setIsVisible(true);
                            observer.disconnect();
                        }
                    },
                    { threshold: 0.1 }
                );
                observer.observe(el);
                return () => observer.disconnect();
            }}
        >
            {prefix}{count}
        </span>
    );
};

// Composant pour chaque bloc de statistique
const StatsBlock = ({ icon, count, prefix, title, description }) => {
    return (
        <div className="grid justify-items-center grid-cols-1 p-4 bg-white/15 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <IconComponent iconName={icon} />

            <h3 className="text-lg font-semibold text-heading-2 text-center mt-4 mb-2">
                {title}
            </h3>

            <div className="mb-2">
                <AnimatedCounter value={count} prefix={prefix} />
            </div>

            <p className="text-sm text-heading-2 text-center max-w-[200px] mx-auto">
                {description}
            </p>
        </div>
    );
};

// Composant principal
const CentralizedStatsDisplay = () => {
    return (
        <div className="mx-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <p className="text-heading-2 text-3xl max-w-2xl mx-auto">
                        Découvrez l'impact de nos actions et notre contribution au développement durable
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {data.map((item, index) => (
                        <StatsBlock
                            key={index}
                            icon={item.icon}
                            count={item.count}
                            prefix={item.prefix}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CentralizedStatsDisplay;