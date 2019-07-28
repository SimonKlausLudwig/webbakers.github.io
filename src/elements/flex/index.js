import React from "react"
import style from "./style.css";
import Button from "../button/button";

const Flex = ({siteTitle, number, children}) => {
    return <div className={"myblogs"}>
        {children}
    </div>
};

export default Flex
