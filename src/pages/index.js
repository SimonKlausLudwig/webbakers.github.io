import React from "react"

import Layout from "../elements/layout"
import SEO from "../elements/seo"
import Header from "../elements/header/header";
import Clients from "../components/clients/clients";
import Container from "../elements/container/container";
import IllustrationBackgroundAlt from "../background/background_2/background";
import IllustrationBackgroundModern from "../background/background_3/backgroundmodern";
import CTA from "../elements/cta/cta";
import Seperator from "../elements/seperator/seperator";
import Title from "../elements/containertitle/title";
import IllustrationBackground from "../background/illustrationbackground/background";
import PricingComponent from "../components/pricinig/pricingcomponent";
import VideoGallery from "../components/videogallery/videogallery";
import PromisesComponent from "../components/promises/promises";
import Person from "../elements/person/contactblock";
import {Helmet} from "react-helmet";
import {Fade} from "react-reveal";

const IndexPage = () => (
    <Layout>

        <Helmet>
            <title>Videobakers Erklärvideo Gratis testen</title>
        </Helmet>

        <SEO title="Home"/>
        <Header title={<h1>Erklärvideos <br/>zum Festpreis</h1>}
                button={{href: '#offer', text: 'Hier klicken'}}
                subtitle={"Erreiche deine Ziele im Onlinemarketing mit einem Erklärvideo nach dem besten Rezept. Teste es 30 Tage und zahle nur, wenn du wirklich zufrieden bist."}>
            <Container>
                <Clients/>
            </Container>
        </Header>

        <Container id={"offer"}>
            <Title title={"Das bieten wir dir"}
                   subtitle={"Wir erstellen dir dein Erklärvideo mit Zufriedenheitsgarantie. Lasse dir von uns abstrakte Konzepte einfach und verständlich als qualitativ hochwertiges Video darstellen."}/>

            <PromisesComponent/>
        </Container>

        <Seperator/>


        <IllustrationBackground>
            <Container>
                <Title title="Unsere Beispiele"
                       subtitle="Wir bieten maßgeschneiderter Preise. Vom kurzen Video für private Projekte bis hin zu langen Videos für Unternehmen."/>
                <VideoGallery/>
            </Container>
        </IllustrationBackground>


        <Seperator/>

        <IllustrationBackgroundModern>
            <IllustrationBackgroundAlt>
                <Container>
                    <Title title="Für kleine, mittlere oder große Budgets"
                           subtitle="Wir bieten maßgeschneiderter Preise. Vom kurzen Video für private Projekte bis hin zu langen Videos für Unternehmen."/>
                    <PricingComponent/>
                </Container>
            </IllustrationBackgroundAlt>

            <Seperator/>


            <CTA title={"Wie läuft eine Videoproduktion ab?"}/>


            <Seperator/>

            <Container>
                <Title title={"Kontakt zu den Videobakers"}
                       subtitle={"Du hast Fragen oder möchtest dich beraten lassen? Schreib uns einfach eine E-Mail oder klingel durch"}/>

                <Fade>
                    <Person
                        person={require('./../simon')}
                        style={{'width': '260px'}}/>
                </Fade>
            </Container>
        </IllustrationBackgroundModern>
    </Layout>
);

export default IndexPage
