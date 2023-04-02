import React from "react";
import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp"

const Product = ({name, price, image}) => {
    console.log("🚀 ~ file: Product.jsx:6 ~ Product ~ name:", name)
    console.log("🚀 ~ file: Product.jsx:6 ~ Product ~ price:", price)
    const urlImage = `http://localhost:1337/${image}`
    console.log("🚀 ~ file: Product.jsx:10 ~ Product ~ urlImage:", urlImage)
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={`http://localhost:1337${image}`} alt=""/>
            </div>
            <div className="prod-details">
                <span className="name">{name} </span>
                <span className="price">{price} &#8364;</span>
            </div>
        </div>
    );
};

export default Product;
