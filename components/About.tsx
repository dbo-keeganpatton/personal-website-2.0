'use client'
import dynamic from "next/dynamic";

const Typewriter = dynamic(() => import("typewriter-effect"), {
    ssr: false,
});


export default function About() {
    return (
        <section className="py-16 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 pl-5">About Me</h2>
            <div className="text-2xl flex items-start">
                <span className="text-2xl animate-pulse text-emerald-800 mr-2">❯</span>
        
                <Typewriter
          
                    options={{
            
                        strings: [
                            `Hello! I am an analytics engineer currently working for Walmart. 
                            I spend alot of time playing around with databases, building pipelines, 
                            managing devops workflows, and making poorly designed web apps. 
                            Below you can find a few fun projects I have done, and some base 
                            documentation outlining them. I love to talk about technology, 
                            so feel free to reach out by sending me an email, or connecting 
                            over LinkedIn.`
                        ],
            autoStart: true,
            loop: true,
            delay: 20,
          }}
        />
      </div>
    </section>
  );
}

