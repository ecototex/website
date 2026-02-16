import { createContext, useContext, useState, ReactNode } from 'react';
import { Bag } from '../types';

export interface CartItem {
    product: Bag;
    quantity: number;
    color: string;
}

interface CartContextType {
    items: CartItem[];
    addToCart: (product: Bag, quantity: number, color: string) => void;
    removeFromCart: (productCode: string, color: string) => void;
    clearCart: () => void;
    totalItems: number;
    isCartOpen: boolean;
    toggleCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => setIsCartOpen(prev => !prev);

    const addToCart = (product: Bag, quantity: number, color: string) => {
        setItems(prev => {
            const existing = prev.find(item => item.product.code === product.code && item.color === color);
            if (existing) {
                return prev.map(item => 
                    (item.product.code === product.code && item.color === color)
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            // Auto open cart when adding item (optional, but good UX)
            // setIsCartOpen(true); 
            return [...prev, { product, quantity, color }];
        });
    };

    const removeFromCart = (productCode: string, color: string) => {
        setItems(prev => prev.filter(item => !(item.product.code === productCode && item.color === color)));
    };

    const clearCart = () => setItems([]);

    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, totalItems, isCartOpen, toggleCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used within a CartProvider');
    return context;
};
