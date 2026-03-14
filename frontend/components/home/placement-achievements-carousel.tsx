import { placementStories } from "./mock-data";
import { SectionTitle } from "./section-title";

export function PlacementAchievementsCarousel() {
  return (
    <section>
      <SectionTitle title="Placement Achievements" subtitle="Success stories from recent KodNest hires" />

      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
        {placementStories.map((story) => (
          <article
            key={story.id}
            className="min-w-[280px] snap-start rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm md:min-w-[320px]"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-sm font-bold text-yellow-300">
                {story.studentPhoto}
              </div>
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-xs font-bold text-zinc-700">
                {story.companyLogo}
              </div>
            </div>

            <h3 className="mt-4 text-lg font-bold text-zinc-900">{story.studentName}</h3>
            <p className="text-sm text-zinc-600">{story.role}</p>
            <p className="mt-1 text-sm font-medium text-zinc-500">{story.company}</p>

            <div className="mt-4 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
              {story.salaryLpa}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
