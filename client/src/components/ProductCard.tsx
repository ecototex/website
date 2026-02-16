import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bag } from '../types';
import { FaRecycle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface Props {
  bag: Bag;
}

const ProductCard = ({ bag }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div 
      className="relative w-full max-w-[240px] h-[320px] md:h-[400px] mx-auto cursor-pointer" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/product/${bag.code}`)}
    >
        {/* Floating Image */}
        <motion.div
            className="absolute left-0 right-0 mx-auto z-20 flex justify-center top-10"
            initial={{ y: 0 }}
            animate={{ y: isHovered ? -15 : 0 }} // Gentle float
            transition={{ type: "spring", stiffness: 100, damping: 12 }}
        >
            <motion.img 
                src={bag.imagePath} 
                alt={bag.name}
                loading="lazy"
                className="h-[200px] w-[200px] object-contain drop-shadow-xl"
                layoutId={`image-${bag.code}`}
            />
        </motion.div>

        {/* Glass Card Base */}
        <motion.div
            className="absolute bottom-0 w-full h-[300px] rounded-[28px] overflow-hidden border border-deepSlate/10 glass-panel"
            animate={{ 
                scale: isHovered ? 1.05 : 1,
                rotate: isHovered ? 1 : 0,
                boxShadow: isHovered ? '0 10px 20px rgba(59, 73, 83, 0.1)' : 'none'
            }}
            transition={{ duration: 0.3 }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-sageTint/20 to-white/10" />
            
            <div className="relative h-full p-4 flex flex-col justify-end items-center text-center z-10">
                {/* Product Code */}
                <h3 className="font-mono text-deepSlate font-bold text-base opacity-90">
                    {bag.code}
                </h3>
                
                {/* Product Name */}
                <h2 className="font-mono text-deepSlate text-xs mt-1 leading-tight w-full line-clamp-2">
                    {bag.name}
                </h2>

                <div className="flex justify-center items-center gap-2 w-full mt-3">
                    {/* Feature Pill */}
                    <div className="px-2 py-1 rounded-full bg-leafGreen/10 border border-leafGreen/30 text-[10px] font-bold text-leafGreen">
                        {bag.weight}
                    </div>

                    {/* Plastic Offset */}
                    <div className="flex items-center gap-0.5 text-forestMoss text-[10px] font-bold">
                        <FaRecycle size={14} />
                        <span>-{bag.plasticOffset}</span>
                    </div>
                </div>
                
                <div className="mt-2 text-deepSlate font-bold font-mono text-sm">
                    {bag.price}
                </div>
            </div>
        </motion.div>
    </div>
  );
};

export default ProductCard;
