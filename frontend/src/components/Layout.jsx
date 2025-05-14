import  {Navbar} from "./elements/Navbar";
import { Footer } from "./elements/Footer";
import { useEffect } from "react";


export const Layout = ({ title, children}) => {

    useEffect(() => {
        document.title = title;
    }, [title]);


    return (
        <>
            <Navbar />

            <main className="flex flex-col gap-y-20 md:gap-y-20 overflow-hidden">
                {children}
            </main>
            

            <Footer />
        </>
    )
}