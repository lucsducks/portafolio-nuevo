import Footer from "./components/footer/Footer";
import HeaderHome from "./components/header/HeaderHome";
import Hero from "./components/hero/Hero";
import TeachingOpportunities from "./components/mision/ReasonsToTeach";
import Project from "./components/projects/Project";
import ClientSupport from "./components/support/Achievement";
import ContactForm from "./components/support/ContactForm";

export default function HomePage() {
  return (
    <div className="pt-16">
      <HeaderHome />
      <Hero />
      <TeachingOpportunities />
      <Project />
      <ClientSupport />
      <ContactForm />
      <Footer />
    </div>
  );
}
