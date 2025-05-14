export default function Project( {title, description, image, link} ) {
    return (
        <div className="group block rounded-xl overflow-hidden focus:outline-hidden bg-white/10 hover:bg-white/20 transition-all duration-300 py-6 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex flex-col lg:items-start sm:flex-row sm:items-center gap-6 sm:gap-8 px-4">
                <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44 flex items-center justify-center bg-white/5 shadow-lg transform transition-all duration-300 group-hover:shadow-xl">
                    <img className="group-hover:scale-110 group-focus:scale-110 group-hover:rotate-1 transition-all duration-300 ease-out size-full absolute top-0 start-0 object-contain rounded-xl filter group-hover:brightness-110" src={image} alt={`Image du projet ${title}`} />
                </div>

                <div className="grow flex flex-col justify-center gap-y-2">
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white transform transition-all duration-300 group-hover:translate-x-1">
                        {title}
                    </h3>
                    <p className="text-gray-600 dark:text-neutral-400">
                        {description}
                    </p>
                    {
                        link && (
                            <a className="mt-2 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500 transition-all duration-300 group-hover:gap-x-2 hover:text-orange-500 dark:hover:text-orange-400" href={link}>
                                Voir plus
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </a>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
