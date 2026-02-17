
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaLeaf } from 'react-icons/fa';
import { Bag } from '../types';
import { bags } from '../data/bags';

const ProductDetail = () => {
    const { code } = useParams();
    const [bag, setBag] = useState<Bag | null>(null);
    const [selectedColor, setSelectedColor] = useState<string>('');
    const [quantity, setQuantity] = useState(1);


    useEffect(() => {
        // Find product from static data
        const product = bags.find(b => b.code === code);
        if (product) {
            setBag(product);
            if (product.colors.length > 0) {
                setSelectedColor(product.colors[0]);
            }
        }
    }, [code]);



    if (!bag) return (
        <div className="min-h-screen bg-warmCream flex items-center justify-center font-editorial text-deepEarth animate-pulse">
            Loading...
        </div>
    );



    return (
        <div className="min-h-screen bg-warmCream text-deepEarth selection:bg-forestSage/20">
            {/* Back Button */}
            <Link to="/" className="fixed top-6 left-6 z-50 p-3 rounded-full bg-white/80 backdrop-blur-md border border-deepEarth/10 hover:bg-white transition-all shadow-sm group">
                <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            </Link>

            <div className="max-w-7xl mx-auto min-h-screen grid lg:grid-cols-2">

                {/* Left: Product Image (Sticky) */}
                <div className="relative h-[60vh] lg:h-screen lg:sticky lg:top-0 flex items-center justify-center bg-warmStone overflow-hidden">
                    {/* Decorative Circle */}
                    <div className="absolute w-[500px] h-[500px] bg-white/50 rounded-full blur-3xl opacity-60" />

                    <motion.img
                        src={`${import.meta.env.BASE_URL}${bag.imagePath}`}
                        alt={bag.name}
                        className="relative w-[80%] max-w-[500px] object-contain drop-shadow-2xl z-10"
                        layoutId={`image-${bag.code}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                </div>

                {/* Right: Details (Scrollable) */}
                <div className="px-8 py-20 lg:py-32 lg:px-20 bg-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col items-center lg:items-start text-center lg:text-left"
                    >
                        {/* Header */}
                        <div className="flex items-center gap-4 mb-6">
                            <span className="px-3 py-1 rounded-full border border-deepEarth/10 text-xs font-mono tracking-wider text-deepEarth/60">
                                {bag.code}
                            </span>
                            <span className="px-3 py-1 rounded-full bg-deepEarth/5 text-deepEarth text-xs font-mono font-bold tracking-wider">
                                {bag.price}
                            </span>
                        </div>

                        <h1 className="font-editorial text-4xl lg:text-7xl mb-4 lg:mb-6 text-deepEarth leading-tight font-light">
                            {bag.name}
                        </h1>

                        <p className="font-body text-lg text-deepEarth/70 leading-relaxed mb-10 max-w-xl">
                            {bag.description}
                        </p>

                        {/* Divider */}
                        <div className="h-px w-full bg-deepEarth/10 mb-10" />

                        {/* Colors */}
                        {bag.colors.length > 0 && (
                            <div className="mb-12">
                                <h3 className="font-mono text-xs font-bold tracking-widest text-deepEarth/40 mb-4 uppercase">Select Color</h3>
                                <div className="flex gap-4">
                                    {bag.colors.map(color => (
                                        <button
                                            key={color}
                                            onClick={() => setSelectedColor(color)}
                                            className={`w-12 h-12 rounded-full shadow-sm transition-all duration-300 relative ${selectedColor === color ? 'ring-2 ring-offset-4 ring-deepEarth/20 scale-105' : 'hover:scale-105 opacity-80 hover:opacity-100'
                                                }`}
                                            style={{ backgroundColor: color }}
                                        >
                                            {selectedColor === color && (
                                                <motion.div
                                                    layoutId="check"
                                                    className="absolute inset-0 border-2 border-white rounded-full"
                                                />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Specs Grid */}
                        <div className="mb-12">
                            <h3 className="font-mono text-xs font-bold tracking-widest text-deepEarth/40 mb-6 uppercase">Specifications</h3>
                            <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                                <SpecItem label="Material" value={bag.material} />
                                <SpecItem label="Dimensions" value={bag.dimensions} />
                                <SpecItem label="Capacity" value={`${bag.capacityKg} kg`} />
                                <SpecItem label="Plastic Saved" value={`${bag.plasticOffset} bags`} highlight />
                            </div>
                        </div>

                        {/* Impact Story */}
                        <div className="bg-warmStone p-8 rounded-2xl mb-12 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-forestSage/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                            <div className="flex items-start gap-4 relative z-10">
                                <div className="p-3 bg-white rounded-full text-forestSage shadow-sm">
                                    <FaLeaf size={20} />
                                </div>
                                <div>
                                    <h4 className="font-editorial text-lg mb-2 text-deepEarth font-medium">Sustainability Story</h4>
                                    <p className="text-sm text-deepEarth/70 leading-relaxed font-body">
                                        {bag.sustainabilityStory}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="mt-8 pt-6 border-t border-deepEarth/5 space-y-4">

                            {/* Quantity Input */}
                            <div className="flex items-center justify-between bg-deepEarth/5 rounded-xl p-2">
                                <span className="text-sm font-medium text-deepEarth/60 pl-2">Quantity</span>
                                <div className="flex items-center gap-3 bg-white rounded-lg p-1 shadow-sm">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-8 h-8 flex items-center justify-center text-deepEarth hover:bg-deepEarth/5 rounded-md transition-colors"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        min="1"
                                        value={quantity}
                                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                        className="w-12 text-center font-mono font-bold text-deepEarth bg-transparent focus:outline-none"
                                    />
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-8 h-8 flex items-center justify-center text-deepEarth hover:bg-deepEarth/5 rounded-md transition-colors"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={() => {
                                        const msg = `Hi, I'd like to place an order for *${quantity} units* of *${bag.name}* (${bag.code}). Please confirm availability and total amount.`;
                                        window.open(`https://wa.me/917356939056?text=${encodeURIComponent(msg)}`, '_blank');
                                    }}
                                    className="py-3 px-4 rounded-xl border border-deepEarth/10 hover:bg-deepEarth/5 text-deepEarth font-bold text-sm transition-colors flex flex-col items-center justify-center gap-1"
                                >
                                    <span>Order Now</span>
                                    <span className="text-[10px] font-normal opacity-60">Via WhatsApp</span>
                                </button>
                                <button
                                    onClick={() => {
                                        const msg = `Hi, I'm interested in a bulk quote for *${quantity} units* of *${bag.name}* (${bag.code}). Please share pricing.`;
                                        window.open(`https://wa.me/917356939056?text=${encodeURIComponent(msg)}`, '_blank');
                                    }}
                                    className="py-3 px-4 rounded-xl bg-deepEarth text-warmCream hover:bg-deepEarth/90 font-bold text-sm transition-colors flex flex-col items-center justify-center gap-1 shadow-lg"
                                >
                                    <span>Bulk Enquiry</span>
                                    <span className="text-[10px] font-normal opacity-60">Get Quote</span>
                                </button>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </div>
    );
};

const SpecItem = ({ label, value, highlight = false }: any) => (
    <div>
        <div className="text-xs text-deepEarth/40 font-mono mb-1">{label}</div>
        <div className={`font-medium font-body ${highlight ? 'text-forestSage font-bold' : 'text-deepEarth'}`}>
            {value}
        </div>
    </div>
);



export default ProductDetail;
