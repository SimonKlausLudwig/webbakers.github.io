import React from "react";
import style from "./style.css";

const Title = ({children, id, title, subtitle,style}) => (
    <div className={"vid_c_header"}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
    </div>
);

export default Title;
