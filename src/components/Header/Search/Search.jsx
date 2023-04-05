import React from "react";
import "./Search.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const Search = ({setShowSearch}) => {
    const [query, setQuery] = useState ("");
    const navigate = useNavigate();

    const onChange = (e) => {
        setQuery(e.target.value);
    };

    const params = useParams()

    let {product} = useFetch(`/api/products/${params.id}?populate=*&filters[title][$contains]=${query}`);

    if (!query.length) {
        product = null;
    }

    return (
        <div className="search-modal">
            <div className="form-field">
                <input type="text" autoFocus placeholder="Rechercher un produit" value={query} onChange={onChange} />
                <MdClose onClick={() => setShowSearch (false)} />
            </div>
            <div className="search-result-content">
                {product?.data[0]?.attributes.map(item => (
                    <div key={item.id} className="search-results">
                        <div className="search-result-item" onClick={() => {
                            navigate ("/product/" + item.id)
                        }}>
                            <div className="img-container">
                                <img src={item.data?.attributes?.img?.data[0]?.attributes?.url} alt="" />
                            </div>
                            <div className="prod-details">
                                <span className={item.data[0]?.attributes?.title}></span>
                                <span className="desc">{item.data[0]?.attributes?.description}</span>
                            </div>
                        /</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
