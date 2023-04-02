import React from "react";
import "./Cart.scss";
import {MdClose} from "react-icons/md";
import {BsCartX} from "react-icons/bs";
import CartItem from "./CartItem/CartItem";

const Cart = ({ setShowCart }) => {
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
                {/* <div className="empty-cart">
                    <BsCartX />
                    <span>Aucun produit au panier</span>
                    <button className="return-cta">Continuer mes achats</button>              
                </div>                */}

                <>
                    <CartItem />
                    <div className="cart-footer">
                        <div className="subtotal">
                            <span className="text">Total</span>
                            <span className="text total">666 &#8364;</span>
                        </div>
                        <div className="button">
                            <button className="checkout-cta">Passer ma commande</button>
                        </div>
                    </div>                
                </>

            </div>
        </div>
    );
};

export default Cart;
