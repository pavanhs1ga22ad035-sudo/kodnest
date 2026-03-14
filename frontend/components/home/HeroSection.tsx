export default function HeroSection() {
  return (
    <section className="rounded-2xl border border-amber-400/40 bg-gradient-to-r from-slate-900 to-slate-800 p-6 text-white shadow-lg">
      <p className="text-xs font-bold tracking-[0.2em] text-amber-300">FROM LEARNING TO EARNING</p>
      <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-extrabold leading-tight sm:text-3xl">Ready for your dream job, Pavan H.S?</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-200 sm:text-base">
            You completed <span className="font-semibold text-amber-300">34 sessions</span>, finished{' '}
            <span className="font-semibold text-amber-300">7 projects</span>, and your interview readiness is{' '}
            <span className="font-semibold text-amber-300">88%</span>.
          </p>
        </div>

        <button className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 px-6 text-sm font-bold text-slate-900 hover:opacity-90">
          Chat with AI Mentor →
        </button>
      </div>
    </section>
  );
}
