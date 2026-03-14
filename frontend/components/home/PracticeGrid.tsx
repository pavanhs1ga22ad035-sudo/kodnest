import { practiceChallenges } from '../../lib/home-data';

export default function PracticeGrid() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-slate-900">Practice</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {practiceChallenges.map((challenge) => (
          <article key={challenge.id} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="font-semibold text-slate-900">{challenge.name}</h3>
            <p className="mt-1 text-sm text-slate-500">Topic: {challenge.topic}</p>

            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-200">
              <div className="h-full rounded-full bg-black" style={{ width: `${challenge.completion}%` }} />
            </div>

            <p className="mt-2 text-xs font-semibold text-slate-700">{challenge.completion}% complete</p>
          </article>
        ))}
      </div>
    </section>
  );
}
