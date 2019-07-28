import React from "react"
import style from "./style.css";
import PricingTable from "../../elements/pricingtable/table";
import {Fade, Flip} from "react-reveal";

const PricingComponent = ({title, subtitle, prices}) => {
    return <div className={"pricingcomponent"}>
        <Fade left>
            <PricingTable title={"Basic"}
                          subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}
                          prices={["60 Sekunden", "120 Wörter", "Inklusive Hintergrundmusik", "Voice Over deiner Wahl", "10 Tage Lieferzeit"]}/>
        </Fade>


        <Fade>
            <PricingTable title={"Premium"}
                          subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}
                          prices={["60 Sekunden", "120 Wörter", "Inklusive Hintergrundmusik", "Voice Over deiner Wahl", "10 Tage Lieferzeit"]}/>
        </Fade>





        <Fade right>
            <PricingTable title={"Enterprise"}
                          subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}
                          prices={["60 Sekunden", "120 Wörter", "Inklusive Hintergrundmusik", "Voice Over deiner Wahl", "10 Tage Lieferzeit"]}/>
        </Fade>

    </div>

};

export default PricingComponent;
