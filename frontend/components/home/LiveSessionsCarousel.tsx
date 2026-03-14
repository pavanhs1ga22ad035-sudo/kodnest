import { liveSessions } from '../../lib/home-data';

export default function LiveSessionsCarousel() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-slate-900">Live Sessions</h2>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {liveSessions.map((session) => (
          <article key={session.id} className="min-w-[300px] max-w-sm flex-1 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold text-slate-900">{session.title}</h3>
                <p className="text-sm text-slate-500">Mentor: {session.mentor}</p>
              </div>
              <span className={`rounded-full px-2 py-1 text-xs font-semibold ${session.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>
                {session.status}
              </span>
            </div>

            <div className="mt-4 text-sm text-slate-600">
              <p>{session.date}</p>
              <p>{session.time}</p>
            </div>

            <button className="mt-4 w-full rounded-lg border border-amber-300 bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-700 hover:bg-amber-100">
              Get Subscription
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
