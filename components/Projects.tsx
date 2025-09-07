export default function Projects() {
  
    return (
   
        <section className="py-16">
      
            <h2 className="text-3xl font-semibold text-center mb-10">Projects</h2>
      
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
                <div className="border p-6 rounded shadow">
          
                    <h3 className="text-xl font-bold">Portfolio Website</h3>
          
                    <p className="mt-2">My personal site built with Next.js and Tailwind CSS.</p>
         
                    <a href="#" className="text-blue-600 mt-2 inline-block">View Project →</a>
        
                </div>
        
                {/* Add more project cards here */}
      
            </div>
    
        </section>
  
    )
}
