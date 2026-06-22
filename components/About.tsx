'use client'
import dynamic from "next/dynamic";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

const BIO = `I am a data engineer currently working for Walmart. In my free time I spend a lot of time playing around with databases, building pipelines, managing devops workflows, and making poorly designed web apps. I love to talk about technology, so feel free to reach out by sending me an email, or connecting over LinkedIn.`;

export default function About() {
  return (
    <section className="lg:py-0 py-5 max-w-2xl mx-auto">
      {/* Static text for screen readers and reduced-motion users */}
      <p className="sr-only">{BIO}</p>

      <div aria-hidden="true" className="h-40 lg:h-45 lg:text-xl text-1xl flex items-start">
        <span className="animate-pulse text-emerald-800 mr-2">❯</span>

        {/* Hidden when reduced motion is preferred; static fallback shown instead */}
        <span className="motion-reduce:hidden">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString(BIO).start();
            }}
            options={{
              delay: 10,
              autoStart: true,
              loop: false,
            }}
          />
        </span>
        <span className="hidden motion-reduce:inline">{BIO}</span>
      </div>
    </section>
  );
}
