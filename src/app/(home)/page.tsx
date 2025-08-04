import Footer from "./components/footer/Footer";
import HeaderHome from "./components/header/HeaderHome";
import Hero from "./components/hero/Hero";
import TeachingOpportunities from "./components/mision/ReasonsToTeach";
import ClientSupport from "./components/support/Achievement";
import ContactForm from "./components/support/ContactForm";

export default function HomePage() {
  return (
    <div className="pt-16">
      <HeaderHome />
      <Hero />
      <TeachingOpportunities />
      <ClientSupport />
      <ContactForm />
      <Footer />
    </div>
  );
}
