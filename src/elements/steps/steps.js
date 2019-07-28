import PropTypes from "prop-types"
import React from "react"
import style from "./steps.css";

const Steps = ({children}) => (
    <div className={"steps"}>
        {children}
    </div>
);

Steps.propTypes = {
    siteTitle: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Steps.defaultProps = {
    siteTitle: ``,
};

export default Steps
