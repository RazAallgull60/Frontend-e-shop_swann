import React from "react";
import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";

const CartItem = () => {
    return (
        <div className="cart-products">
            <div className="cart-product">
                <div className="img-container">
                    <img src={prod} alt="" />
                </div>
                <div className="prod-details">
                    <span className="name">Nom produit</span>
                    <MdClose className="close-btn" />
                    <div className="quantity-buttons">
                        <span>-</span>
                        <span>66</span>
                        <span>+</span>
                    </div>
                    <div className="text">
                        <span>98</span>
                        <span>x</span>
                        <span className="highlight">666 &#8364;</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
