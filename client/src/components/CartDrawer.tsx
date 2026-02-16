import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { FaShoppingCart, FaWhatsapp, FaTimes, FaTrash } from 'react-icons/fa';

const CartDrawer = () => {
    const { items, removeFromCart, totalItems, isCartOpen, toggleCart } = useCart();


    const checkoutViaWhatsApp = () => {
        if (items.length === 0) return;

        let message = "Hi, I'd like to place an order from *Eco Totex*:\n\n";
        let totalPrice = 0;

        items.forEach((item, index) => {
            const price = parseInt(item.product.price.replace(/[^\d]/g, '')) || 0;
            const itemTotal = price * item.quantity;
            totalPrice += itemTotal;
            
            message += `${index + 1}. *${item.product.name}* (${item.product.code})\n`;
            message += `   Color: ${item.color || 'Default'}\n`;
            message += `   Qty: ${item.quantity} x ₹${price} = ₹${itemTotal}\n\n`;
        });

        message += `*Total Order Value: ₹${totalPrice}*\n\n`;
        message += "Please confirm availability and shipping.";

        const url = `https://wa.me/917356939056?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <>
            {/* Floating Cart Button */}
            <motion.button
                onClick={toggleCart}
                className="fixed bottom-6 right-6 z-50 bg-deepSlate text-white p-4 rounded-full shadow-2xl border border-white/10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <FaShoppingCart size={24} />
                {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-leafGreen text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
                        {totalItems}
                    </span>
                )}
            </motion.button>

            {/* Backdrop */}
            <AnimatePresence>
                {isCartOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleCart}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
                        />
                        
                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-full max-w-md bg-[#FDFBF7] z-50 shadow-2xl flex flex-col"
                        >
                            <div className="p-6 border-b border-deepSlate/10 flex justify-between items-center bg-white">
                                <h2 className="font-miluno text-2xl text-deepSlate">Your Cart</h2>
                                <button onClick={toggleCart} className="text-deepSlate/50 hover:text-red-500 transition-colors">
                                    <FaTimes size={24} />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                                {items.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center h-full text-deepSlate/40">
                                        <FaShoppingCart size={48} className="mb-4 opacity-50" />
                                        <p className="font-milonga text-lg">Your cart is empty</p>
                                    </div>
                                ) : (
                                    items.map((item) => (
                                        <div key={`${item.product.code}-${item.color}`} className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-deepSlate/5">
                                            <div className="w-20 h-20 bg-sageTint/20 rounded-xl p-2 flex-shrink-0">
                                                <img src={item.product.imagePath} alt={item.product.name} className="w-full h-full object-contain" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-miluno text-lg text-deepSlate leading-tight mb-1">{item.product.name}</h3>
                                                <p className="text-xs font-mono text-deepSlate/60 mb-2">
                                                    {item.product.code} | {item.color}
                                                </p>
                                                <div className="flex justify-between items-end">
                                                    <span className="font-bold text-leafGreen">{item.product.price} x {item.quantity}</span>
                                                    <button 
                                                        onClick={() => removeFromCart(item.product.code, item.color)}
                                                        className="text-red-400 hover:text-red-600 p-2"
                                                    >
                                                        <FaTrash size={14} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>

                            <div className="p-6 bg-white border-t border-deepSlate/10">
                                <button
                                    onClick={checkoutViaWhatsApp}
                                    disabled={items.length === 0}
                                    className="w-full py-4 bg-leafGreen text-white rounded-xl font-bold tracking-wide hover:bg-forestMoss transition-colors flex items-center justify-center gap-3 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <FaWhatsapp size={24} />
                                    <span>PLACE ORDER VIA WHATSAPP</span>
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default CartDrawer;
