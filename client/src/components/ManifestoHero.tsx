import { motion } from 'framer-motion';

const ManifestoHero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deepEarth">
            {/* Background Texture */}
            <motion.div
                className="absolute inset-0 z-0"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 8, ease: 'easeOut' }}
            >
                <div className="absolute inset-0 bg-deepEarth/70 z-10" />
                <img
                    src={`${import.meta.env.BASE_URL}assets/images/parallax_hero_background.png`}
                    alt=""
                    className="w-full h-full object-cover opacity-40"
                    loading="eager"
                />
            </motion.div>

            {/* Grain Overlay */}
            <div className="absolute inset-0 z-20 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                    backgroundSize: '128px',
                }}
            />

            {/* Hero Content */}
            <div className="relative z-30 text-center px-gutter max-w-5xl mx-auto">
                {/* Logo */}
                <motion.img
                    src={`${import.meta.env.BASE_URL}assets/images/ECO TOTEX_header_logo.png`}
                    alt="Eco Totex"
                    className="h-12 md:h-16 object-contain mx-auto mb-16 opacity-70"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ duration: 1, delay: 0.3 }}
                />

                {/* Manifesto Text */}
                <div className="space-y-4 md:space-y-6">
                    <motion.p
                        className="font-editorial text-warmCream/60 text-lg md:text-2xl font-light italic"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        We took from nature for years.
                    </motion.p>

                    <motion.h1
                        className="font-editorial text-warmCream text-display font-light leading-[1.05]"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        Now we return.
                    </motion.h1>
                </div>

                {/* Divider */}
                <motion.div
                    className="w-16 h-px bg-sandDrift/30 mx-auto my-10 md:my-14"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                />

                {/* Tagline */}
                <motion.p
                    className="font-body text-warmCream/50 text-sm md:text-base tracking-wide max-w-md mx-auto mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                >
                    Handcrafted bags replacing single-use plastics.
                    <br className="hidden md:block" />
                    A movement, not a product.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.9 }}
                >
                    <button
                        onClick={() => document.getElementById('founder-story')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-3.5 bg-warmCream text-deepEarth font-body font-medium text-sm tracking-wider rounded-full hover:bg-sandDrift transition-all duration-300"
                    >
                        JOIN THE CHANGE
                    </button>
                    <button
                        onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-3.5 border border-warmCream/30 text-warmCream/80 font-body font-medium text-sm tracking-wider rounded-full hover:border-warmCream/60 hover:text-warmCream transition-all duration-300"
                    >
                        SHOP CONSCIOUSLY
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
            >
                <motion.div
                    className="w-5 h-8 border border-warmCream/30 rounded-full flex items-start justify-center p-1"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-1 h-2 bg-warmCream/50 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ManifestoHero;
