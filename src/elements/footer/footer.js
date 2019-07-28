import React from "react";
import style from "./style.css";

const Footer = ({ siteTitle }) => (
    <footer className="site-footer">
        <div className="container">
            <div className="site-footer-inner">

                <ul className="footer-links list-reset">
                    <li>
                        <a href="/impressum.html">Impressum</a>
                    </li>
                    <li>
                        <a href="/datenschutz.html">Datenschutz</a>
                    </li>
                </ul>

                <div className="list-reset mt-8 mb-8">
                    <div><a href="mailto:info@videobakers.de?subject=Erklärvideo">info@videobakers.de</a></div>
                    <div><a className="mt-8" href="tel:+491738517916">0173 - 851 79 16</a></div>
                </div>

                <div className="footer-copyright">© 2019 Videobakers, Made with Love in Hessen</div>
            </div>
        </div>
    </footer>
);

export default Footer;
