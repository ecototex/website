import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { bags } from '../data/bags';

const collections = [
    {
        id: 'everyday',
        label: 'Collection 01',
        name: 'Everyday Conscious Carry',
        description: 'For the daily rituals - shopping, commuting, living. Bags that replace hundreds of plastic ones, one trip at a time.',
        products: bags.filter(b => ['TOT-001', 'TOT-002', 'GRO-001'].includes(b.code)),
        accent: 'bg-forestSage/8',
    },
    {
        id: 'travel',
        label: 'Collection 02',
        name: 'Travel With Responsibility',
        description: 'Adventure without the footprint. Built for the long haul from repurposed denim and printed cotton.',
        products: bags.filter(b => ['TRV-001'].includes(b.code)),
        accent: 'bg-clayBrown/8',
    },
    {
        id: 'reuse',
        label: 'Collection 03',
        name: 'Reuse Culture',
        description: 'Compact, functional, premium. Slings and heavy-duty bags designed to be the only bag you\'ll ever need.',
        products: bags.filter(b => ['SLG-001', 'PCK-001', 'PCK-002'].includes(b.code)),
        accent: 'bg-sandDrift/20',
    },
];

const CollectionShowcase = () => {
    const navigate = useNavigate();

    return (
        <section id="collections" className="py-section px-gutter bg-warmCream relative">
            <div className="max-w-6xl mx-auto">
                <motion.span
                    className="font-mono text-caption text-clayBrown/60 uppercase tracking-[0.2em] block mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    The Collection
                </motion.span>

                <motion.div
                    className="mb-16 md:mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-editorial text-headline text-deepEarth font-light mb-4">
                        Curated for
                        <span className="italic text-clayBrown"> conscious living.</span>
                    </h2>
                    <p className="font-body text-deepEarth/50 text-base max-w-lg">
                        Not fast fashion. Not mass production. Each piece is a deliberate choice.
                    </p>
                </motion.div>

                {/* Collections */}
                <div className="space-y-20 md:space-y-32">
                    {collections.map((collection, collectionIndex) => (
                        <motion.div
                            key={collection.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Collection Header */}
                            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-14">
                                <div>
                                    <span className="font-mono text-xs text-clayBrown/40 tracking-wider block mb-3">
                                        {collection.label}
                                    </span>
                                    <h3 className="font-editorial text-3xl md:text-4xl text-deepEarth font-light italic">
                                        {collection.name}
                                    </h3>
                                </div>
                                <p className="font-body text-sm text-deepEarth/50 max-w-sm mt-4 md:mt-0 leading-relaxed">
                                    {collection.description}
                                </p>
                            </div>

                            {/* Products — Editorial Layout */}
                            <div className={`grid gap-6 ${collection.products.length === 2
                                ? 'grid-cols-1 md:grid-cols-2'
                                : 'grid-cols-1 md:grid-cols-3'
                                }`}>
                                {collection.products.map((product, productIndex) => (
                                    <motion.div
                                        key={product.code}
                                        className={`group cursor-pointer ${collection.accent} rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-xl`}
                                        onClick={() => navigate(`/product/${product.code}`)}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: productIndex * 0.1 + 0.2 }}
                                    >
                                        {/* Image */}
                                        <div className="aspect-[4/5] p-8 md:p-10 flex items-center justify-center relative overflow-hidden">
                                            <motion.img
                                                src={`${import.meta.env.BASE_URL}${product.imagePath}`}
                                                alt={product.name}
                                                loading="lazy"
                                                className="max-w-full max-h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>

                                        {/* Info */}
                                        <div className="px-6 md:px-8 pb-8">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="font-mono text-[10px] text-deepEarth/30 tracking-wider">{product.code}</span>
                                            </div>
                                            <h4 className="font-editorial text-xl text-deepEarth font-medium mb-1 group-hover:text-clayBrown transition-colors">
                                                {product.name}
                                            </h4>
                                            <div className="flex items-center justify-between mt-3">
                                                <span className="font-body text-sm text-deepEarth/60">
                                                    {product.price}
                                                </span>
                                                <span className="font-mono text-[10px] text-forestSage tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    Explore →
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Divider between collections */}
                            {collectionIndex < collections.length - 1 && (
                                <div className="h-px bg-sandDrift/30 mt-20 md:mt-32" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CollectionShowcase;
