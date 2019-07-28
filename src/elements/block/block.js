import React from "react"
import './style.css';
import classnames from 'classnames';

const Block = ({text, href, children, className, style,path}) => (
    <a href={path} style={style} className={classnames("vidblock", className)}>{children}</a>
);

export default Block
