import { Link } from "react-router-dom";

export const BtnLink = ({ link, text, className = "" }) => {
    return (
        <Link to={link} className={`px-6 py-3 rounded-full outline-none relative overflow-hidden border hover:bg-orange-500 cursor-pointer transform transition duration-300 ${className}`}>
            <span className="relative z-10 text-white">{text}</span>
        </Link>
    );
}