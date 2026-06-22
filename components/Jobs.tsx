import Job1 from "./Job1"
import Job2 from "./Job2"
import Job3 from "./Job3"
import Job4 from "./Job4"
import ScrollReveal from "./ScrollReveal"

export default function Jobs() {

  return (

    <section id="experience" className="lg:py-16 p-5 lg:p-0">

      <h2 className="text-2xl font-semibold text-left mb-5 lg:pl-5 lg:text-3xl">
        Experience
        <span className="text-emerald-500"> ❯ </span>
      </h2>

      <div className="flex flex-col gap-4">

        {/* Begin Jobs List */}
        <ScrollReveal><Job4 /></ScrollReveal>
        <ScrollReveal><Job1 /></ScrollReveal>
        <ScrollReveal><Job2 /></ScrollReveal>
        <ScrollReveal><Job3 /></ScrollReveal>
        {/* End Jobs List */}

      </div>
    </section>

  )
}
