import {
  FAQ,
  // Featured,
  // FinancialFuture,
  // FinancilaFreedom,
  HeroSection,
  // IntroSection,
  // JoinSection,
  // OffersSection,
  // WhoIAm,
  // OurServices,
  // CoFounder,
} from '@/components';
// import OurServices from '@/components/UI/OurServices';
import OurServices from '@/components/UI/OurServices/ourServices';
// import WhoIAm from '@/components/UI/WhoIAm/WhoIAm';
// import CoFounder from '@/components/UI/CoFounder/CoFounder';
import Portfolio from '@/components/UI/Portfolio/Portfolio';
// import MyClients from '@/components/UI/MyClients/MyClients'; // Corrected import
import OurClients from '@/components/UI/OurClients/OurClients';
import CreativeApproach from '@/components/UI/CreativeApproach/CreativeApproach';
import ContactUs from '@/components/UI/ContactUs/ContactUs';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OurServices />
      {/* <Featured /> */}
      {/* <WhoIAm /> */}
      {/* <CoFounder /> */}
      <Portfolio />
      <OurClients />
      <CreativeApproach/>
      {/* <OffersSection /> */}
      {/* <FinancilaFreedom /> */}
      {/* <FinancialFuture /> */}
      {/* <IntroSection /> */}
      {/* <JoinSection /> */}
      <FAQ />
      <ContactUs/>
    </main>
  );
}
