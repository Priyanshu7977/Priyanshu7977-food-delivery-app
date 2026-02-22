import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : {};
    });

    // Save cart automatically
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1,
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            if (!prev[itemId]) return prev;

            if (prev[itemId] === 1) {
                const newCart = { ...prev };
                delete newCart[itemId];
                return newCart;
            }

            return { ...prev, [itemId]: prev[itemId] - 1 };
        });
    };

    const clearCart = () => {
        setCartItems({});
        localStorage.removeItem("cart");
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;

        for (const itemId in cartItems) {
            const itemInfo = food_list.find(
                (product) => product._id === itemId
            );

            if (itemInfo) {
                totalAmount += itemInfo.price * cartItems[itemId];
            }
        }

        return totalAmount;
    };

    const getTotalCartItems = () => {
        let total = 0;
        for (const item in cartItems) {
            total += cartItems[item];
        }
        return total;
    };

    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalCartAmount,
        getTotalCartItems
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;