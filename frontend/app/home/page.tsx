import HeroSection from '../../components/home/HeroSection';
import LiveSessionsSection from '../../components/home/LiveSessionsSection';
import SelfPacedCoursesSection from '../../components/home/SelfPacedCoursesSection';
import PracticeSection from '../../components/home/PracticeSection';
import PlacementAchievementsSection from '../../components/home/PlacementAchievementsSection';

export default function HomeDashboardPage() {
  return (
    <div className="space-y-8 pb-8">
      <HeroSection />
      <LiveSessionsSection />
      <SelfPacedCoursesSection />
      <PracticeSection />
      <PlacementAchievementsSection />
    </div>
  );
}
