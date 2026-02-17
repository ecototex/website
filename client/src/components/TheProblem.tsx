import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const AnimatedNumber = ({ target, suffix = '' }: { target: number; suffix?: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);
        return () => clearInterval(timer);
    }, [isInView, target]);

    return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const TheProblem = () => {
    return (
        <section className="relative overflow-hidden">
            {/* Dark Panel — The Problem */}
            <div className="bg-charcoal text-warmCream py-section px-gutter relative">
                <div className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                    }}
                />

                <div className="max-w-5xl mx-auto relative z-10">
                    <motion.span
                        className="font-mono text-caption text-warmCream/40 uppercase tracking-[0.2em] block mb-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        The Problem
                    </motion.span>

                    <motion.h2
                        className="font-editorial text-display text-warmCream font-light mb-12 md:mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Plastic isn't
                        <br />
                        <span className="italic text-sandDrift/70">convenient.</span>
                        <br />
                        It's <span className="italic text-sandDrift">permanent.</span>
                    </motion.h2>

                    {/* Impact Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        <motion.div
                            className="border-l border-warmCream/10 pl-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="font-editorial text-4xl md:text-5xl text-sandDrift font-light mb-3">
                                <AnimatedNumber target={500} />
                            </div>
                            <p className="font-body text-sm text-warmCream/50 leading-relaxed">
                                years for a single plastic bag to decompose. Every bag you've ever used still exists.
                            </p>
                        </motion.div>

                        <motion.div
                            className="border-l border-warmCream/10 pl-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="font-editorial text-4xl md:text-5xl text-sandDrift font-light mb-3">
                                <AnimatedNumber target={5} suffix=" trillion" />
                            </div>
                            <p className="font-body text-sm text-warmCream/50 leading-relaxed">
                                plastic bags consumed worldwide every year. That's 160,000 every second.
                            </p>
                        </motion.div>

                        <motion.div
                            className="border-l border-warmCream/10 pl-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                            <div className="font-editorial text-4xl md:text-5xl text-sandDrift font-light mb-3">
                                <AnimatedNumber target={8} suffix="M tons" />
                            </div>
                            <p className="font-body text-sm text-warmCream/50 leading-relaxed">
                                of plastic enter our oceans each year. By 2050, there'll be more plastic than fish.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Transition Line */}
            <div className="h-px bg-gradient-to-r from-transparent via-sandDrift/30 to-transparent" />
        </section>
    );
};

export default TheProblem;
