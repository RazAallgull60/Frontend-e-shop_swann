import React, { useContext } from "react";
import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import { useParams } from "react-router-dom";
import { Context } from "../../../utils/context";
import useFetch from "../../../hooks/useFetch";

const CartItem = () => {
    const params = useParams()
    const {cartItems, handleRemoveFromCart, handleCartProductQuantity} = useContext(Context);
    const product = useFetch(`/api/products/${params.id}?populate=*`)
    return (
        <div className="cart-products"> 
            {cartItems.map(item => (            
                <div key={item.id} className="cart-product">
                    <div className="img-container">
                        <img src={`http://localhost:1337${product?.data?.attributes?.img?.data[0]?.attributes?.url}`} alt="" />
                    </div>
                    <div className="prod-details">
                        <span className="name">{item.attributes.title}</span>
                        <MdClose className="close-btn" onClick={() => handleRemoveFromCart(item)} />
                        <div className="quantity-buttons">
                            <span onClick={() => handleCartProductQuantity('dec', item)}>-</span>
                            <span>{item.attributes.quantity}</span>
                            <span onClick={() => handleCartProductQuantity('inc', item)}>+</span>
                        </div>
                        <div className="text">
                            <span>{item.attributes.quantity}</span>
                            <span>x</span>
                            <span className="highlight">{item.attributes.price * item.attributes.quantity} &#8364;</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartItem;
