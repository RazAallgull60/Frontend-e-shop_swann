import React from "react";
import "./Search.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp"

const Search = ({setShowSearch}) => {
    return (
        <div className="search-modal">
            <div className="form-field">
                <input type="text" autoFocus placeholder="Rechercher un produit" />
                <MdClose onClick={() => setShowSearch (false)} />
            </div>
            <div className="search-result-content">
                <div className="search-results">
                    <div className="search-result-item">
                        <div className="img-container">
                            <img src={prod} alt="" />
                        </div>
                        <div className="prod-details">
                            <span className="name">Nom produit</span>
                            <span className="desc">Description produit</span>
                        </div>
                    /</div>
                </div>
            </div>
        </div>
    );
};

export default Search;
