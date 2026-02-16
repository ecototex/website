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
        <div className="aspect-[3/4] w-full bg-[#f8f8f8] rounded-xl overflow-hidden relative mb-4 transition-all duration-300 group-hover:shadow-lg border border-gray-100">
            {/* Minimal Tag */}
            <div className="absolute top-3 right-3 z-10">
                 <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase bg-white px-2 py-1 rounded-sm border border-gray-100">
                    {bag.code}
                 </span>
            </div>

            <motion.div
                className="w-full h-full flex items-center justify-center p-6"
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                <img 
                    src={bag.imagePath} 
                    alt={bag.name}
                    loading="lazy"
                    className="w-full h-full object-contain mix-blend-multiply opacity-95 group-hover:opacity-100 transition-opacity"
                />
            </motion.div>

            {/* Subtle Overlay on Hover */}
            <div className={`absolute inset-0 bg-black/5 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        </div>

        {/* Minimal Info */}
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
