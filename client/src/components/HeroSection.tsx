import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 250]); // Parallax effect

  return (
    <div className="relative h-[500px] overflow-hidden">
      {/* Background with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 ease-linear"
      >
         <div className="absolute inset-0 bg-black/30 z-10 mix-blend-multiply" />
         <img 
           src="/assets/images/parallax_hero_background.png" 
           alt="Hero Background" 
           className="w-full h-full object-cover"
         />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6">
        <img 
            src="/assets/images/ECO TOTEX_header_logo.png" 
            alt="ECOTOTEX" 
            className="h-24 md:h-32 object-contain drop-shadow-lg mb-4"
        />
        <p className="font-milonga text-xl text-white/90 mt-4 max-w-lg drop-shadow-md">
            Sustainable. Durable. Beautiful.
        </p>
        <button 
            onClick={() => document.getElementById('products-grid')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-8 px-8 py-3 bg-white/20 backdrop-blur-md border border-white/50 text-white rounded-full font-bold hover:bg-white/30 transition-all cursor-pointer"
        >
            EXPLORE COLLECTION
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
