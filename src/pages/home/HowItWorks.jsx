import AnimatedSection from "@/components/animated-section"

const steps = [
  { id: 1, title: "Input symptoms", desc: "Enter key neurological symptoms and relevant history." },
  { id: 2, title: "Add imaging summary", desc: "Provide structured notes from MRI/clinical reports." },
  { id: 3, title: "View insights", desc: "Explore risk indicators and guidance for next steps." },
]

export default function HowItWorks() {
  return (
    <AnimatedSection as="section" className="mx-auto max-w-6xl px-6 py-16" id="how-it-works">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-semibold md:text-4xl">How it works</h2>
        <p className="mt-3 text-pretty text-slate-600">
          Three simple steps keep the process focused and understandable.
        </p>
      </div>

      <ol className="mt-10 grid gap-4 md:grid-cols-3">
        {steps.map((s) => (
          <li key={s.id} className="rounded-lg border border-slate-200 p-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-white text-sm font-semibold">
                {s.id}
              </span>
              <h3 className="text-lg font-semibold">{s.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.desc}</p>
          </li>
        ))}
      </ol>
    </AnimatedSection>
  )
}
