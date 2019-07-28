import PropTypes from "prop-types"
import React from "react"
import style from "./step.css";

const Step = ({siteTitle, number, children}) => {
    var elements = [<div className={"step el"}>
        <div className="dot"><span className="dot1"></span><span className="dot2"></span></div>
        <h4 className="stepheader">{number}. Kontaktaufnahme</h4>
        <p className="step_text">Bei uns dreht sich alles um dein Vorhaben! Bevor wir mit deinem Video richtig
            loslegen
            können, möchten wir deinen Vorstellungen und Wünschen lauschen, um dir ein
            atemberaubendes Video zu erstellen. Mit unserer Expertisen und Know-how möchten wir dich bestmöglich
            beraten, um dein Ziel ganz genau zu verstehen.
            Profitiere von unserem Telefonsupport und teile unseren Bakers dein Vorhaben mit. </p>
    </div>,
        <div className="step_wrapper el step-one-image">
            {children}
        </div>];

    if (number % 2 === 0) {
        return elements.reverse();
    }
    return elements;
};

Step.propTypes = {
    siteTitle: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Step.defaultProps = {
    siteTitle: ``,
};

export default Step
