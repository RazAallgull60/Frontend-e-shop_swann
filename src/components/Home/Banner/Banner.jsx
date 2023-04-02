import React from "react";
import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png"

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>En vente</h1>
                    <p>
                        Retrouvez notre casque en esclusivité 
                        et en avant première mondiale !
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">En savoir plus</div>
                        <div className="banner-cta v2">Achetez maintenant !</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;
