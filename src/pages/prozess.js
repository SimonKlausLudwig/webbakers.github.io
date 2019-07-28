import React from "react"

import Layout from "../elements/layout"
import Step from "../elements/step/step";
import Steps from "../elements/steps/steps";
import Container from "../elements/container/container";
import Header from "../elements/header/header";
import IllustrationBackgroundModern from "../background/background_3/backgroundmodern";
import Person from "../elements/person/contactblock";
import {Helmet} from "react-helmet";

const StepsPage = () => (
    <Layout>

        <Helmet>
            <title>Der Bakeprozess</title>
        </Helmet>

        <Header title={"Video Timeline"}
                href={"#container_test"}
                button={{href: '#container_test', text: 'Hier klicken'}}
                subtitle={"Wir arbeiten nach einem optimierten Prozess, der darauf ausgelegt ist, unsere Bearbeitungszeit zu minimieren und gleichzeitig Ihre vollständige Beteiligung an allen Phasen der Produktion sicherzustellen. Der gesamte Prozess dauert 10-14 Tage, je nach Komplexität der Animation und Dauer der Videos."}>
        </Header>

        <IllustrationBackgroundModern>

            <Container padded
                       id="container_test">


                <Steps>
                    <Step number={1} step={{
                        title: "Kontaktaufnahme",
                        text: "Bei uns dreht sich alles um dein Vorhaben! Bevor wir mit deinem Video richtig loslegen können, möchten wir deinen Vorstellungen und Wünschen lauschen, um dir ein atemberaubendes Video zu erstellen. Mit unserer Expertisen und Know-how möchten wir dich bestmöglich beraten, um dein Ziel ganz genau zu verstehen. Profitiere von unserem Telefonsupport und teile unseren Bakers dein Vorhaben mit."
                    }}>
                        <img alt="kontakt" className="step_img" width="340"
                             src={require('./../images/process/1.png')}/>
                    </Step>
                    <Step number={2} step={{
                        title: "Rezept für dein Video",
                        text: "Hollywood-Wir kommen! In einem Meeting mit Konzeption und Produktionsleitung besprechen wir gemeinsame mit dir die Details deines Videos. Wir erstellen dir zwar atemberaubende Videos, doch bei deiner Idee bist du der Profi und wir möchten von deinem Wissen profitieren. In unserem Kick-Off Gespräch möchten wird jedes Detail deines Projektes erfahren, damit wir genau den Nagel auf den Kopf treffen."
                    }}>
                        <img alt="koch_rezept" className="step_img" width="340"
                             src={require('./../images/process/2.png')}/>
                    </Step>
                    <Step number={3} step={{
                        title: "Konzept",
                        text: "Unsere kreativen Köpfe legen jetzt richtig los. Sie verpacken deine Idee in ein atemberaubendes Storyboard das genau auf die Bedürfnisse deiner Zielgruppe ausgerichtet ist.einzigartig, eingehend und on-point. Im Storyboard kannst du dir ein eigenes Bild der Szenen und des Könnens unserer Illustratoren machen. Deine Meinung ist uns wichtig! Wir möchten dich daher natürlich teilhaben lassen und möchten dir die Arbeit unsere Bakers präsentieren und werden dir Script und Storyboard präsentieren."
                    }}>
                        <img alt="konzept" className="step_img" width="340"
                             src={require('./../images/process/3.png')}/>
                    </Step>
                    <Step number={4} even step={{
                        title: "Ihr Video",
                        text: "Nach den letzten Feedbackanpassungen hauchen unsere Backers dem ganzen Leben ein - Motion Designer, Toner und Mediendesigner kommen zusammen um Animation, Sound-Design und Schnitt deines Videos zu kreieren."
                    }}>
                        <img alt="video" className="step_img" width="340"
                             src={require('./../images/process/4.png')}/>
                    </Step>
                </Steps>

                <Person
                    person={require('./../simon')}
                    style={{'width':'260px'}}/>

            </Container>

        </IllustrationBackgroundModern>
    </Layout>
);

export default StepsPage
