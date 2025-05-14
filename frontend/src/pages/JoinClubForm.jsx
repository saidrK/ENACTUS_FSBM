import React, { useState, useEffect } from "react";
import bgimage from "../assets/logos/logo-enactus/logooo.png";
import { Link } from "react-router-dom";

export default function EnactusRegistrationForm() {
    // État pour gérer l'affichage du loader pendant le chargement de la page
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        codeApogee: "",
        email: "",
        age: "",
        filiere: ""
    });

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async () => {
        // Vérification de l'âge minimum
        if (parseInt(formData.age, 10) < 16) {
            alert("L'âge doit être au moins de 16 ans.");
            return;
        }
        try {
            const response = await fetch("http://localhost:5000/api/membres", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if (response.ok) {
                alert("✅ Membre ajouté avec succès !");
                // Réinitialiser le formulaire
                setFormData({
                    nom: "",
                    prenom: "",
                    codeApogee: "",
                    email: "",
                    age: "",
                    filiere: ""
                });
                console.log(data);
            } else {
                alert("❌ Une erreur est survenue.");
            }
        } catch (error) {
            console.error("Erreur lors de l'envoi du formulaire :", error);
            alert("❌ Erreur réseau");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-[#1E3E62] overflow-y-auto">
            {/* Section Globale */}
            <div className="w-full h-auto my-4 sm:my-0 bg-nav border-none shadow rounded-lg flex flex-col lg:max-w-screen-xl lg:flex-row justify-center">
                {/* Logo Section - Ajusté pour mobile */}
                <div className="flex-1 bg-nav text-center p-6 sm:p-8 rounded-l-lg">
                    <div className="flex flex-col items-center justify-center h-full">
                        <img
                            src={bgimage}
                            alt="Enactus Logo"
                            className="w-3/4 sm:w-4/5 mb-4 sm:mb-8"
                        />
                        <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">Club Enactus</h2>
                        <p className="text-white text-base sm:text-lg">Rejoignez-nous pour créer un impact positif par l'entrepreneuriat social!</p>
                    </div>
                </div>

                {/* Form Section - Ajusté pour mobile */}
                <div className="w-full lg:w-1/2 xl:w-5/12 p-4 sm:p-6 lg:p-12 bg-amber-50 rounded-r-lg">
                    <div className="flex flex-col items-center">
                        <div className="text-center">
                            <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
                                Rejoindre Enactus
                            </h1>
                            <p className="text-sm text-gray-500">
                                Complétez ce formulaire pour rejoindre notre club Enactus
                            </p>
                        </div>
                        <div className="w-full flex-1 mt-8">
                            <div className="mx-auto max-w-xs flex flex-col gap-4">
                                <div className="flex gap-2">
                                    <input
                                        className="w-1/2 px-3 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="text"
                                        name="nom"
                                        value={formData.nom}
                                        onChange={handleChange}
                                        placeholder="Nom"
                                    />
                                    <input
                                        className="w-1/2 px-3 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="text"
                                        name="prenom"
                                        value={formData.prenom}
                                        onChange={handleChange}
                                        placeholder="Prénom"
                                    />
                                </div>

                                <div className="flex gap-2">
                                    <input
                                        className="w-1/2 px-3 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="text"
                                        name="codeApogee"
                                        value={formData.codeApogee}
                                        onChange={handleChange}
                                        placeholder="Code Apogée"
                                    />
                                    <input
                                        className="w-1/2 px-3 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="age"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        placeholder="Âge"
                                        min={15} // L'utilisateur ne peut pas entrer moins de 15
                                    />

                                </div>

                                <input
                                    className="w-full px-3 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Adresse email"
                                />

                                <select
                                    className="w-full px-3 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 text-gray-700 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    name="filiere"
                                    value={formData.filiere}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>Sélectionnez votre filière</option>
                                    {/* Vous pouvez ajouter vos filières ici */}
                                    <option value="economie">MIP/INFO</option>
                                    <option value="economie">MIP/MATH</option>
                                    <option value="droit">MIP</option>
                                    <option value="marketing">IA</option>
                                    <option value="informatique">SMI</option>
                                    <option value="gestion">SMA</option>
                                    <option value="economie">PC</option>
                                    <option value="economie">CHIMIE</option>
                                    <option value="informatique">SMC</option>
                                    <option value="autre">BCG</option>
                                </select>

                                <button
                                    onClick={handleSubmit}
                                    className="cursor-pointer mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-3 rounded-lg hover:bg-blue-800 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                >
                                    <svg
                                        className="w-6 h-6 -ml-2"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx="8.5" cy="7" r="4" />
                                        <path d="M20 8v6M23 11h-6" />
                                    </svg>
                                    <span className="ml-3">Rejoindre</span>
                                </button>
                                <p className="mt-6 text-xm text-gray-600 text-center">
                                    Back To {" "}
                                    <Link to="/" className="cursor-pointer underline decoration-solid text-gray-600"> Home</Link>
                                    <br />
                                    Membres View {" "}
                                    <Link to="/leader-dashboard" className="cursor-pointer underline decoration-solid text-gray-600"> Membres</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
