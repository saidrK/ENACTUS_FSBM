import React, { useState } from "react";
import { Container } from "../shared/Container";
import logoEnactus from "../../assets/logos/logo-enactus/logooo.png";
import logoFSBM from "../../assets/logos/logo-FSBM/logo-fsbVF.png";

const socialLinks = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
        </svg>,
        href: 'https://x.com/EnactusFSBM',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
        </svg>,
        href: 'https://www.instagram.com/3nac1us.fsbm/',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
        </svg>,
        href: 'https://www.linkedin.com/company/enactus-fsbmc/',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tiktok" viewBox="0 0 16 16">
            <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
        </svg>,
        href: 'https://www.tiktok.com/@enactus.fsbmposting',
    }
];

export const Footer = () => {
    const [newsletterEmail, setNewsletterEmail] = useState("");
    const [newsletterMsg, setNewsletterMsg] = useState("");

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        if (!newsletterEmail) {
            setNewsletterMsg("Veuillez entrer un email.");
            return;
        }
        // Ici tu peux faire un appel API si besoin
        setNewsletterMsg("Merci pour votre inscription !");
        setNewsletterEmail("");
        setTimeout(() => setNewsletterMsg(""), 4000); // Efface le message après 4s
    };

    return (
        <footer className="mt-auto w-full bg-footer-bg" id="contact">
            <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
                {/* Grid */}
                <div className="grid   md:grid-cols-2 xl:grid-cols-12 sm:grid-cols-1">
                    {/* Logos Section */}
                    <div className=" lg:col-span-3 flex flex-col items-center lg:items-start gap-6 px-0">
                        <a href="/" className="flex flex-col items-center lg:items-start gap-4">
                            <img 
                                src={logoEnactus} 
                                alt="Enactus FSBM" 
                                className="h-20  sm:h-20 w-auto object-contain"
                            />
                        </a>
                        <a href="https://www.fsb.univh2c.ma/" target="_blank" className="flex flex-col items-center lg:items-start gap-4">
                            <img
                                src={logoFSBM}
                                alt="FSBM"
                                className="h-16 sm:h-20 w-auto object-contain"
                            />
                        </a>
                    </div>

                    {/* ENACTUS Text Section */}
                    <Container className="lg:col-span-3 flex flex-col items-center  gap-4 lg:mr-20">
                        <div className="lg:col-span-3 flex flex-col items-center lg:items-start gap-4 lg:mr-25">
                            <h1 className="font-bold text-heading-2 text-3xl sm:text-4xl group text-center lg:text-left lg:text-5xl">
                                <span className="text-primary transition-all duration-300 group-hover:text-white enac-bg-2">En</span>trepreneuriat
                            </h1>
                            <h1 className="font-bold text-heading-2 text-3xl sm:text-4xl group text-center lg:text-left lg:text-5xl">
                                <span className="text-primary transition-all duration-300 group-hover:text-white enac-bg-2">Act</span>ion
                            </h1>
                            <h1 className="font-bold text-heading-2 text-3xl sm:text-4xl group text-center lg:text-left lg:text-5xl">
                                <span className="text-primary transition-all duration-300 group-hover:text-white enac-bg-2">Us</span>
                            </h1>
                        </div>
                    </Container>


                    {/* Contact Section */}
                    <div className="lg:col-span-3 flex flex-col items-center lg:items-start">
                        <h4 className="font-semibold text-heading-2 text-xl mb-6 relative inline-block text-center lg:text-left">
                            Contact
                            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </h4>
                        <div className="space-y-4 text-center lg:text-left">
                            <p className="text-heading-2 hover:text-white transition-colors duration-300">
                                Enactus FSBM, Faculté des Sciences Ben M'Sick
                                <br />
                                Bd Commandant Driss Al Harti
                                <br />
                                Casablanca 20670 - Maroc
                            </p>
                            <p className="text-heading-2">
                                E-mail : <a href="mailto:enactus24.25fsbm@gmail.com" className="hover:text-white transition-colors duration-300 border-b border-transparent hover:border-primary">enactus24.25fsbm@gmail.com</a>
                            </p>
                            <p className="text-heading-2">
                                Tél : Team leader <a href="tel:+212639380894" className="hover:text-white transition-colors duration-300 border-b border-transparent hover:border-primary">+212 639 380 894</a>
                                <br />
                                head of partnerships
                            </p>
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <div className="lg:col-span-3 flex flex-col items-center lg:items-start">
                        <h4 className="font-semibold text-heading-2 text-xl mb-4 text-center lg:text-left">Newsletter</h4>
                        <p className="text-heading-2 text-center lg:text-left mb-4">Restez informé de nos dernières actualités et événements.</p>
                        <form className="w-full" onSubmit={handleNewsletterSubmit}>
                            <div className="flex flex-col gap-3 bg-bg-section rounded-lg p-3 backdrop-blur-sm">
                                <input
                                    type="email"
                                    value={newsletterEmail}
                                    onChange={e => setNewsletterEmail(e.target.value)}
                                    className="py-2.5 px-4 block w-full border-transparent rounded-lg text-sm focus:border-primary focus:ring-primary bg-white/5 text-white placeholder-gray-400 transition-all duration-300"
                                    placeholder="Votre email"
                                />
                                <button
                                    type="submit"
                                    className="w-full p-3 cursor-pointer inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-primary text-white hover:bg-yellow-700 hover:text-heading-2  transition-all duration-300 focus:outline-none"
                                >
                                    S'abonner
                                </button>
                                {newsletterMsg && (
                                    <span className="text-green-400 text-sm text-center">{newsletterMsg}</span>
                                )}
                            </div>
                        </form>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-heading-2 text-center sm:text-left">© 2024 Enactus FSBM. Tous droits réservés.</p>

                        {/* Social Icons */}
                        <div className="flex gap-3">
                            {socialLinks.map((platform, idx) => (
                                <a
                                    key={idx}
                                    href={platform.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-links focus:outline-hidden focus:bg-white/10 transition-all duration-500 ease-in-out hover:bg-[#F7941D]"
                                >
                                    {platform.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};