// COMPONENTS
import Hero from '../components/hero/hero';
import Features from '../components/features/features';
import Extensions from '../components/extensions/extensions';
import FaqSection from '../components/faq/faq';
import ContactUs from '../components/contact-us/contact-us';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Extensions />
      <FaqSection />
      <ContactUs />

      Features
      Pricing
      Contact
    </>
  )
}
