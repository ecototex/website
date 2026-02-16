import { motion } from 'framer-motion';
import flowerDivider from '../assets/flower-divider.json';
import LazyLottie from './LazyLottie';

const AboutSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-leafGreen/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sageTint/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Headline & Founder */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-miluno text-black text-5xl md:text-6xl mb-8 tracking-wide leading-tight">
              SUSTAINABILITY <br/>
              <span className="text-leafGreen font-milonga text-4xl md:text-5xl">meets style.</span>
            </h2>
            
            <div className="space-y-6 text-deepSlate/80 text-lg leading-relaxed font-inter">
              <p>
                At <span className="font-bold text-deepSlate">Eco Totex Bags</span>, we believe that responsible choices shouldn't compromise on elegance. 
                Founded by <span className="font-bold text-deepSlate">Rajini K. S.</span>, our mission is to redefine how you carry your world—replacing single-use plastics with durable, eco-friendly artistry.
              </p>
              <div className="h-1 w-20 bg-leafGreen/50 rounded-full" />
            </div>
          </motion.div>

          {/* Right Column: Mission cards */}
          <div className="space-y-6">
            <motion.div 
              className="bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-white shadow-lg shadow-sageTint/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-miluno text-xl text-deepSlate mb-3">CRAFTED FOR LIFE</h3>
              <p className="text-deepSlate/70 font-inter">
                From trendy totes and travel weekends to functional slings, every product is engineered for the modern lifestyle. We craft companions for your journey that care for the planet as much as you do.
              </p>
            </motion.div>

            <motion.div 
              className="bg-deepSlate p-8 rounded-3xl shadow-xl text-white relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-leafGreen/20 rounded-full blur-2xl translate-x-10 -translate-y-10" />
              <h3 className="font-miluno text-xl text-leafGreen mb-3">BEYOND BAGS</h3>
              <p className="text-white/80 font-inter">
                We extend our eco-conscious philosophy to your home with natural sandal and neem soaps. Promoting a healthier, chemical-free way of living is at the core of everything we do.
              </p>
            </motion.div>
          </div>

        </div>

        {/* Bottom Tagline */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
            <p className="text-xl md:text-2xl text-deepSlate/60 max-w-2xl mx-auto font-milonga leading-relaxed">
                "Your partner in carrying style, comfort, and a greener tomorrow."
            </p>
            
            <div className="w-full max-w-md mx-auto mt-8 opacity-60">
                <LazyLottie 
                    animationData={flowerDivider} 
                    loop={true}
                    autoplay={true}
                    className="w-full h-24"
                />
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
