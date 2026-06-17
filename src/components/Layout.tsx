import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import BioSection from './BioSection';
import PlanGobierno from './PlanGobierno';
import VideosSection from './VideosSection';
import WalksCarousel from './WalksCarousel';
import JoinForm from './JoinForm';
import Footer from './Footer';
import RoadScrollBackground from './RoadScrollBackground';
import Seo from './Seo';
import { getRouteByPath, SITE_ROUTES } from '../lib/routes';
import { scrollToSectionAfterPaint } from '../lib/scrollToSection';

const KNOWN_PATHS = new Set(SITE_ROUTES.map((route) => route.path));

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const route = getRouteByPath(location.pathname);

  useEffect(() => {
    if (location.pathname === '/agenda') {
      navigate('/videos', { replace: true });
      return;
    }
    if (!KNOWN_PATHS.has(location.pathname)) {
      navigate('/', { replace: true });
      return;
    }
    scrollToSectionAfterPaint(route.sectionId);
  }, [location.pathname, route.sectionId, navigate]);

  const goToUnete = () => navigate('/unete');

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-[#FFCA00] selection:text-black">
      <Seo title={route.title} description={route.description} path={route.path} />
      <Navbar />
      <RoadScrollBackground />

      <div id="light-sections" className="relative bg-white">
        <div className="relative z-10">
          <Hero onJoinClick={goToUnete} />
          <BioSection />
          <PlanGobierno />
          <WalksCarousel />
          <VideosSection />
        </div>
      </div>

      <JoinForm />
      <Footer />
    </div>
  );
}
