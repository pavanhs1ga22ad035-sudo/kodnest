'use client';

import { useMemo, useState } from 'react';
import type { LearningCourse, Module, Topic } from '../../lib/my-learning-data';
import { learningCourses } from '../../lib/my-learning-data';

type TabKey = 'Inprogress' | 'Completed' | 'Upcoming';

const tabs: TabKey[] = ['Inprogress', 'Completed', 'Upcoming'];

function CourseTabs({ activeTab, onTabChange }: { activeTab: TabKey; onTabChange: (tab: TabKey) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            activeTab === tab ? 'bg-black text-yellow-300' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

function CourseCard({
  course,
  expanded,
  onToggle,
  onSelectTopic,
  activeTopicId
}: {
  course: LearningCourse;
  expanded: boolean;
  onToggle: () => void;
  onSelectTopic: (module: Module, topic: Topic) => void;
  activeTopicId?: string;
}) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <button onClick={onToggle} className="flex w-full items-center justify-between gap-4 p-4 text-left">
        <div>
          <h3 className="font-bold text-slate-900">{course.title}</h3>
          <p className="text-sm text-slate-500">Mentor: {course.mentor} • Track: {course.track}</p>
        </div>
        <div className="min-w-28 text-right">
          <p className="text-xs font-semibold text-slate-500">Progress</p>
          <p className="text-sm font-bold text-slate-800">{course.progress}%</p>
        </div>
      </button>

      {expanded && (
        <div className="border-t border-slate-200 p-4">
          <div className="space-y-3">
            {course.modules.map((module) => (
              <div key={module.id} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-sm font-semibold text-slate-800">{module.title}</p>
                <ul className="mt-2 space-y-2">
                  {module.topics.map((topic) => (
                    <li key={topic.id}>
                      <button
                        onClick={() => onSelectTopic(module, topic)}
                        className={`flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-sm ${
                          activeTopicId === topic.id ? 'bg-yellow-100 text-slate-900' : 'hover:bg-white'
                        }`}
                      >
                        <span className="font-medium">{topic.title}</span>
                        <span className="text-xs text-slate-500">{topic.duration}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

function VideoLearningInterface({
  selectedModule,
  selectedTopic,
  onSelectTopic
}: {
  selectedModule?: Module;
  selectedTopic?: Topic;
  onSelectTopic: (topic: Topic) => void;
}) {
  if (!selectedModule || !selectedTopic) {
    return (
      <section className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
        Select a topic from the syllabus to start learning.
      </section>
    );
  }

  return (
    <section className="grid gap-4 lg:grid-cols-10">
      <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:col-span-7">
        <div className="aspect-video overflow-hidden rounded-lg bg-black">
          <iframe
            src={selectedTopic.videoUrl}
            title={selectedTopic.title}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="mt-3">
          <h3 className="text-lg font-bold text-slate-900">{selectedTopic.title}</h3>
          <p className="text-sm text-slate-600">Module: {selectedModule.title} • Duration: {selectedTopic.duration}</p>
          <p className="mt-1 text-xs text-slate-500">Tip: Use YouTube settings ⚙ to control playback speed.</p>
        </div>
      </div>

      <aside className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:col-span-3">
        <h4 className="text-sm font-bold text-slate-800">Topics in {selectedModule.title}</h4>
        <div className="mt-3 max-h-[420px] space-y-2 overflow-y-auto pr-1">
          {selectedModule.topics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => onSelectTopic(topic)}
              className={`w-full rounded-lg border px-3 py-2 text-left ${
                selectedTopic.id === topic.id ? 'border-yellow-300 bg-yellow-50' : 'border-slate-200 hover:bg-slate-50'
              }`}
            >
              <p className="text-sm font-semibold text-slate-800">{topic.title}</p>
              <p className="text-xs text-slate-500">{topic.duration}</p>
            </button>
          ))}
        </div>
      </aside>
    </section>
  );
}

export default function MyLearningClassListPage() {
  const [activeTab, setActiveTab] = useState<TabKey>('Inprogress');
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(null);
  const [selectedModule, setSelectedModule] = useState<Module | undefined>();
  const [selectedTopic, setSelectedTopic] = useState<Topic | undefined>();

  const filteredCourses = useMemo(
    () => learningCourses.filter((course) => course.status === activeTab),
    [activeTab]
  );

  const handleTabChange = (tab: TabKey) => {
    setActiveTab(tab);
    setExpandedCourseId(null);
    setSelectedModule(undefined);
    setSelectedTopic(undefined);
  };

  const handleSelectTopic = (module: Module, topic: Topic) => {
    setSelectedModule(module);
    setSelectedTopic(topic);
  };

  return (
    <div className="space-y-6">
      <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900">My Learning Classes</h1>
            <p className="text-sm text-slate-500">Track your courses, open syllabus, and play each class topic.</p>
          </div>
          <CourseTabs activeTab={activeTab} onTabChange={handleTabChange} />
        </div>
      </section>

      <section className="space-y-3">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            expanded={expandedCourseId === course.id}
            onToggle={() => setExpandedCourseId(expandedCourseId === course.id ? null : course.id)}
            onSelectTopic={handleSelectTopic}
            activeTopicId={selectedTopic?.id}
          />
        ))}

        {filteredCourses.length === 0 && (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white p-6 text-center text-sm text-slate-500">
            No courses found for {activeTab}.
          </div>
        )}
      </section>

      <VideoLearningInterface
        selectedModule={selectedModule}
        selectedTopic={selectedTopic}
        onSelectTopic={(topic) => setSelectedTopic(topic)}
      />
    </div>
  );
}
