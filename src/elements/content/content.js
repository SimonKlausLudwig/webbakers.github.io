import React from "react";
import style from "./style.css";

const Content = ({children, id, title, subtitle,style}) => (
    <div id={id} className={"blog-post-content"} style={style}>
        {children}
    </div>
);

export default Content;
