import React from "react"
import style from "./style.css";
import BlockModern from "../../elements/blockmodern/style";
import {Zoom} from "react-reveal";


const PromisesComponent = ({title, subtitle, prices}) => {
    return <div className={"promises"}>


        <Zoom delay={0}>
            <BlockModern title={"Faire Preise"}
                         img={"https://videobakers.de/dist/images/feature-icon-01.svg"}
                         subtitle={"Dank einer schlanken Organisationsstruktur können wir dir Videos zu Spitzenpreisen anbieten."}/>
        </Zoom>


        <Zoom delay={100}>
            <BlockModern
                title={"Zufriedenheit"}
                img={"https://videobakers.de/dist/images/feature-icon-02.svg"}
                subtitle={"Deine Zufriedenheit steht bei uns an erster Stelle. Wir sind erst zufrieden, wenn du es bist. Du zahlst nur wenn du zu 100% mit dem Ergebnis zufrieden bist."}
            />
        </Zoom>


        <Zoom delay={200}>
            <BlockModern
                title={"Hohe Qualität"}
                img={"https://videobakers.de/dist/images/feature-icon-03.svg"}
                subtitle={"Videobakers steht für höchste Qualität. Wir sind so überzeugt von unserer Qualität, das wir diese sogar Garantieren. Überzeug dich selbst."}
            />
        </Zoom>


        <Zoom delay={300}>
            <BlockModern
                title={"Mehr Reichweite"}
                img={"https://videobakers.de/dist/images/feature-icon-04.svg"}
                subtitle={"Unsere maßgeschneiderten Videos wurden schon tausende Male aufgerufen. Profitiere von der Reichweite im Web!"}
            />
        </Zoom>
    </div>
};

export default PromisesComponent;
