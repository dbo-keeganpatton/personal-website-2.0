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
                <h3 className="text-4xl font-semibold mb-2 mt-6 text-center">Dark Oura</h3>
                <div className="flex flex-col p-15">
                     

					<h1 className="text-xl  lg:text-3xl pb-3 font-bold"> Purpose </h1>
					<hr className="pb-4" />
                    <p className="text-sm lg:text-2xl pb-6">
                        Automated self service analytics pipeline using the Oura Ring V2 API and Streamlit. 
                        The user can obtain an API token from oura directly and generate using that. Secrets 
                        are used for the API call but are not stored 
                        in any way.
                    </p>
                    <img src="/sample_token.png" alt="sample token" className="pb-12" />


                    <h1 className="text-xl  lg:text-3xl pb-3 font-bold"> App UX Flow </h1>
                    <hr className="pb-4"/>
                    <p className="text-sm lg:text-2xl pb-6">
                        Biometric data is extracted via a custom package I made, Ourapi.py, that standardizes
                        programattic extraction of data from the Oura Ring V2 API. This data is then processed 
                        using pandas and stored in memory within the Streamlit app. The data is visualized into 
                        3 distinct categories, sleep, stress and activity. The user can define a time
                        frame of data to pull upon extraction.                    
                    </p>


                    <img src="/sample.png" alt="site-schema" />
                    <hr className="pb-12 pt-6" />

                    <a  href="https://darkoura.streamlit.app/"
						className="text-2xl text-center border-3 rounded-md border-emerald-800 hover:bg-red-700 p-2 m-5"
                    > Visit the Site </a>

				</div>

           </ProjectModal>



         </div>
    )
}
