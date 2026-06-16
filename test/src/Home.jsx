import HeroBanner from './components/HeroBanner';
import ReviewsBadge from './components/ReviewsBadge';
import WhyChooseUs from './components/WhyChooseUs';
import Expertise from './components/Expertise';
import Partners from './components/Partners';
import AboutUsSection from './components/AboutUsSection';
import ContactSection from './components/ContactSection';
import Achievements from './components/Achievements';
import OnlineAccountants from './components/OnlineAccountants';
import ContactForm from './components/ContactForm';
import TargetSegments from './components/TargetSegments';
import SwitchAccountantsCTA from './components/SwitchAccountantsCTA';
import StatsCounter from './components/StatsCounter';
import SoftwareSection from './components/SoftwareSection';
import TopRatedCTA from './components/TopRatedCTA';
import ReviewsSlider from './components/ReviewsSlider';
import TeamRefer from './components/TeamRefer';
import FAQSection from './components/FAQSection';
import HomeContact from './components/HomeContact';
function Home() {
  return (
    <div>
      <HeroBanner />
      <div className="-mt-16"><ReviewsBadge /></div>
      <WhyChooseUs />
      <Expertise />
      <Partners />
      <ContactSection />
      <AboutUsSection />      
      <Achievements />
      <OnlineAccountants />
      <ContactForm />
      <TargetSegments />
      <SwitchAccountantsCTA />
      <StatsCounter />
      <TopRatedCTA />
      <ReviewsSlider />
      <SoftwareSection />
      <TeamRefer />
      <FAQSection />
      <HomeContact />
      
    </div>
  )
}

export default Home;
