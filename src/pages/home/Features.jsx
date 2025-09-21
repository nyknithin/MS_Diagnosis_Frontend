import AnimatedSection from "@/components/animated-section"

const features = [
  {
    title: "Symptom Tracking",
    desc: "Record neurological symptoms over time with a guided, structured input flow.",
  },
  {
    title: "Imaging Insights",
    desc: "Summarize MRI findings with clear, human-readable descriptions.",
  },
  {
    title: "Risk Indicators",
    desc: "Surface early warning indicators to support timely clinical follow-up.",
  },
  {
    title: "Privacy First",
    desc: "Local-first UI patterns with minimal data exposure and clear controls.",
  },
]

export default function Features() {
  return (
    <AnimatedSection as="section" className="mx-auto max-w-6xl px-6 py-16" id="features">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-semibold md:text-4xl">Designed for clarity</h2>
        <p className="mt-3 text-pretty text-slate-600">
          A clean, focused interface to support exploration and understanding—fast, accessible, and reliable.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="rounded-lg border border-slate-200 p-5">
            <div className="h-8 w-8 rounded-md bg-teal-600" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}
