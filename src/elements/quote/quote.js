import React from "react"
import './style.css';
import classnames from 'classnames';
import Block from "../block/block";
import Seperator from "../seperator/seperator";
import Text from "../text/text";

const Quote = ({text, href, children, className, style, author,path}) => (
    <Block path={path} className={"quote"} style={{"width": 'initial', 'max-width': 'initial'}}>
        <Text className={"quotebody"}>{text}</Text>

        <p className={"author"}>{author}</p>
    </Block>
);

export default Quote
