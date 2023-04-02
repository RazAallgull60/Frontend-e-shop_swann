import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payement from "../../assets/payments.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">A propos</div>
                    <div className="text">
                        Nos articles sont créés à partir de matériel recyclé. Ils sont expédiés et livrés par nos soins. 
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-items">
                        <FaLocationArrow />
                        <div className="text">
                            Adresse : 12 Rue Anatole France, 92000 Nanterre
                        </div>
                    </div>
                    <div className="c-items">
                        <FaMobileAlt />
                        <div className="text">
                            Téléphone : 01 41 20 69 57
                        </div>
                    </div>
                    <div className="c-items">
                        <FaEnvelope />
                        <div className="text">
                            E-mail : swann.jptz@ynov.com
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Catégories</div>
                    <span className="text">Casques</span>
                    <span className="text">Montres connectées</span>
                    <span className="text">Enceintes connectées</span>
                    <span className="text">Ecouteurs bluetooth</span>
                    <span className="text">Home cinéma</span>
                    <span className="text">Projecteurs</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Accueil</span>
                    <span className="text">A propos</span>
                    <span className="text">Politique de confidentialité</span>
                    <span className="text">Retour articles</span>
                    <span className="text">Termes & conditions</span>
                    <span className="text">Nous contacter</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        Le Shop de Swann CREATED BY © SWANN JPTZ
                    </div>
                    <img src={Payement} alt=""/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
