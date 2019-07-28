import React from "react"
import './style.css';
import classnames from 'classnames';
import Block from "../block/block";
import Seperator from "../seperator/seperator";

const Text = ({text, href, children, className, style}) => (
    <div className={classnames("defaulttext",className)}>
        {children}
    </div>
);

export default Text
