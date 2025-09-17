'use client'
import { useState } from "react"
import ProjectModal from "./ProjectModal";


export default function Project2() {
   
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const handleModalIsOpen = () => setModalIsOpen(true);
    const handleSetModalIsOpen = () => setModalIsOpen(false);


    return (
        <div className="border p-6 rounded-3xl shadow">
          <h3 className="text-xl font-bold">Dark Oura</h3>
            <p className="mt-3">
                Self Service Analytics Pipeline for Oura Biometric Tracker. 
            </p>

            <button
                className="text-sm mt-6 border-2 border-emerald-700 rounded-xl p-2 text-md hover:border-red-800"
                onClick={handleModalIsOpen}
            > Learn More 
            </button> 

            
            <ProjectModal isOpen={modalIsOpen} onClose={handleSetModalIsOpen}>
                <h3 className="text-2xl font-semibold mb-4 text-center">Dark Oura</h3>
                
               
                <div className="flex flex-col justify-center items-center object-center">
                     
                    <a  href="https://darkoura.streamlit.app/"
                        className="text-xl  border-2 rounded-md border-red-800 hover:border-emerald-700   p-1 m-3"
                    > 
                        Visit the Site 
                    </a>

                    <p className="text-xl p-6 w-230">
                        Automated self service analytics pipeline using the Oura Ring V2 API and Streamlit. 
                        The user can obtain an API token from oura directly and generate using that. Secrets 
                        are used for the API call but are not stored 
                        in any way.
                    </p>

                  
                    <img
                        src="/sample_token.png"
                        alt="sample token"
                        width={900}
                    />

                    
                    <p className="text-xl p-6 w-230">
                        Biometric data is extracted via a custom package I made, Ourapi.py, that standardizes
                        programattic extraction of data from the Oura Ring V2 API. This data is then processed 
                        using pandas and stored in memory within the Streamlit app. The data is visualized into 
                        3 distinct categories, sleep, stress and activity. The user can define a time
                        frame of data to pull upon extraction.                    
                    </p>


                    <img 
                        src="/sample.png"
                        alt="site-schema"
                        width={900}
                        className="m-4 align-middle"

                    />
                    
                </div>

           </ProjectModal>



         </div>
    )
}
