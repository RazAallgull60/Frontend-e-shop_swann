import React from "react";
import Products from "../Products/Products";
import "./Category.scss";

const Category = () => {
    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">Ecouteurs bluetooth</div>
                <Products innerPage={true}/>
            </div>
        </div>
    );
};

export default Category;
