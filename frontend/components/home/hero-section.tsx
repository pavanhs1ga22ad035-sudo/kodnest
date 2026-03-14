export function HeroSection() {
  return (
    <section className="rounded-3xl border border-yellow-500/70 bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-800 p-6 shadow-xl md:p-8">
      <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">From Learning To Earning</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-yellow-400 md:text-4xl">
            Ready for your dream job, Pavan H.S?
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-zinc-100 md:text-base">
            You are 72% through your placement journey. Keep your streak alive with one live class and two coding
            challenges today.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-semibold text-yellow-300">Learn</span>
            <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-semibold text-yellow-300">Build</span>
            <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-semibold text-yellow-300">Achieve</span>
          </div>
        </div>

        <article className="rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 p-5 text-zinc-900">
          <h3 className="text-2xl font-extrabold">Meet BroKod</h3>
          <p className="mt-2 text-sm font-medium text-zinc-800">
            Your AI learning assistant, available 24/7 for doubts, interview prep, and coding guidance.
          </p>
          <div className="mt-5">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-yellow-300 transition hover:bg-black"
            >
              Chat with BroKod →
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
