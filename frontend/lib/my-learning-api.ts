import type { CourseTab, EnrolledCourse } from "@/components/my-learning/types";

export type MyLearningApiResponse = {
  courses: EnrolledCourse[];
  summary: Record<CourseTab, number>;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000/api";

export async function fetchMyLearningCourses(status: CourseTab): Promise<MyLearningApiResponse> {
  const url = new URL(`${API_BASE_URL}/my-learning/courses`);
  url.searchParams.set("status", status);

  const response = await fetch(url.toString(), {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch my learning courses.");
  }

  return (await response.json()) as MyLearningApiResponse;
}
