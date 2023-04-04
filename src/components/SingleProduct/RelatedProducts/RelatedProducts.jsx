import React from "react";
import Products from "../../Products/Products";
import useFetch from "../../../hooks/useFetch";


const RelatedProducts = ({category}) => {
    const {data} = useFetch(`/api/products?populate=*&[filters][categories][id]=${category}`);

    return (
        <div className="related-products">
            <Products headingText="également diponible" 
            products={data}
            />
        </div>
    );
};

export default RelatedProducts;
