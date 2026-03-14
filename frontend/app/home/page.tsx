import { HeroSection } from "@/components/home/hero-section";
import { LiveSessionsCarousel } from "@/components/home/live-sessions-carousel";
import { PlacementAchievementsCarousel } from "@/components/home/placement-achievements-carousel";
import { PracticeGrid } from "@/components/home/practice-grid";
import { SelfPacedCoursesGrid } from "@/components/home/self-paced-courses-grid";

export default function HomeDashboardPage() {
  return (
    <div className="space-y-10 pb-6">
      <HeroSection />
      <LiveSessionsCarousel />
      <SelfPacedCoursesGrid />
      <PracticeGrid />
      <PlacementAchievementsCarousel />
    </div>
  );
}
