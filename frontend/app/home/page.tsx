import HeroSection from '../../components/home/HeroSection';
import LiveSessionsCarousel from '../../components/home/LiveSessionsCarousel';
import SelfPacedCoursesGrid from '../../components/home/SelfPacedCoursesGrid';
import PracticeGrid from '../../components/home/PracticeGrid';
import PlacementAchievementsCarousel from '../../components/home/PlacementAchievementsCarousel';

export default function HomeDashboardPage() {
  return (
    <div className="space-y-8 pb-8">
      <HeroSection />
      <LiveSessionsCarousel />
      <SelfPacedCoursesGrid />
      <PracticeGrid />
      <PlacementAchievementsCarousel />
    </div>
  );
}
