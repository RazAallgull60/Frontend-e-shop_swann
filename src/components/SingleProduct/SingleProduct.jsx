import React from "react";
import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts"
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaCartPlus, FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import prod from "../../assets/products/earbuds-prod-1.webp"

const SingleProduct = () => {
    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="letf">
                        <img src={prod} alt="" />
                    </div>
                    <div className="right">
                        <span className="name">Nom du produit</span>
                        <span className="price">Prix</span>
                        <span className="desc">Description du produit</span>
                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span>-</span>
                                <span>9</span>
                                <span>+</span>
                            </div>
                            <button className="add-to-cart-button">  
                                <FaCartPlus size={20} />
                                Ajouter au panier
                            </button>
                        </div>
                        <span className="divider"/>
                        <div className="info-items">
                            <span className="text-bold">Catérogie :
                                <span>Casques audio</span>
                            </span>
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
                <RelatedProducts />
            </div>
        </div>
    );
};

export default SingleProduct;
