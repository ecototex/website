import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bag } from '../types';
import { useNavigate } from 'react-router-dom';

interface Props {
  bag: Bag;
}

const ProductCard = ({ bag }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div 
      className="relative w-full group cursor-pointer" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/product/${bag.code}`)}
    >
        {/* Card Container */}
        <div className="aspect-[3/4] w-full relative mb-4">
            {/* Background with rounded corners - NO overflow hidden here */}
            <div className="absolute inset-0 bg-[#f8f8f8] rounded-2xl border border-gray-100 transition-all duration-300 group-hover:shadow-lg" />
            
            {/* Content Layer */}
            <div className="relative w-full h-full rounded-2xl p-6 flex flex-col">
                {/* Product Code Tag */}
                <div className="absolute top-3 right-3 z-10">
                    <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase bg-white px-2 py-1 rounded-sm border border-gray-100">
                        {bag.code}
                    </span>
                </div>

                {/* Image Container - Centered */}
                <motion.div
                    className="flex-1 flex items-center justify-center"
                    animate={{ scale: isHovered ? 1.05 : 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <img 
                        src={bag.imagePath} 
                        alt={bag.name}
                        loading="lazy"
                        className="max-w-full max-h-full object-contain mix-blend-multiply opacity-95 group-hover:opacity-100 transition-opacity"
                    />
                </motion.div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-black/5 rounded-2xl transition-opacity duration-300 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
            </div>
        </div>

        {/* Product Info */}
        <div className="text-center px-2">
            <h3 className="font-miluno text-lg text-black mb-1 leading-tight group-hover:text-leafGreen transition-colors">
                {bag.name}
            </h3>
            <div className="flex items-center justify-center gap-3 text-sm font-mono text-gray-500">
                <span>{bag.price}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span>{bag.weight}</span>
            </div>
        </div>
    </div>
  );
};

export default ProductCard;
