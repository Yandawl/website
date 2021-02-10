import React from 'react'
import Head from 'next/head'
import { Container, Row, Col, Image } from 'react-bootstrap'
import FadeInWhenVisible from '../components/animations/fadeInWhenVisible'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'

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
                            <div className="icon gradient mb-4">
                                <FontAwesomeIcon icon={faDiscord} />
                            </div>
                            <h3>Discord</h3>
                            <p>
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas
                            </p>
                        </FadeInWhenVisible>
                    </Col>
                    <Col>
                        <FadeInWhenVisible delay={0.4}>
                            <div className="icon gradient mb-4">
                                <FontAwesomeIcon icon={faTwitter} />
                            </div>
                            <h3>Twitter</h3>
                            <p>
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas
                            </p>
                        </FadeInWhenVisible>
                    </Col>
                    <Col>
                        <FadeInWhenVisible delay={0.6}>
                            <div className="icon gradient mb-4">
                                <FontAwesomeIcon icon={faGithub} />
                            </div>
                            <h3>GitHub</h3>
                            <p>
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas
                            </p>
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
