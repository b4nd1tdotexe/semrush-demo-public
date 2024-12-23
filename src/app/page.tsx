import Copyrights from '@/components/Copyrights';
import CTA from '@/components/CTA';
import Figures from '@/components/Figures';
import Hat from '@/components/Hat';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Users from '@/components/Users';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Figures />
      <Stats />
      <Hat />
      <Users />
      <CTA />
      <Copyrights />
    </div>
  );
}
