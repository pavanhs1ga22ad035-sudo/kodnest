import { practiceChallenges } from "./mock-data";
import { SectionTitle } from "./section-title";

export function PracticeGrid() {
  return (
    <section>
      <SectionTitle title="Practice" subtitle="Daily coding challenges and completion trend" />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {practiceChallenges.map((challenge) => (
          <article key={challenge.id} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{challenge.category}</p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">{challenge.title}</h3>
            <p className="mt-1 text-sm text-zinc-500">{challenge.totalProblems} problems</p>

            <div className="mt-4 h-2 w-full rounded-full bg-zinc-100">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-zinc-900 to-yellow-500"
                style={{ width: `${challenge.completedPercent}%` }}
              />
            </div>

            <p className="mt-3 text-sm font-semibold text-zinc-700">{challenge.completedPercent}% completed</p>
          </article>
        ))}
      </div>
    </section>
  );
}
