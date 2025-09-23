'use client'
import { useState } from "react"
import ProjectModal from "./ProjectModal";

export default function Project3() {
   
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const handleModalIsOpen = () => setModalIsOpen(true);
    const handleSetModalIsOpen = () => setModalIsOpen(false);



    return (
        <div>
            <div className="border p-6 rounded-3xl shadow transform transition duration-300 ease-in-out hover:scale-105">
              <h3 className="text-xl font-bold">Thrasher Webscraping NLP Pipeline</h3>
                <p className="mt-3 text-lg">
                     Scrape, Process, and store data from ThrasherMagazine for NLP sentiment analysis.
                </p>

                <button
                    className="text-sm mt-6 border-2 border-emerald-700 rounded-xl p-2 text-md hover:border-red-800"
                    onClick={handleModalIsOpen}
                > Learn More 
                </button> 
            </div>
            
            <ProjectModal isOpen={modalIsOpen} onClose={handleSetModalIsOpen}>
                <h1 className="text-3xl lg:text-4xl font-semibold mb-2 mt-6 text-center">Thrasher Sentiment Analysis</h1>
                
               
                <div className="flex flex-col p-15">
 
                    <h1 className="text-xl  lg:text-3xl pb-3 font-bold"> Purpose </h1>
                    <hr className="pb-3" />
                    <p className="text-sm lg:text-2xl pb-6">
                        Extracts Q&A text from interview articles on Thrashermagazine.com. This text is placed into a 
                        local Postgres database and further transformed through two DBT models. These models prep the
                        data for langauge processing by removing punctuation and single instances of letters.
                        The prepped data is then extracted and processed to remove stop words and prep for
                        tokenization. Using NLTK, tokens are then evaluated for sentiment using
                        the SentimentIntensityAnalyzer method and assigned a value ranging -1 to 1.
                        This data is aggregated to an average of all sentiment values contained
                        between questions and answers in the interview.                    
                    </p>

                    <h1 className="text-xl  lg:text-3xl pb-3 font-bold"> Data Pipeline Structure </h1>
                    <hr className="pb-4"/>
                    <img src="/dataFlow.png" alt="Pipeline Diagram" />


                    <h1 className="text-xl  lg:text-3xl pb-3 pt-6 font-bold">Tooling </h1>
                    <hr />
                    <ol className="list-decimal text-md lg:text-xl pl-5 lg:pl-10 pt-4 pb-1">
                        <li> Pandas </li>
                        <li> Seaborn </li>
                        <li> Postgres </li>
                        <li> Selenium </li>
                        <li> SqlAlchemy </li>
                        <li> BeautifulSoup </li>
                        <li> Apache Airflow </li>
                        <li> DBT (Data Build Tool) </li>
                    </ol>


                    <h1 className="text-xl  lg:text-3xl pb-3 pt-6 font-bold"> Airflow DAG </h1>
                    <hr className="pb-4"/>
                    <img src="/dag.png" alt="airflow dag" />
                   

                    <h1 className="text-xl  lg:text-3xl pb-3 pt-6 font-bold"> Sentiment Distribution </h1>
                    <hr className="pb-4"/>
                    <img src="/SentimentHistogram.png" alt="Thrasher Sentiment Distribution" />

                    
                    <a  href="https://github.com/dbo-keeganpatton/thrasher_data_pipeline/tree/main"
                        className="text-2xl text-center border-3 rounded-md border-emerald-800 hover:bg-red-700 p-2 m-5"
                    > Visit the Repository </a>

                </div>

           </ProjectModal>



         </div>
    )
}
