export default function Home() {
  return (
    <div className="w-full">
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 py-20">
        <div className="max-w-5xl w-full space-y-12">
          <div className="space-y-6">
            <h1 className="text-text-100">
              We ship the next generation of product experiences before the
              market catches up.
            </h1>
            <p className="text-text-300 text-xl md:text-2xl max-w-3xl">
              Co-development in AI, XR, and behaviour-driven systems.
            </p>
          </div>

          <div>
            <a href="#contact" className="btn-primary no-underline">
              Book a 15-min intro
            </a>
          </div>

          <div className="flex flex-wrap gap-4 pt-8">
            <span className="proof-chip">12M+ player launch</span>
            <span className="proof-chip">20%+ onboarding uplift</span>
            <span className="proof-chip">80% completion of 45-min VR</span>
          </div>
        </div>
      </section>
    </div>
  );
}
