import React, { useContext } from "react";
import "./Cart.scss";
import {MdClose} from "react-icons/md";
import {BsCartX} from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import { Context } from "../../utils/context";
import {loadStripe} from "@stripe/stripe-js";
import { makePayementRequest } from "../../utils/api";

const Cart = ({ setShowCart }) => {
    const {cartItems, cartSubTotal} = useContext(Context);

    const stripePromise = loadStripe (
        process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
    );

    const handlePayement = async () => {
        
        try {
            const stripe = await stripePromise;
            const res = await makePayementRequest.post("/api/orders", {
            products: cartItems,
        });

        await stripe.redirectToCheckout({
            sessionId: res.data.stripeSession.id
        })

        } catch(error) {
            console.log(error)

        }       
    }

    return (
        <div className="cart-panel">
            <div className="opac-layer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Passer ma commande</span>
                    <span className="close-btn" 
                    onClick={() => setShowCart(false)}>
                        <MdClose />
                        <span className="text">Fermer</span>
                    </span>                    
                </div>

                {!cartItems?.lenght && (
                    <div className="empty-cart">
                        <BsCartX />
                        <span>Aucun produit au panier</span>
                        <button className="return-cta">Continuer mes achats</button>              
                    </div>
                )}   
                            
                {!!cartItems?.lenght && (
                    <>
                        <CartItem />
                        <div className="cart-footer">
                            <div className="subtotal">
                                <span className="text">Total</span>
                                <span className="text total">666 &#8364;</span>
                            </div>
                            <div className="button">
                                <button className="checkout-cta" onClick={handlePayement}>Payer mon panier</button>
                            </div>
                        </div>                
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
