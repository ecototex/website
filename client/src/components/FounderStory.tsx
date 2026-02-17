import { motion } from 'framer-motion';

const FounderStory = () => {
    return (
        <section id="founder-story" className="py-section px-gutter bg-warmCream relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[40%] h-full bg-warmStone/50 hidden lg:block" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Label */}
                <motion.span
                    className="font-mono text-caption text-clayBrown/60 uppercase tracking-[0.2em] block mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    The Origin
                </motion.span>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Left Column — Narrative */}
                    <motion.div
                        className="lg:col-span-7 space-y-8"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-editorial text-headline text-deepEarth font-light leading-tight">
                            From homemaker
                            <br />
                            <span className="italic text-clayBrown">to earth custodian.</span>
                        </h2>

                        <div className="space-y-6 text-deepEarth/70 font-body text-base md:text-lg leading-relaxed">
                            <p>
                                Rajini K.S. didn't set out to build a brand. She set out to answer a question
                                that kept her awake: <em className="text-deepEarth font-medium not-italic">"Why do we use something for five minutes
                                    that the earth carries for five hundred years?"</em>
                            </p>
                            <p>
                                What began in a small kitchen — cutting old jeans into reusable bags — became
                                a quiet revolution. No investors. No factory. Just a woman with fabric scraps,
                                a sewing machine, and an unshakeable conviction that change begins at home.
                            </p>
                            <p>
                                Today, every Eco Totex bag carries her philosophy: that sustainability isn't
                                sacrifice — it's a return to what we've always known.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column — Founder Image + Quote */}
                    <motion.div
                        className="lg:col-span-5 space-y-6"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {/* Founder Image — Round Frame */}
                        <div className="flex flex-col items-center text-center">
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ring-4 ring-sandDrift/30 ring-offset-4 ring-offset-warmCream">
                                <img
                                    src={`${import.meta.env.BASE_URL}assets/images/founder.png`}
                                    alt="Rajini K.S. — Founder, Eco Totex"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <p className="font-editorial text-deepEarth/70 text-lg font-light italic mt-6 max-w-xs">
                                "I didn't want to change the world. I just wanted to stop hurting it."
                            </p>
                        </div>

                        {/* Attribution Card */}
                        <div className="flex items-center justify-between px-5 py-4 bg-warmStone/60 backdrop-blur-sm rounded-2xl">
                            <div>
                                <p className="font-body text-sm font-medium text-deepEarth">Rajini K.S.</p>
                                <p className="font-body text-xs text-deepEarth/50 mt-0.5">Founder, Eco Totex</p>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-forestSage/10 rounded-full">
                                <div className="w-1.5 h-1.5 rounded-full bg-forestSage" />
                                <span className="font-body text-xs text-forestSage">Women-led</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FounderStory;
