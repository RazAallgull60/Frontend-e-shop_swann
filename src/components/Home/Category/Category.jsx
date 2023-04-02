import React, { useContext } from "react";
import "./Category.scss";
import { Context } from "../../../utils/context";


const Category = () => {
    const {categories = []} = useContext (Context)

    return (
        <div className="shop-by-category">
            <div className="categories">
                {categories ? categories.map((item) => (
                    <div key={item.id} className="category">
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
