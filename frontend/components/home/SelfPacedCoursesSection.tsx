import { selfPacedCourses } from '../../lib/home-data';

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
      <div className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-orange-400" style={{ width: `${value}%` }} />
    </div>
  );
}

export default function SelfPacedCoursesSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-slate-900">Self-Paced Courses</h2>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {selfPacedCourses.map((course) => (
          <article key={course.id} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="font-semibold text-slate-900">{course.title}</h3>
            <p className="mt-1 text-sm text-slate-500">Mentor: {course.mentor}</p>

            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                <span>Progress</span>
                <span>{course.progress}%</span>
              </div>
              <ProgressBar value={course.progress} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
