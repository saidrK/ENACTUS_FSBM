import { Container } from "./Container";
// import imageTaoumi from "../../assets/images/PHOTOS_DES_MEMBRES_BUREAU/younes.png";



function BlockQuote() {

    return (
        <Container className="mt-15">
            <figure className="max-w-screen-md mx-auto text-center">
                <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <blockquote>
                    <p className="text-2xl italic font-medium text-heading-2  dark:text-white">"FROM FRACTURES TO MASTERPIECES."</p>
                </blockquote>
                {/* <figcaption class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                    <img class="w-6 h-6 rounded-full" src={imageTaoumi} alt="Taoumi Younes" />
                    <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                        <cite class="pe-3 font-medium text-gray-900 dark:text-white">Taoumi Younes</cite>
                        <cite class="ps-3 text-sm text-gray-500 dark:text-gray-400">Team leader</cite>
                    </div>
                </figcaption> */}
            </figure>
        </Container>
        
    )
}

export default  BlockQuote;