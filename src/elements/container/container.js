import React from "react";
import style from "./style.css";

const Container = ({children, id, title, subtitle, style}) => (
    <div id={id} className={"vid_container"} style={style}>
        <div className={"containerinner"}>
            {children}
        </div>
    </div>
);

export default Container;
