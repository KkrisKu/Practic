import {Container, Row, Col, Button, Image, Card} from 'react-bootstrap';
import '../styles/Home.css';

export default function Home() {
    return (
        <div className="home-page">
            <div className="hero-section">
                <Container>
                    <Row className="align-items-center text-center">
                        <Col md={6}>
                            <h1 className="hero-title">ONLINE STUDY</h1>
                            <p className="hero-description">
                                Explore free and accredited courses to expand your knowledge.
                            </p>
                            <Button variant="primary" className="start-button">
                                Start Now
                            </Button>
                        </Col>
                        <Col md={6}>
                            <Image src='/images/photo-man.jpg' alt="photo-man" fluid />
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="features-section">
                <Container>
                    <h2 className="text-center mb-4">
                        We provide you with the right tools to interact confidently.
                    </h2>
                    <Row>
                        <Col md={4}>
                            <Card className="feature-card">
                                <Card.Img
                                    variant="top"
                                    src='/images/working.jpg'
                                    alt="Skills"
                                />
                                <Card.Body>
                                    <Card.Title>Skills</Card.Title>
                                    <Card.Text>
                                        Practise your listening, reading, and speaking skills with
                                        audio and video materials.
                                    </Card.Text>
                                    <Button variant="primary">Start learning</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="feature-card">
                                <Card.Img
                                    variant="top"
                                    src='/images/man-working1.jpg'
                                    alt="Grammar"
                                />
                                <Card.Body>
                                    <Card.Title>Grammar</Card.Title>
                                    <Card.Text>
                                        Improve your grammar and increase your confidence with
                                        clear explanations and exercises.
                                    </Card.Text>
                                    <Button variant="primary">Start learning</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="feature-card">
                                <Card.Img
                                    variant="top"
                                    src='/images/man-working2.jpg'
                                    alt="Vocabulary"
                                />
                                <Card.Body>
                                    <Card.Title>Vocabulary</Card.Title>
                                    <Card.Text>
                                        Learn new words and improve your vocabulary to communicate
                                        effectively.
                                    </Card.Text>
                                    <Button variant="primary">Start learning</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}