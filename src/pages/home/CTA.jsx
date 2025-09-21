import AnimatedSection from "@/components/animated-section"

export default function CTA() {
  return (
    <AnimatedSection as="section" className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-xl border border-slate-200 bg-white p-8 md:p-10">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-balance text-2xl font-semibold md:text-3xl">Ready to explore?</h3>
            <p className="mt-2 text-slate-600">
              Start with a guided demo flow and see how insights appear as you add details.
            </p>
          </div>
          <div className="flex md:justify-end">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-teal-600 px-5 py-2.5 text-white shadow-sm transition-colors hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
