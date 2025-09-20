'use client'
import dynamic from "next/dynamic";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false, });


export default function About() {
    
	return (
        
		<section className="py-16 max-w-2xl mx-auto">
            
            <div className="lg:h-45 lg:text-2xl sm:text-1xl flex items-start">
                <span className="lg:text-2xl sm:text-1xl animate-pulse text-emerald-800 mr-2">❯</span>
        
                <Typewriter
          
                    options={{
            
                        strings: [
                            `Hello! I am an analytics engineer currently working for Walmart. 
                            In my free time I spend alot of time playing around with databases, 
                            building pipelines, managing devops workflows, and making poorly designed 
                            web apps. Below you can find a few fun projects I have done, and some base 
                            documentation outlining them. I love to talk about technology, 
                            so feel free to reach out by sending me an email, or connecting 
                            over LinkedIn.`
                        ],
            
						autoStart: true,
						loop: true,
						deleteSpeed: 0,
						delay: 0,
          
					}}
        
				/>
      
			</div>
    
		</section>
  
	);
}

