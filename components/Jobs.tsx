import Job1 from "./Job1"
import Job2 from "./Job2"
import Job3 from "./Job3"

export default function Jobs () {
  
    return (
   
        <section className="lg:py-16 p-5 lg:p-0 ">
      
            <h2 className="text-2xl font-semibold text-left mb-5 lg:pl-5"> 
                Experience
                <span className="text-emerald-500"> ❯ </span>
            </h2>
      
            <div className="flex flex-col gap-4">
     

                {/* Begin Jobs List */} 
                 
                <Job1 />
                <Job2 />
                <Job3 />
                {/* End Jobs List */} 
            
            </div>
        </section>
  
    )
}
