
import { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLeaf, FaArrowLeft } from 'react-icons/fa';
import { Bag } from '../types';
import { LottieRefCurrentProps } from 'lottie-react';
import LazyLottie from '../components/LazyLottie';
import cartAnimation from '../assets/cart-animation.json';
import { useCart } from '../context/CartContext';
import { bags } from '../data/bags';

const ProductDetail = () => {
    const { code } = useParams();
    const [bag, setBag] = useState<Bag | null>(null);
    const [selectedColor, setSelectedColor] = useState<string>('');
    const [quantity, setQuantity] = useState(100);

    const { addToCart, toggleCart } = useCart();
    const [isAdded, setIsAdded] = useState(false);
    const lottieRef = useRef<LottieRefCurrentProps>(null);

    // Helper for message text
    const productQuantity = (qty: number) => qty;


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

    useEffect(() => {
        if (isAdded) {
            lottieRef.current?.play();
        }
    }, [isAdded]);

    if (!bag) return (
        <div className="min-h-screen bg-white flex items-center justify-center font-miluno text-deepSlate animate-pulse">
            Loading...
        </div>
    );
    
    const handleAddToCart = () => {
        if (!bag) return;
        addToCart(bag, quantity, selectedColor || bag.colors[0] || 'Default');
        setIsAdded(true);
    };

    return (
        <div className="min-h-screen bg-[#FDFBF7] text-deepSlate selection:bg-leafGreen/20">
            {/* Back Button */}
            <Link to="/" className="fixed top-6 left-6 z-50 p-3 rounded-full bg-white/80 backdrop-blur-md border border-deepSlate/10 hover:bg-white transition-all shadow-sm group">
                <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            </Link>

            <div className="max-w-7xl mx-auto min-h-screen grid lg:grid-cols-2">
                
                {/* Left: Product Image (Sticky) */}
                <div className="relative h-[60vh] lg:h-screen lg:sticky lg:top-0 flex items-center justify-center bg-[#F2F0E9] overflow-hidden">
                    <motion.div 
                        className="absolute inset-0 opacity-20"
                        style={{ 
                            backgroundImage: 'url("/assets/images/noise_texture.png")', 
                            backgroundSize: '150px' 
                        }} 
                    />
                    
                    {/* Decorative Circle */}
                    <div className="absolute w-[500px] h-[500px] bg-white rounded-full blur-3xl opacity-60" />

                    <motion.img 
                        src={bag.imagePath} 
                        alt={bag.name}
                        className="relative w-[80%] max-w-[500px] object-contain drop-shadow-2xl z-10"
                        layoutId={`image-${bag.code}`}
                        // Removed floating animation as requested
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
                            <span className="px-3 py-1 rounded-full border border-deepSlate/10 text-xs font-mono tracking-wider text-deepSlate/60">
                                {bag.code}
                            </span>
                            <span className="px-3 py-1 rounded-full bg-leafGreen/10 text-leafGreen text-xs font-mono font-bold tracking-wider">
                                {bag.weight}
                            </span>
                            <span className="px-3 py-1 rounded-full bg-deepSlate/5 text-deepSlate text-xs font-mono font-bold tracking-wider">
                                {bag.price}
                            </span>
                        </div>

                        <h1 className="font-miluno text-4xl lg:text-7xl mb-4 lg:mb-6 text-black leading-tight">
                            {bag.name}
                        </h1>

                        <p className="font-milonga text-lg text-deepSlate/70 leading-relaxed mb-10 max-w-xl">
                            {bag.description}
                        </p>

                        {/* Divider */}
                        <div className="h-px w-full bg-deepSlate/10 mb-10" />

                        {/* Colors */}
                        {bag.colors.length > 0 && (
                            <div className="mb-12">
                                <h3 className="font-mono text-xs font-bold tracking-widest text-deepSlate/40 mb-4 uppercase">Select Color</h3>
                                <div className="flex gap-4">
                                    {bag.colors.map(color => (
                                        <button
                                            key={color}
                                            onClick={() => setSelectedColor(color)}
                                            className={`w-12 h-12 rounded-full shadow-sm transition-all duration-300 relative ${
                                                selectedColor === color ? 'ring-2 ring-offset-4 ring-deepSlate/20 scale-105' : 'hover:scale-105 opacity-80 hover:opacity-100'
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
                            <h3 className="font-mono text-xs font-bold tracking-widest text-deepSlate/40 mb-6 uppercase">Specifications</h3>
                            <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                                <SpecItem label="Material" value={bag.material} />
                                <SpecItem label="Dimensions" value={bag.dimensions} />
                                <SpecItem label="Capacity" value={`${bag.capacityKg} kg`} />
                                <SpecItem label="Plastic Saved" value={`${bag.plasticOffset} bags`} highlight />
                            </div>
                        </div>

                        {/* Impact Story */}
                        <div className="bg-[#F2F0E9] p-8 rounded-2xl mb-12 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-leafGreen/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                            <div className="flex items-start gap-4 relative z-10">
                                <div className="p-3 bg-white rounded-full text-forestMoss shadow-sm">
                                    <FaLeaf size={20} />
                                </div>
                                <div>
                                    <h4 className="font-miluno text-lg mb-2 text-deepSlate">Sustainability Story</h4>
                                    <p className="text-sm text-deepSlate/70 leading-relaxed">
                                        {bag.sustainabilityStory}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="sticky bottom-4 z-40 bg-white/80 backdrop-blur-xl p-6 rounded-[2rem] shadow-2xl border border-deepSlate/5 space-y-6">
                            
                            {/* Quantity Selection */}
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-deepSlate/60 font-mono">Quantity</span>
                                    <span className="font-bold font-mono text-lg text-leafGreen">{quantity}</span>
                                </div>
                                <input 
                                    type="range" 
                                    min="1" 
                                    max="500" 
                                    step="1"
                                    value={quantity} 
                                    onChange={(e) => setQuantity(Number(e.target.value))}
                                    className="w-full accent-leafGreen h-1.5 bg-deepSlate/10 rounded-lg appearance-none cursor-pointer"
                                />
                                <div className="flex justify-between text-[10px] text-deepSlate/40 font-mono uppercase tracking-wider">
                                    <span>Single</span>
                                    <span>Bulk</span>
                                </div>
                            </div>

                            {/* Add to Cart (Lottie) */}
                            <div>
                                <div 
                                    className="w-full flex justify-center items-center cursor-pointer relative h-24 overflow-hidden rounded-2xl bg-deepSlate/5 group hover:bg-deepSlate/10 transition-colors"
                                    onClick={handleAddToCart}
                                >
                                    <LazyLottie 
                                        animationData={cartAnimation} 
                                        loop={isAdded} // Endless loop when added
                                        autoplay={false}
                                        lottieRef={lottieRef}
                                        className="h-32 w-full scale-110"
                                        style={{ 
                                            filter: isAdded ? 'none' : 'grayscale(100%) opacity(0.6)',
                                            transition: 'filter 0.5s ease'
                                        }}
                                    />
                                    {!isAdded && (
                                        <span className="absolute text-deepSlate font-bold font-miluno pointer-events-none bg-white/80 px-6 py-2 rounded-full backdrop-blur-md shadow-sm group-hover:scale-105 transition-transform">
                                            ADD TO CART
                                        </span>
                                    )}
                                </div>
                                
                                {/* View Cart Button (After Add) */}
                                {isAdded && (
                                    <motion.button
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        onClick={toggleCart}
                                        className="w-full mt-2 text-xs font-bold text-leafGreen hover:text-deepSlate py-2 border border-leafGreen/20 hover:border-deepSlate/20 rounded-xl transition-colors uppercase tracking-widest"
                                    >
                                        View Cart
                                    </motion.button>
                                )}
                            </div>

                            {/* Direct Checkout Options */}
                            <div className="pt-4 border-t border-deepSlate/10 grid grid-cols-2 gap-3">
                                <button 
                                    onClick={() => {
                                        const msg = `Hi, I'd like to buy a single unit of *${bag.name}* (${bag.code}). Please confirm availability.`;
                                        window.open(`https://wa.me/917356939056?text=${encodeURIComponent(msg)}`, '_blank');
                                    }}
                                    className="py-3 px-4 rounded-xl border border-deepSlate/10 hover:bg-deepSlate/5 text-deepSlate font-bold text-sm transition-colors flex flex-col items-center justify-center gap-1"
                                >
                                    <span>Buy Single</span>
                                    <span className="text-[10px] font-normal opacity-60">1 Unit</span>
                                </button>
                                <button 
                                    onClick={() => {
                                        const msg = `Hi, I'm interested in a bulk order for *${productQuantity(quantity)}* units of *${bag.name}* (${bag.code}). Please modify quote.`;
                                        window.open(`https://wa.me/917356939056?text=${encodeURIComponent(msg)}`, '_blank');
                                    }}
                                    className="py-3 px-4 rounded-xl bg-deepSlate text-white hover:bg-deepSlate/90 font-bold text-sm transition-colors flex flex-col items-center justify-center gap-1 shadow-lg"
                                >
                                    <span>Bulk Order</span>
                                    <span className="text-[10px] font-normal opacity-60">{quantity} Units</span>
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
        <div className="text-xs text-deepSlate/40 font-mono mb-1">{label}</div>
        <div className={`font-medium ${highlight ? 'text-leafGreen font-bold' : 'text-deepSlate'}`}>
            {value}
        </div>
    </div>
);



export default ProductDetail;
