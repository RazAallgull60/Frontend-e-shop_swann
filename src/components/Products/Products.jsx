import React from "react";
import "./Products.scss";
import Product from "./Product/Product"

const Products = ({products = [], innerPage, headingText}) => {
    console.log(products);
    return (
        <div  className="products-container">
            {!innerPage && <div className="sec-heading">{headingText}</div>}

            <div style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
            }}>
                <div className="products">
                    {products.map((product) => (
                        <Product product={product} image={
                            product?.attributes?.img?.data[0]?.attributes?.url
                        } name={product?.attributes?.title} price={product?.attributes?.price} id={product?.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
