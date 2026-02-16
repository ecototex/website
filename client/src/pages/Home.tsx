
import { Bag } from '../types';
import HeroSection from '../components/HeroSection';
import StorySection from '../components/StorySection';
import ProductCard from '../components/ProductCard';
import AboutSection from '../components/AboutSection';

import WhyChoose from '../components/WhyChoose';
import Footer from '../components/Footer';



const Home = ({ bags }: { bags: Bag[] }) => {

  return (
    <div className="min-h-screen bg-sageTint">
      <HeroSection />
      
      <div className="relative z-10 -mt-20 rounded-t-[40px] bg-sageTint overflow-hidden">
        <StorySection />
        <AboutSection />
        
        {/* Product Grid */}
        {/* Product Grid Section */}
        <section id="products-grid" className="px-6 py-24 relative z-10">
            <div className="max-w-6xl mx-auto mb-16 text-center">
                <span className="text-leafGreen font-mono text-sm tracking-[0.2em] uppercase font-bold mb-4 block">
                    Discover Our Range
                </span>
                <h2 className="font-miluno text-5xl text-black mb-6">
                    Curated Collection
                </h2>
                <div className="h-1 w-24 bg-deepSlate/10 mx-auto rounded-full" />
            </div>

            {bags.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 opacity-60">
                    <div className="w-12 h-12 border-4 border-leafGreen border-t-transparent rounded-full animate-spin mb-4" />
                    <span className="font-mono text-deepSlate text-sm tracking-widest">LOADING COLLECTION...</span>
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-16 max-w-7xl mx-auto">
                    {bags.map(bag => (
                        <ProductCard key={bag.code} bag={bag} />
                    ))}
                </div>
            )}
        </section>


        <WhyChoose />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
