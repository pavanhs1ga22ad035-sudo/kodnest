import { selfPacedCourses } from "./mock-data";
import { SectionTitle } from "./section-title";

export function SelfPacedCoursesGrid() {
  return (
    <section>
      <SectionTitle title="Self-Paced Courses" subtitle="Track your progress across enrolled programs" />

      <div className="grid gap-4 md:grid-cols-2">
        {selfPacedCourses.map((course) => (
          <article key={course.id} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900">{course.title}</h3>
                <p className="mt-1 text-sm text-zinc-500">Mentor: {course.mentor}</p>
              </div>
              <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700">
                {course.progressPercent}%
              </span>
            </div>

            <div className="h-2 w-full rounded-full bg-zinc-100">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500"
                style={{ width: `${course.progressPercent}%` }}
              />
            </div>

            <p className="mt-3 text-sm text-zinc-600">
              {course.completedTopics}/{course.totalTopics} topics completed
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
