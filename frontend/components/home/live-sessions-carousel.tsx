import { liveSessions } from "./mock-data";
import { SectionTitle } from "./section-title";

function SessionStatusBadge({ status }: { status: "Upcoming" | "Completed" }) {
  const statusClass =
    status === "Completed"
      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
      : "bg-blue-50 text-blue-700 border-blue-200";

  return <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClass}`}>{status}</span>;
}

export function LiveSessionsCarousel() {
  return (
    <section>
      <SectionTitle title="Live Sessions" subtitle="Upcoming and completed live classes" />

      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
        {liveSessions.map((session) => (
          <article
            key={session.id}
            className="min-w-[300px] snap-start rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm md:min-w-[360px]"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <h3 className="line-clamp-2 text-lg font-semibold text-zinc-900">{session.title}</h3>
                <p className="mt-1 text-sm text-zinc-500">{session.mentor}</p>
              </div>
              <SessionStatusBadge status={session.status} />
            </div>

            <div className="grid grid-cols-2 gap-4 rounded-xl bg-zinc-50 p-3 text-sm">
              <div>
                <p className="text-zinc-500">Date</p>
                <p className="font-semibold text-zinc-800">{session.dateLabel}</p>
              </div>
              <div>
                <p className="text-zinc-500">Time</p>
                <p className="font-semibold text-zinc-800">{session.timeLabel}</p>
              </div>
            </div>

            <button
              type="button"
              className="mt-4 w-full rounded-full border border-yellow-500 bg-yellow-400 px-4 py-2.5 text-sm font-semibold text-zinc-900 hover:bg-yellow-300"
            >
              Get Subscription
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
