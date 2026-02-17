import { motion } from 'framer-motion';

const pillars = [
    {
        number: '01',
        word: 'Refuse',
        description: 'The first act of change is saying no. No to single-use. No to convenience that costs the earth.',
    },
    {
        number: '02',
        word: 'Reuse',
        description: 'Every Eco Totex bag is built for thousands of uses. Durable materials. Timeless design. Made to last.',
    },
    {
        number: '03',
        word: 'Reimagine',
        description: 'We don\'t just make bags. We reimagine what carrying means — turning daily habits into daily impact.',
    },
];

const TheResponse = () => {
    return (
        <section className="py-section px-gutter bg-warmStone relative overflow-hidden">
            {/* Subtle background accent */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-forestSage/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.span
                    className="font-mono text-caption text-clayBrown/60 uppercase tracking-[0.2em] block mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    The Response
                </motion.span>

                <motion.div
                    className="mb-16 md:mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-editorial text-headline text-deepEarth font-light mb-6">
                        Not a bag brand.
                        <br />
                        <span className="italic text-clayBrown">A behavioral shift.</span>
                    </h2>
                    <p className="font-body text-deepEarth/60 text-base md:text-lg max-w-xl leading-relaxed">
                        Eco Totex exists because the answer to plastic pollution isn't just policy or protest.
                        It's what you carry in your hands, every single day.
                    </p>
                </motion.div>

                {/* Three Pillars */}
                <div className="space-y-0">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.number}
                            className="group grid grid-cols-12 gap-4 md:gap-8 py-10 md:py-14 border-t border-sandDrift/40 last:border-b items-start"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            {/* Number */}
                            <div className="col-span-2 md:col-span-1">
                                <span className="font-mono text-xs text-clayBrown/40">{pillar.number}</span>
                            </div>

                            {/* Word */}
                            <div className="col-span-10 md:col-span-4">
                                <h3 className="font-editorial text-3xl md:text-4xl text-deepEarth font-light italic group-hover:text-clayBrown transition-colors duration-300">
                                    {pillar.word}
                                </h3>
                            </div>

                            {/* Description */}
                            <div className="col-span-12 md:col-span-7 md:pt-2">
                                <p className="font-body text-deepEarth/60 text-base leading-relaxed pl-0 md:pl-4">
                                    {pillar.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TheResponse;
