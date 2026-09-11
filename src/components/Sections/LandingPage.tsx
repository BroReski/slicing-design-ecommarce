import { Header } from '../Layout/Header';
import { Hero } from './Hero';
import { CategorySection } from '../UI/CategoryCard';
import { ProductSection } from './ProductSection';

export default function LandingPage() {
  return (
    <div className="bg-[#FAFBFC] min-h-screen w-full font-poppins text-black pb-20 flex flex-col">
      <Header />
      <main className="max-w-[1280px] mx-auto w-full md:px-[81px] px-4 flex flex-col gap-[80px] mt-[40px]">
        <Hero />
        <CategorySection />
        <ProductSection />
      </main>
    </div>
  );
}
