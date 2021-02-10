import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Navigation from '../components/navigation'
import { Container, Row, Col, Card } from 'react-bootstrap'

const ease = [0.43, 0.13, 0.23, 0.96]

const variants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.4
        }
    },
    exit: {
        y: '50%',
        opacity: 0,
        transition: {
            ease,
            duration: 0.5
        }
    }
}

const hover = {
    scale: [1, 1.08, 1.03],
    transition: { duration: 0.2 }
}

const item = {
    initial: {
        y: 40,
        opacity: 0
    },
    animate: {
        y: [-40, 20, 0],
        opacity: 1,
        transition: {
            ease,
            duration: 0.2
        }
    }
}

export default function About() {
    return <>
        <Head>
            <title>About</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navigation />

        <motion.div variants={variants}>
            <Container>
                <Row>
                    <Col md="6">
                        <motion.div className="card mb-4" variants={item} whileHover={hover}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text.
                                </Card.Text>
                            </Card.Body>
                        </motion.div>
                        <motion.div className="card mb-4" variants={item} whileHover={hover}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text.
                                </Card.Text>
                            </Card.Body>
                        </motion.div>
                        <motion.div className="card mb-4" variants={item} whileHover={hover}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text.
                                </Card.Text>
                            </Card.Body>
                        </motion.div>
                    </Col>
                    <Col md="6">
                        <motion.div className="card mb-4" variants={item} whileHover={hover}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text.
                                </Card.Text>
                            </Card.Body>
                        </motion.div>
                        <motion.div className="card mb-4" variants={item} whileHover={hover}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text.
                                </Card.Text>
                            </Card.Body>
                        </motion.div>
                        <motion.div className="card mb-4" variants={item} whileHover={hover}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text.
                                </Card.Text>
                            </Card.Body>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    </>
}
