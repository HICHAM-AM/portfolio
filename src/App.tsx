import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Pillars } from './components/Pillars';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { SkillsSection } from './components/SkillsSection';
import { SecurityAuditSection } from './components/SecurityAuditSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('accueil');
  const [prefilledMessage, setPrefilledMessage] = useState<string>('');

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = ['accueil', 'projets', 'services', 'competences', 'securite', 'parcours', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // When a user selects a project or custom scope for a quote
  const handleSelectProjectForQuote = (projectName: string) => {
    setPrefilledMessage(
      `Bonjour Hicham,\n\nJe suis très intéressé par vos réalisations, en particulier sur le projet "${projectName}".\n\nJ'ai un projet similaire en tête et je souhaiterais échanger sur la faisabilité technique, les délais de livraison et le budget estimé.`
    );
    const contactElem = document.getElementById('contact');
    contactElem?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleConfigureProject = (configSummary: string) => {
    setPrefilledMessage(configSummary);
    const contactElem = document.getElementById('contact');
    contactElem?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#080a0f] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-black">
      {/* Fixed Navigation Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Hero />
        <Pillars />
        <ProjectsSection onSelectProjectForQuote={handleSelectProjectForQuote} />
        <ServicesSection onConfigureProject={handleConfigureProject} />
        <SkillsSection />
        <SecurityAuditSection />
        <ExperienceSection />
        <ContactSection prefilledMessage={prefilledMessage} />
      </main>

      {/* Complete Footer with Interconnected Links */}
      <Footer />
    </div>
  );
}

export default App;
