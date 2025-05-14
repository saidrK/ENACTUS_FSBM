import React, { useState, useEffect } from "react";
import imageNotFound from "../assets/images/NoteFound/6325257.jpg";
import { BtnLink } from "../components/shared/BtnLink";


export default function NotFound() {
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


    return (

        <section className="bg-white dark:bg-gray-900 ">
            <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-4">
                <div className="wf-ull lg:w-1/2">
                    <p className="text-4xl font-bold enac-text dark:text-blue-400">404 error</p>
                    <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Page not found</h1>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">Sorry, the page you are looking for doesn't exist.Here are some helpful links:</p>

                    <div className="flex items-center mt-6 gap-x-3">
                        <BtnLink 
                                text="Back Home"
                                link="/" 
                                className="bg-btn hover:bg-yellow-700 duration-300 border-none"
                            />
                    </div>
                </div>

                <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
                    <img className=" w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover " src={imageNotFound} alt="Page Not Found Picture" />
                </div>
            </div>
        </section>


    );
}