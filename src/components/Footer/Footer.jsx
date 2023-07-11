import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-column">
                    <h3>¡Contactanos!</h3>
                    <ul>
                        <li><a href="#">Mitre 325</a></li>
                        <li><a href="#">San Martín 2750</a></li>
                        <li><a href="#">Whatsapp: +54 341 5000000</a></li>
                        <li><a href="#">central@hotmail.com</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Nuestros Horarios</h3>
                    <ul>
                        <li><a href="#">Rosario Centro Lun a Vier. 9:00 AM - 18:00 PM Sab 10:00 AM - 14:30 PM.</a></li>
                        <li><a href="#">Rosario Sur Lun a Vier. 10:00 AM a 19:00 PM Sab 10:00 AM - 14:30 PM</a></li>
                    </ul>
                </div>
                <div className="footer-column social-icons-column">
                    <h3>Redes</h3>
                    <ul className="social-icons">
                        <li><a href="#"><FontAwesomeIcon className="icon" icon={faWhatsapp} /></a></li>
                        <li><a href="#"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        <li><a href="#"><FontAwesomeIcon className="icon" icon={faTwitter} /></a></li>
                        <li><a href="#"><FontAwesomeIcon className="icon" icon={faFacebook} /></a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Defensa del Consumidor</h3>
                    <ul>
                        <li><a href="#">Ley de defensa del consumidor</a></li>
                        <li><a href="#">Conocé tus derechos consumidor</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
