'use client'
import { useState } from "react"
import ProjectModal from "./ProjectModal";

export default function Project3() {
   
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const handleModalIsOpen = () => setModalIsOpen(true);
    const handleSetModalIsOpen = () => setModalIsOpen(false);



    return (
        <div className="border p-6 rounded-3xl shadow">
          <h3 className="text-xl font-bold">Thrasher Webscraping NPL Pipeline</h3>
            <p className="mt-3">
                 Pipeline that scrapes text data from Thrashermagazine.com, processes it, and performas an NLP sentiment analysis.
            </p>

            <button
                className="text-sm mt-6 border-2 border-emerald-700 rounded-xl p-2 text-md hover:border-red-800"
                onClick={handleModalIsOpen}
            > Learn More 
            </button> 

            
            <ProjectModal isOpen={modalIsOpen} onClose={handleSetModalIsOpen}>
                <h1 className="text-4xl font-semibold mb-4 text-center">Thrasher Interview Sentiment Analysis</h1>
                
               
                <div className="flex flex-col justify-center items-center object-center">

                    <h1 className="text-4xl"> Purpose </h1>

                    <p className="text-xl p-6 w-230">
                        Extracts Q&A text from interview articles on Thrashermagazine.com. This text is placed into a 
                        local Postgres database and further transformed through two DBT models. These models prep the
                        data for langauge processing by removing punctuation and single instances of letters.
                        The prepped data is then extracted and processed to remove stop words and prep for
                        tokenization. Using NLTK, tokens are then evaluated for sentiment using
                        the SentimentIntensityAnalyzer method and assigned a value ranging -1 to 1.
                        This data is aggregated to an average of all sentiment values contained
                        between questions and answers in the interview.                    
                    </p>

                    <h1 className="text-4xl"> Data Pipeline Structure </h1>
                
                    <img
                        src="/dataFlow.png"
                        alt="sample token"
                        width={900}
                    />


                    <h1 className="text-4xl"> Tooling </h1>

                  
                                       
                    <img 
                        src="/sample.png"
                        alt="site-schema"
                        width={900}
                        className="m-4 align-middle"

                    />
                    
                    <a  href="https://ourapi.streamlit.app/"
                        className="text-xl  border-2 rounded-md border-red-800 hover:border-emerald-700   p-1 m-3"
                    > 
                        Visit the Repository 
                    </a>

                </div>

           </ProjectModal>



         </div>
    )
}
