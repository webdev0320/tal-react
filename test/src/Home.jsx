import HeroBanner from './components/HeroBanner';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Expertise from './components/Expertise';
import Partners from './components/Partners';
import ContactSection from './components/ContactSection';
import Achievements from './components/Achievements';
import OnlineAccountants from './components/OnlineAccountants';
import ContactForm from './components/ContactForm';
import TargetSegments from './components/TargetSegments';
import SwitchAccountantsCTA from './components/SwitchAccountantsCTA';
import StatsCounter from './components/StatsCounter';
import TopRatedCTA from './components/TopRatedCTA';
import ReviewsSlider from './components/ReviewsSlider';
import TeamRefer from './components/TeamRefer';
import FAQSection from './components/FAQSection';

function Home() {
  return (
    <div>
      <HeroBanner />
      <Hero />
      <WhyChooseUs />
      <Expertise />
      <Partners />
      <ContactSection />
      <Achievements />
      <OnlineAccountants />
      <ContactForm />
      <TargetSegments />
      <SwitchAccountantsCTA />
      <StatsCounter />
      <TopRatedCTA />
      <ReviewsSlider />
      <TeamRefer />
      <FAQSection />
    </div>
  )
}

export default Home;
