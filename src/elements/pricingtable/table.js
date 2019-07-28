import PropTypes from "prop-types"
import React from "react"
import "./style.css";
import Button from "../button/button";
import Block from "../block/block";
import Text from "../text/text";

const PricingTable = ({title, subtitle, prices}) => {
    return <Block>
        <div className="pricingtable">
            <div className="pricheader">
                <h3 className="title">{title}</h3>
                <Text className="subtitle">{subtitle}</Text>
            </div>
            <ul>
                {prices.map(i => <li><span>{i}</span></li>)}
            </ul>
        </div>
        <Button>Jetzt loslegen</Button>
    </Block>

};

PricingTable.propTypes = {
    siteTitle: PropTypes.string,
    children: PropTypes.node.isRequired,
};

PricingTable.defaultProps = {
    siteTitle: ``,
};

export default PricingTable
