import React, { useEffect, useRef } from "react";
import ScrollReveal from 'scrollreveal';
import ChiffresCard from "../cards/ChiffresCard";

export default function Chiffres() {
    const sectionRef = useRef(null);

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

    return (
        <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 group" ref={sectionRef} id="chiffres">
            <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-5xl font-bold leading-none tracking-tight  md:mx-auto lg:text-6xl sm:text-4xl text-heading-2">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 enac-text lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="d5589eeb-3fca-4f01-ac3e-983224745704"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#d5589eeb-3fca-4f01-ac3e-983224745704)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">Nos</span>
                    </span>{' '}
                    Chiffres
                </h2>
                <section className="bg-white dark:bg-gray-900">
                    <h2 className="text-2xl enac-text md:text-lg lg:text-4xl ">
                        Fondation : <span className="text-heading-3">2014</span>
                    </h2>
                </section>
            </div>
            <div className="text-center mb-12">
                <p className="text-heading-2 text-3xl max-w-2xl mx-auto">
                    Découvrez l'impact de nos actions et notre contribution au développement durable
                </p>
            </div>
            <ChiffresCard />
        </div>
    );
};