'use client'
import { useState } from "react"

export default function Project4() {
   
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const handleModalIsOpen = () => setModalIsOpen(true);
    const handleSetModalIsOpen = () => setModalIsOpen(false);

    {/* Create a Modal for this project at some point */}


    return (
        <div className="border p-6 rounded-3xl shadow">
          <h3 className="text-xl font-bold">Thrasher Magazine NLP Web Scraping Pipeline</h3>
            <p className="mt-3">
                Pipeline that scrapes text data from Thrashermagazine.com, processes it, and 
                performas an NLP sentiment analysis.
            </p>

            <button
                className="text-sm mt-6 border-2 border-emerald-700 rounded-xl p-2 text-md hover:border-red-800"
            > Learn More 
            </button>  
         </div>
    )
}
