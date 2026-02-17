import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: 'I stopped buying plastic bags six months ago. It wasn\'t hard — it was just a different bag. That\'s it.',
        name: 'Priya M.',
        role: 'Teacher, Thrissur',
        highlight: 'different bag',
    },
    {
        quote: 'My grocery bag from Eco Totex has survived 200+ trips. The zipper still works. The color hasn\'t faded. This is what quality means.',
        name: 'Anand R.',
        role: 'Architect, Kochi',
        highlight: '200+ trips',
    },
    {
        quote: 'I bought the travel bag for a weekend trip. Now I use it everywhere — gym, office, market. It replaced four other bags.',
        name: 'Meera K.',
        role: 'Entrepreneur, Bangalore',
        highlight: 'replaced four',
    },
];

const ConsciousCarriers = () => {
    return (
        <section className="py-section px-gutter bg-warmCream relative overflow-hidden">
            <div className="max-w-5xl mx-auto">
                <motion.span
                    className="font-mono text-caption text-clayBrown/60 uppercase tracking-[0.2em] block mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Conscious Carriers
                </motion.span>

                <motion.h2
                    className="font-editorial text-headline text-deepEarth font-light mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    People who
                    <span className="italic text-clayBrown"> chose different.</span>
                </motion.h2>

                <motion.p
                    className="font-body text-deepEarth/50 text-base max-w-lg mb-16 md:mb-24"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    They didn't change their lives. They changed what they carry.
                </motion.p>

                {/* Testimonials */}
                <div className="space-y-12 md:space-y-16">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 border-t border-sandDrift/30"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            {/* Quote */}
                            <div className="md:col-span-9 relative">
                                <span className="font-editorial text-6xl md:text-7xl text-sandDrift/30 absolute -top-6 -left-2 select-none leading-none">
                                    "
                                </span>
                                <p className="font-editorial text-xl md:text-2xl text-deepEarth font-light italic leading-relaxed pl-6 md:pl-8">
                                    {testimonial.quote}
                                </p>
                            </div>

                            {/* Attribution */}
                            <div className="md:col-span-3 flex flex-col justify-end pl-6 md:pl-0">
                                <p className="font-body text-sm font-medium text-deepEarth">{testimonial.name}</p>
                                <p className="font-body text-xs text-deepEarth/40 mt-1">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConsciousCarriers;
