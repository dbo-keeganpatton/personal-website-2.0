import Project1 from "./Project1"
import Project2 from "./Project2"
import Project3 from "./Project3"
import Project4 from "./Project4"
import Project5 from "./Project5"
import ScrollReveal from "./ScrollReveal"

export default function Projects() {

    return (

        <section id="projects" className="lg:py-16 py-10 p-5 lg:p-0">

            <h2 className="text-2xl font-semibold text-left lg:pl-5 lg:text-3xl">
                Projects
                <span className="text-emerald-500"> ❯ </span>
            </h2>

            <div className="flex flex-col gap-4">

                {/* Begin Project List */}
                <ScrollReveal><Project5 /></ScrollReveal>
                <ScrollReveal><Project1 /></ScrollReveal>
                <ScrollReveal><Project2 /></ScrollReveal>
                <ScrollReveal><Project3 /></ScrollReveal>
                <ScrollReveal><Project4 /></ScrollReveal>
                {/* End Project List */}

            </div>
        </section>

    )
}
