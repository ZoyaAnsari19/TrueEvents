import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import EventPlatform from './components/EventPlatform';
import Features from './components/Features';
import FeatureDemo from './components/FeatureDemo';
import Resources from './components/Resources';
import Articles from './components/Articles';
import BookSection from './components/BookSection';
import Footer from './components/Footer';
import "./globals.css";

export default function Home() {
  return (
    <>
     <Header />
     <Hero />
     <About />
     <EventPlatform />
     <Features />
     <FeatureDemo />
     <Resources />
     <Articles />
     <BookSection />
     <Footer />
    </>
  );
}
