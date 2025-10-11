'use client'
import dynamic from "next/dynamic";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false, });


export default function About() {
    
	return (
        
		<section className="lg:py-16 max-w-2xl mx-auto">
            
            <div className="h-40 lg:h-45 lg:text-xl text-1xl flex items-start">
                <span className="animate-pulse text-emerald-800 mr-2">❯</span>
        
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString(
                                `Hello! I am an analytics engineer currently working for Walmart. 
                                In my free time I spend a lot of time playing around with databases, 
                                building pipelines, managing devops workflows, and making poorly designed 
                                web apps. Below you can find a few fun projects I have done, and some base 
                                documentation outlining them. I love to talk about technology, 
                                so feel free to reach out by sending me an email, or connecting 
                                over LinkedIn.`
                            )
                            .start(); 
                    }}
                    options={{
                        delay: 10, 
                        autoStart: true,
                        loop: false, 
                    }}
                />
      
			</div>
    
		</section>
  
	);
}

