import React from 'react'
import Head from 'next/head'
import { Container, Row, Col, Image } from 'react-bootstrap'
import FadeInWhenVisible from '../components/animations/fadeInWhenVisible'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'
import Icon from '../components/icon'

export default function Home() {
    return <>
        <Head>
            <title>Yandawl</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className="splash">
            <Container>
                <Row className="align-items-center justify-content-center">
                    <Image src="/wave_a.svg" className="bottom" />
                </Row>
            </Container>
        </header>

        <section>
            <Container className="text-center">
                <Row>
                    <Col>

                    </Col>
                </Row>
            </Container>
        </section>

        <section className="gradient">
            <Image src="/wave_b.svg" />
            <Container>
                <Row>
                    <Col>

                    </Col>
                </Row>
            </Container>
            <Image src="/wave_c.svg" />
        </section>

        <section>
            <Container>
                <Row className="text-center">
                    <Col>
                        <FadeInWhenVisible delay={0.2}>
                            <Icon><FontAwesomeIcon icon={faDiscord} /></Icon>
                            <h3>Discord</h3>
                        </FadeInWhenVisible>
                    </Col>
                    <Col>
                        <FadeInWhenVisible delay={0.4}>
                            <Icon><FontAwesomeIcon icon={faTwitter} /></Icon>
                            <h3>Twitter</h3>
                        </FadeInWhenVisible>
                    </Col>
                    <Col>
                        <FadeInWhenVisible delay={0.6}>
                            <Icon><FontAwesomeIcon icon={faGithub} /></Icon>
                            <h3>GitHub</h3>
                        </FadeInWhenVisible>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="gradient">
            <Image src="/wave_d.svg" />
            <Container>
                <Row className="align-items-center justify-content-center">
                    <Col md={5}>

                    </Col>
                </Row>
            </Container>
            <Image src="/wave_e.svg" />
        </section>

        <section>
            <Container>
                <Row>
                    <Col md={5}>

                    </Col>
                </Row>
            </Container>
        </section>
    </>
}
