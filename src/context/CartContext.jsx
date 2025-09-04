import { createContext, useState, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

function CartProvider({children}) {
    const backendUrl = import.meta.env.VITE_API_URL;

    const [cartCount, setCartCount] = useState(0);
    const userId = localStorage.getItem("userId");

    function refreshCartCount () {
        if(!userId) return;
            axios.get(`${backendUrl}/viewcart/${userId}/`)
            .then(response => {setCartCount(response.data.count ?? 0)})
            .catch(error => console.error(error))
    };

    function addToCart (productId) {
        const userId = localStorage.getItem("userId");
        if(!userId) return;
        axios.post(`${backendUrl}/addtocart/${userId}/`, {product_id: productId})
        .then(response => {setCartCount(response.data.cart_count ?? 0)})
        .catch(err => console.error(err))
    }

    useEffect(() => {
        refreshCartCount();
    }, [userId])

    return (
        <CartContext.Provider value={{ cartCount, addToCart, refreshCartCount }}>
            {children}
        </CartContext.Provider>
    )
};

export {CartContext, CartProvider}