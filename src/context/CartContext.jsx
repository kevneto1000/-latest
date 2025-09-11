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

    function addToCart(productId) {
        const userId = localStorage.getItem("userId");
        if (!userId) {
            console.error("No userId found in localStorage");
            return;
        }

        axios.post(`${backendUrl}/addtocart/${userId}/`, { product_id: productId })
            .then(response => {
                console.log("Add to Cart response:", response.data); 
                setCartCount(response.data.cart_count ?? 0);
            })
            .catch(err => {
                console.error("Error adding to cart:", err);
            });
    }

    function getCartItems() {
        const userId = localStorage.getItem("userId");
        if(!userId) {
            console.error("User ID not in localStorage")
            return;
        }

        return axios.get(`${backendUrl}/viewcart/${userId}/`)
            .then(response => response.data)
            .catch(error => console.error("Error fetching cart:", error))

    }

    function updateCart(productId, qty) {
        const userId = localStorage.getItem("userId");
        if(!userId) {
            console.error("User ID not in localStorage")
            return;
        }

        axios.post(`${backendUrl}/updatecart/${userId}/${productId}/`, {qty})
        .then(response => {
            setCartCount(response.data.cart_count ?? 0);
            refreshCartCount();
        })
        .catch(error => console.error("Error updating cart", error));
    }

    function deleteCart(productId) {
        const userId = localStorage.getItem("userId");
        if (!userId) {
            console.error("User ID not in localStorage")
            return;
        }

        axios.delete(`${backendUrl}/deletecart/${userId}/${productId}/`)
        .then (response => {
            setCartCount(response.data.cart_count ?? 0)
            refreshCartCount();
        })
        .catch (err => console.error("Error removing item", err))
    }

    useEffect(() => {
        refreshCartCount();
    }, [userId])

    return (
        <CartContext.Provider value={{ cartCount, addToCart, refreshCartCount, getCartItems, updateCart, deleteCart }}>
            {children}
        </CartContext.Provider>
    )
};

export {CartContext, CartProvider}