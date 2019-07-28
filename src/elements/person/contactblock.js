import React from "react"
import './style.css';
import Block from "../block/block";
import Text from "../text/text";

const Person = ({person, style}) => (
    <Block
        className={"person"} style={style}>
        <img src={require("../../images/" + person.image)} alt="testimonialalt"/>
        <div className="name">{person.name}</div>
        <Text>{person.description}</Text>

        <div className="footer">
            <Text><a
                href={"mailto:" + person.email + "?subject=Erklärvideo"}>{person.email}</a></Text>
            <Text><a className="mt-8" href="tel:+491738517916">{person.phone}</a></Text>
        </div>
    </Block>
);

export default Person
