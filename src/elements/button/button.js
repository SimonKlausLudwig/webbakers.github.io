import React from "react"
import './style.css';

const Button = ({text, href, children}) => (
    <a className="vidbutton" href={href}>{children}</a>
);

export default Button
