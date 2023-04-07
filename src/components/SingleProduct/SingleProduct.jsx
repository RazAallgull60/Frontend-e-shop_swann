import React from "react";
import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts"
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaCartPlus, FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useState, useContext } from "react";
import {Context} from "../../utils/context";

const SingleProduct = () => {
    const params = useParams()
    const [quantity, setQuantity] = useState(1);
    const { handleAddToCart } = useContext(Context);

    const increment = () => {
        setQuantity((prevState) => prevState + 1);
    };

    const decrement = () => {
        setQuantity((prevState) => {
            if(prevState === 1) return 1
            return prevState - 1;
        });
    };

    const product = useFetch(`/api/products/${params.id}?populate=*`);    
    console.log(product?.data?.attributes?.img?.data[0]?.attributes?.url)

    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="letf">
                        <img src={
                            `http://localhost:1337${product?.data?.attributes?.img?.data[0]?.attributes?.url}`
                        } alt="" />
                    </div>
                    <div className="right">
                        <span className="name">{product?.data?.attributes?.title}</span>
                        <span className="price">{product?.data?.attributes?.price} &#8364;</span>
                        <span className="desc">{product?.data?.attributes?.description}</span>
                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={decrement}>-</span>
                                <span>{quantity}</span> 
                                <span onClick={increment}>+</span>
                            </div>
                            <button className="add-to-cart-button" onClick={() => {handleAddToCart(product?.data, quantity); setQuantity(1)}}> 
                                <FaCartPlus size={20} />
                                Ajouter au panier
                            </button>
                        </div>
                        <span className="divider"/>
                        <div className="info-items">
                            <span className="text-bold">Catérogie : {""}
                                {product?.data?.attributes?.categories?.data.map((category) => (                                
                                    <span>{category?.attributes?.title}</span>
                                ))}
                            </span>
                            <br></br>
                            <br></br>
                            <span className="text-bold">Partager sur :
                                <span className="social-icons">
                                    <FaFacebookF size={16} />
                                    <FaTwitter size={16} />
                                    <FaInstagram size={16} />
                                    <FaFacebookMessenger size={16} />
                                    <FaWhatsapp size={16} />
                                    <FaPinterest size={16} />
                                </span>
                            </span>                            
                        </div>
                    </div>
                </div>
                <RelatedProducts 
                category = {product?.data?.attributes?.categories?.data[0].id} />
            </div>
        </div>
    );
};

export default SingleProduct;
