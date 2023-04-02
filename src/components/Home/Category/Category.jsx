import React, { useContext } from "react";
import "./Category.scss";
import { Context } from "../../../utils/context";
import { useNavigate } from "react-router-dom";


const Category = () => {
    const {categories = []} = useContext (Context);
    const navigate = useNavigate();

    return (
        <div className="shop-by-category">
            <div className="categories">
                {categories ? categories.map((item) => (
                    <div key={item.id} className="category" onClick={() => navigate(`/category/${item.id}`)}>
                        <img src={
                            process.env.REACT_APP_DEV_URL +
                            item.attributes.img.data.attributes.url
                        } alt="" />
                    </div>
                )):""}
            </div>
        </div>
    );
};

export default Category;
