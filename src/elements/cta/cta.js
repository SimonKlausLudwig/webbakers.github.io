import React from "react";
import "./style.css";
import Button from "../button/button";

const CTA = ({title, button}) => (
    <div className={"mycta"}>
        <h4>{title}</h4>
        <Button href="/prozess">Schau es dir an</Button>
    </div>
);

export default CTA;
