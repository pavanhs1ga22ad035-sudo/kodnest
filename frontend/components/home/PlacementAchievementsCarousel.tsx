import { placementStories } from '../../lib/home-data';

export default function PlacementAchievementsCarousel() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-slate-900">Placement Achievements</h2>

      <div className="flex gap-4 overflow-x-auto pb-2">
        {placementStories.map((story) => (
          <article key={story.id} className="min-w-[280px] rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <img src={story.studentPhoto} alt={story.studentName} className="h-12 w-12 rounded-full object-cover" />
              <div>
                <h3 className="font-semibold text-slate-900">{story.studentName}</h3>
                <p className="text-sm text-slate-500">{story.role}</p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between rounded-lg bg-slate-50 p-3">
              <div className="flex items-center gap-2">
                <img src={story.companyLogo} alt={story.company} className="h-7 w-7 rounded bg-white p-1" />
                <span className="text-sm font-medium text-slate-700">{story.company}</span>
              </div>
              <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-bold text-yellow-700">{story.packageLpa}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
