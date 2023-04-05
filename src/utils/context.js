import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({children}) => {
    const [categories, setCategories] = useState ([]);
    const [products, setProducts] = useState ([]);
    const [cartItems, setCartItems] = useState ([]);
    const [cartCount, setCartCount] = useState ([]);
    const [cartSubTotal, setCartSubTotal] = useState([]);
    const location = useLocation();

    useEffect(() => {}, [cartItems])

    const handleAddToCart = (product, quantity) => {
        // let items = cartItems
        // items.push(product)
        // console.log(items);
        // setCartItems(items)
        setCartItems([...cartItems, product])
        let items = [...cartItems];
        let index = items.findIndex((p) => p.id === product.id);
        if (index !== -1) {
        }  else {
            items[index].attributes.quantity += quantity;
            items = [...items, product];
        }
        setCartItems(items);
    };

    const handleRemoveFromCart = (product) => {
        let items = [...cartItems];
        items = items.filter((p) => p.id !== product.id);
        setCartItems(items)
    };
    
    const handleCartProductQuantity = (type, product) => {
        let items = [...cartItems];
        let index = items.findIndex((p) => p.id === product.id);
        if (type === "inc") {
            items [index].attributes.quantity += 1
        } else if (type === "dec") {
            if(items[index].attributes.quantity === 1) return;
            items [index].attributes.quantity -= 1
        }
        setCartItems(items);
    };

    return (
        <Context.Provider value={{
            categories, 
            setCategories, 
            products, 
            setProducts,
            cartItems,
            setCartItems,
            cartCount,
            setCartCount,
            cartSubTotal,
            setCartSubTotal,
            handleAddToCart,
            handleRemoveFromCart,
            handleCartProductQuantity
        }}
        >
            {children}</Context.Provider>)
}

export default AppContext;