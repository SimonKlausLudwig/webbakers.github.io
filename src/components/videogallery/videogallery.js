import React from "react"
import Quote from "../../elements/quote/quote";
import style from "./style.css";
import {Fade} from "react-reveal";

const VideoGallery = ({title, subtitle, prices}) => {
    return <div className={"gallery"}>

        <Fade>

            <video style={{"width": "100%", "height": "auto"}} preload="metadata" controls>
                <source src={require("../../videos/mietwise.mp4") + "#t=16.5"} type="video/mp4"/>
            </video>

            <video style={{"width": "100%", "height": "auto"}} preload="metadata" controls>
                <source src={require("../../videos/buc.mp4") + "#t=45"} type="video/mp4"/>
            </video>

            <video style={{"width": "100%", "height": "auto"}} preload="metadata" controls>
                <source src={require("../../videos/bestellkind.mp4") + "#t=19"} type="video/mp4"/>
            </video>

            <Quote
                author={"Mietwise"}
                path={"/projekt/mietwise"}
                text={" Ich fühle mich hier gut aufgehoben. Immer prompte Arbeit und immer zu meiner Zufriedenheit. Das\n" +
                "            Team von Videobakers hat mir viel Arbeit abgenommen. Dafür Danke!"}/>

            <Quote
                author={"Bülent Ucar - BUC-Software"}
                path={"/projekt/buc"}
                text={"Das Team der Videobakers ist super sympathisch und hat meine Kundenwünsche zu 100% umgesetzt. Das Video ist genau wie ich es mir vorgestellt habe. Sehr professionell von A-Z"}/>

            <Quote
                author={"Andre - Bestellkind"}
                path={"/projekt/bestellkind"}
                text={"Als Designer war ich bei Bestellkind auch für das vermarkten des Startups zuständig. Das Video das wir bei Videobakers bestellt haben, hat definitiv dazu beigetragen die Restaurantbesitzer zu überzeugen. Das nächste Video wird definitiv wieder bei Videobakers bestellt!"}/>
        </Fade>
    </div>

};

export default VideoGallery;
