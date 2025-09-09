import Project1 from "./Project1"
import Project2 from "./Project2"
import Project3 from "./Project3"
import Project4 from "./Project4"

export default function Projects() {
  
    return (
   
        <section className="py-16">
      
            <h2 className="text-3xl font-semibold text-center mb-10">Projects</h2>
      
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
     

                {/* Begin Project List */} 
                <Project1 />
                <Project2 />
                <Project3 />
                <Project4 />
                {/* End Project List */} 
            
            </div>
        </section>
  
    )
}
