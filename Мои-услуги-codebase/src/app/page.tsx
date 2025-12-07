import Header from '@/components/Header';
import Services from '@/components/Services';
import GiftCertificates from '@/components/GiftCertificates';
import JoinClub from '@/components/JoinClub';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Services />
      <GiftCertificates />
      <JoinClub />
      <About />
      <Footer />
    </div>
  );
}