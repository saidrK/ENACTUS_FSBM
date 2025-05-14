

export const Button = ({ onClick, children, className = "" }) => {
    return (
        <button onClick={onClick} className={`px-6 py-3 rounded-full outline-none cursor-pointer relative overflow-hidden border border-transparent bg-violet-600 ${className}`}> 
            {children}
        </button>
    );
}