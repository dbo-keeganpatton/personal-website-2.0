'use client'
import { useState } from "react"
import ProjectModal from "./ProjectModal";

export default function Project3() {
   
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const handleModalIsOpen = () => setModalIsOpen(true);
    const handleSetModalIsOpen = () => setModalIsOpen(false);



    return (
        <div>
            <div className="flex flex-col hover:border hover:border-white/5 hover:rounded-lg hover:bg-white/5 hover:text-emerald-500 lg:p-5">
                
                <h3 className="text-md font-bold pb-3 lg:pr-5 text-emerald-500">Thrasher Webscraping NLP Pipeline</h3>
                <p className="text-sm  lg:text-md text-gray-300/80">
                     Scrape, Process, and store data from ThrasherMagazine for NLP sentiment analysis.
                </p>
                

                {/* Tech Stack items for project  */}
                <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex-initial grow-0 border-2 border-emerald-700/20 p-1 rounded-xl text-sm bg-emerald-700/20 text-center text-emerald-300">   Selenium             </div>
                    <div className="flex-initial grow-0 border-2 border-emerald-700/20 p-1 rounded-xl text-sm bg-emerald-700/20 text-center text-emerald-300">   DBT                  </div>
                    <div className="flex-initial grow-0 border-2 border-emerald-700/20 p-1 rounded-xl text-sm bg-emerald-700/20 text-center text-emerald-300">   Apache Airflow       </div>
                    <div className="flex-initial grow-0 border-2 border-emerald-700/20 p-1 rounded-xl text-sm bg-emerald-700/20 text-center text-emerald-300">   Postgres             </div>
                </div>
                {/* End Tech Stack */}


                <button
                    className="text-sm mt-6 w-25 border-2 border-emerald-700 rounded-xl p-1 text-md hover:border-red-800"
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
