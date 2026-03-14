"use client";

import { useEffect, useMemo, useState } from "react";
import { fetchMyLearningCourses } from "@/lib/my-learning-api";
import type { CourseTab, EnrolledCourse, Module, Topic } from "./types";

const tabs: CourseTab[] = ["Inprogress", "Completed", "Upcoming"];

type ActiveTopicState = {
  course: EnrolledCourse;
  module: Module;
  topic: Topic;
};

export function CourseLearningWorkspace() {
  const [activeTab, setActiveTab] = useState<CourseTab>("Inprogress");
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(null);
  const [activeTopicState, setActiveTopicState] = useState<ActiveTopicState | null>(null);
  const [courses, setCourses] = useState<EnrolledCourse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadCourses() {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchMyLearningCourses(activeTab);
        if (mounted) {
          setCourses(data.courses);
        }
      } catch {
        if (mounted) {
          setError("Unable to load courses right now. Please try again.");
          setCourses([]);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadCourses();

    return () => {
      mounted = false;
    };
  }, [activeTab]);

  const filteredCourses = useMemo(() => courses, [courses]);

  const handleTopicSelect = (course: EnrolledCourse, module: Module, topic: Topic) => {
    setActiveTopicState({ course, module, topic });
  };

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-zinc-900">My Learning</h1>
        <p className="mt-1 text-sm text-zinc-500">Browse enrolled courses by status and open any topic to start learning.</p>

        <div className="mt-5 flex flex-wrap gap-2 border-b border-zinc-200 pb-3">
          {tabs.map((tab) => {
            const isActive = tab === activeTab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => {
                  setActiveTab(tab);
                  setExpandedCourseId(null);
                  setActiveTopicState(null);
                }}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-zinc-900 text-yellow-300"
                    : "border border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        <div className="mt-5 space-y-3">
          {loading ? <p className="text-sm text-zinc-500">Loading courses...</p> : null}
          {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}

          {!loading && !error && filteredCourses.length === 0 ? (
            <p className="rounded-xl border border-dashed border-zinc-300 p-4 text-sm text-zinc-500">
              No courses found in the <strong>{activeTab}</strong> tab.
            </p>
          ) : null}

          {!loading && !error
            ? filteredCourses.map((course) => {
                const isOpen = expandedCourseId === course.id;
                return (
                  <article key={course.id} className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
                    <button
                      type="button"
                      onClick={() => setExpandedCourseId(isOpen ? null : course.id)}
                      className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                    >
                      <div>
                        <h2 className="text-lg font-semibold text-zinc-900">{course.title}</h2>
                        <p className="mt-1 text-sm text-zinc-500">Mentor: {course.mentor}</p>
                      </div>
                      <div className="min-w-[130px] text-right">
                        <p className="text-sm font-semibold text-zinc-700">{course.progressPercent}% complete</p>
                        <p className="text-xs text-zinc-500">{isOpen ? "Hide syllabus" : "View syllabus"}</p>
                      </div>
                    </button>

                    {isOpen ? (
                      <div className="border-t border-zinc-200 bg-white p-4 md:p-5">
                        <div className="space-y-4">
                          {course.modules.map((module) => (
                            <section key={module.id} className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                              <h3 className="text-sm font-bold uppercase tracking-wide text-zinc-700">{module.title}</h3>
                              <ul className="mt-3 space-y-2">
                                {module.topics.map((topic) => {
                                  const isSelected = activeTopicState?.topic.id === topic.id;
                                  return (
                                    <li key={topic.id}>
                                      <button
                                        type="button"
                                        onClick={() => handleTopicSelect(course, module, topic)}
                                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition ${
                                          isSelected
                                            ? "bg-yellow-50 text-zinc-900 ring-1 ring-yellow-400"
                                            : "bg-white text-zinc-700 hover:bg-zinc-100"
                                        }`}
                                      >
                                        <span>{topic.title}</span>
                                        <span className="text-xs text-zinc-500">{topic.duration}</span>
                                      </button>
                                    </li>
                                  );
                                })}
                              </ul>
                            </section>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </article>
                );
              })
            : null}
        </div>
      </section>

      {activeTopicState ? <TopicPlayerPanel activeTopicState={activeTopicState} onTopicSelect={handleTopicSelect} /> : null}
    </div>
  );
}

type TopicPlayerPanelProps = {
  activeTopicState: ActiveTopicState;
  onTopicSelect: (course: EnrolledCourse, module: Module, topic: Topic) => void;
};

function TopicPlayerPanel({ activeTopicState, onTopicSelect }: TopicPlayerPanelProps) {
  const { course, module, topic } = activeTopicState;

  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm md:p-5">
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Now Learning</p>
        <h2 className="mt-1 text-xl font-bold text-zinc-900">{topic.title}</h2>
        <p className="text-sm text-zinc-500">
          {course.title} • {module.title}
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[7fr_3fr]">
        <div className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-900">
          <video key={topic.id} controls controlsList="nodownload" className="aspect-video h-full w-full" src={topic.videoUrl}>
            Your browser does not support the video tag.
          </video>
          <div className="border-t border-zinc-800 px-4 py-3 text-xs text-zinc-300">
            Tip: use the video gear icon for playback speed (0.5x to 2x).
          </div>
        </div>

        <aside className="max-h-[520px] overflow-y-auto rounded-xl border border-zinc-200 bg-zinc-50 p-3">
          <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-zinc-700">Module Topics</h3>
          <ul className="space-y-2">
            {module.topics.map((moduleTopic) => {
              const isCurrent = moduleTopic.id === topic.id;
              return (
                <li key={moduleTopic.id}>
                  <button
                    type="button"
                    onClick={() => onTopicSelect(course, module, moduleTopic)}
                    className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                      isCurrent
                        ? "bg-yellow-50 text-zinc-900 ring-1 ring-yellow-400"
                        : "bg-white text-zinc-700 hover:bg-zinc-100"
                    }`}
                  >
                    <p className="font-medium">{moduleTopic.title}</p>
                    <p className="mt-1 text-xs text-zinc-500">{moduleTopic.duration}</p>
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
    </section>
  );
}
