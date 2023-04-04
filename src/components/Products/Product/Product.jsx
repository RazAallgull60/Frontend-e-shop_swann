import React from "react";
import "./Product.scss";
import { useNavigate } from "react-router-dom";

const Product = ({name, price, image, id}) => {
    console.log("🚀 ~ file: Product.jsx:6 ~ Product ~ name:", name)
    console.log("🚀 ~ file: Product.jsx:6 ~ Product ~ price:", price)
    const urlImage = `http://localhost:1337/${image}`
    console.log("🚀 ~ file: Product.jsx:10 ~ Product ~ urlImage:", urlImage)
 
    console.log(id)

    const navigate = useNavigate ();


    return (
        <div className="product-card" 
        onClick={() => navigate(`/product/${id}`)}>
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
