

export const Title = ({ children, className }) => {
    return (
        <h1 className={`text-heading-1 font-semibold text-2xl sm:text-3xl md:text-5xl ${className}`}>
            {" "}
            {children}{" "}
        </h1>
    );
}