import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const AnimatedCounter = ({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        const duration = 2000;
        const steps = 50;
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

    return (
        <div ref={ref} className="font-editorial text-5xl md:text-7xl lg:text-8xl text-deepEarth font-light">
            {prefix}{count.toLocaleString()}{suffix}
        </div>
    );
};

const metrics = [
    {
        target: 18,
        suffix: '+',
        label: 'Months of Reducing Carry Waste',
        detail: 'Single-use bags replaced by durable, reusable alternatives crafted from upcycled materials.',
    },
    {
        target: 600,
        suffix: '+',
        label: ' Conscious Customers',
        detail: 'Each Bag is a Shift Toward Responsible Consumption.',
    },
    {
        target: 10,
        suffix: '+',
        label: 'Product Lines',
        detail: 'Earth-Friendly Alternatives to Plastic',
    },
];

const ImpactSection = () => {
    return (
        <section className="py-section px-gutter bg-warmStone relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-forestSage/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.span
                    className="font-mono text-caption text-clayBrown/60 uppercase tracking-[0.2em] block mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Our Impact
                </motion.span>

                <motion.h2
                    className="font-editorial text-headline text-deepEarth font-light mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Numbers that
                    <span className="italic text-clayBrown"> breathe.</span>
                </motion.h2>

                <motion.p
                    className="font-body text-deepEarth/50 text-base max-w-lg mb-16 md:mb-24"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    Every stitch is a vote against plastic culture. Here's what your choices have achieved.
                </motion.p>

                {/* Metrics */}
                <div className="space-y-16 md:space-y-20">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={metric.label}
                            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end py-12 border-t border-sandDrift/40"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            {/* Number */}
                            <div className="md:col-span-5">
                                <AnimatedCounter target={metric.target} suffix={metric.suffix} />
                            </div>

                            {/* Label + Detail */}
                            <div className="md:col-span-7">
                                <h3 className="font-editorial text-xl md:text-2xl text-deepEarth font-medium italic mb-2">
                                    {metric.label}
                                </h3>
                                <p className="font-body text-sm text-deepEarth/50 leading-relaxed max-w-md">
                                    {metric.detail}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;
