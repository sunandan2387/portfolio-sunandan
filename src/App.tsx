import { ThemeProvider } from './components/ThemeContext';
import CustomCursor from './components/CustomCursor';
import FloatingShapes from './components/FloatingShapes';
import FloatingNavbar from './components/FloatingNavbar';
import ScrollProgress from './components/ScrollProgress';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        {/* Custom cursor */}
        <CustomCursor />

        {/* Scroll progress indicator */}
        <ScrollProgress />

        {/* Floating navigation */}
        <FloatingNavbar />

        {/* Floating 3D background shapes */}
        <FloatingShapes />

        {/* Main content */}
        <main className="relative z-10">
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>

        {/* Toast notifications */}
        <Toaster position="bottom-right" theme="dark" />
      </div>
    </ThemeProvider>
  );
}
