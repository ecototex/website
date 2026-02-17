import { motion } from 'framer-motion';

const MovementCTA = () => {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center bg-deepEarth overflow-hidden">
            {/* Grain Overlay */}
            <div className="absolute inset-0 z-10 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                    backgroundSize: '128px',
                }}
            />

            {/* Subtle Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-clayBrown/5 blur-3xl" />

            <div className="relative z-20 text-center px-gutter max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <p className="font-editorial text-warmCream/50 text-lg md:text-2xl font-light italic mb-6">
                        You don't need to change your life.
                    </p>

                    <h2 className="font-editorial text-display text-warmCream font-light leading-[1.1] mb-8">
                        Just change
                        <br />
                        <span className="italic text-sandDrift">what you carry.</span>
                    </h2>

                    {/* Divider */}
                    <motion.div
                        className="w-16 h-px bg-sandDrift/30 mx-auto my-10 md:my-14"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    />

                    <p className="font-body text-warmCream/40 text-sm md:text-base mb-12 max-w-md mx-auto">
                        Join thousands who've made the switch. Start with one bag. That's all it takes.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://wa.me/917356939056?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Eco%20Totex%20bags."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3.5 bg-warmCream text-deepEarth font-body font-medium text-sm tracking-wider rounded-full hover:bg-sandDrift transition-all duration-300 inline-flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            ORDER ON WHATSAPP
                        </a>
                        <button
                            onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-3.5 border border-warmCream/20 text-warmCream/70 font-body font-medium text-sm tracking-wider rounded-full hover:border-warmCream/40 hover:text-warmCream transition-all duration-300"
                        >
                            EXPLORE COLLECTION
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default MovementCTA;
