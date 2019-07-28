import React from "react"
import './style.css';
import classnames from 'classnames';
import Block from "../block/block";
import Text from "../text/text";

const BlockModern = ({title, subtitle, img}) => (
    <Block className={"modernblock"}>
        <img src={img}/>
        <h3>{title}</h3>
        <Text>{subtitle}</Text>
    </Block>
);

export default BlockModern
