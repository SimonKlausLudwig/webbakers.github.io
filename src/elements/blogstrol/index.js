import React from "react"
import './style.css';
import Button from "../button/button";
import {Fade} from "react-reveal";

const BlockStrol = ({title, subtitle, children, path}) => (
    <a href={path} className={"blockstrol"}>


        <Fade left>
            <div>
                <h3>{title}</h3>
                <p>{subtitle}</p>
                <Button>Anschauen</Button>
            </div>
        </Fade>

        <Fade right>
            <div className={"content"}>
                {children}
            </div>
        </Fade>

    </a>
);

export default BlockStrol
