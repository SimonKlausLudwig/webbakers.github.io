import React from "react"
import Button from "../button/button.js";
import IllustrationBackground from "../../background/illustrationbackground/background";
import './style.css';

const Header = ({title, subtitle, children, button}) => (

    <IllustrationBackground>


        <div className={"navbar"}>
            <a href={"/"}><img className={"logoheader"} src={require('../../images/logo.png')}/></a>
            <Button href="/blog">Aktuelles</Button>
        </div>

        <div style={{
            'display': 'flex',
            'padding': '48px 0 88px 0',
            'justify-content': 'center',
            'text-align': 'center'
        }}>
            <div style={{'max-width': '620px', 'padding': '0 16px'}}>
                <h1 className={"heading"}>{title}</h1>
                <p style={{'margin-bottom': '32px'}}>{subtitle}</p>
                <Button href={button.href}>{button.text}</Button>
            </div>
        </div>
        {children}
    </IllustrationBackground>
);

export default Header
