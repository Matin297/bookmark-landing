// COMPONENTS
import Hero from '../components/hero/hero';
import Features from '../components/features/features';
import Extensions from '../components/extensions/extensions';
import FaqSection from '../components/faq/faq';
import ContactUs from '../components/contact-us/contact-us';
import Footer from '../components/footer/footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Extensions />
      <FaqSection />
      <ContactUs />
    </>
  )
}
