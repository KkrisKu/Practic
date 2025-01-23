import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import '../styles/Home.css';

export default function Home() {
    return (
        <div className="home-page">
            <div className="hero">
                <img src="/images/photo-man.jpg" alt="Фонове зображення" className="hero-image"/>
                <div className="hero-text-container">
                    <h1 className="hero-title">Learn WordPress the easy way.</h1>
                    <p className="hero-description">Learn WordPress basics
                        right here in about an hour!</p>
                    <button className="hero-button">Start Learning Now</button>
                </div>
            </div>

            <div className="features-section">
                <Container>
                    <h2 className="text-center mb-4" style={{ color: '#fff', fontWeight: 'bold' }}>
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
                                    <Button style={{ backgroundColor: '#4CAF50', border: 'none' }}>Start learning</Button>
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
                                    <Button style={{ backgroundColor: '#4CAF50', border: 'none' }}>Start learning</Button>
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
                                    <Button style={{ backgroundColor: '#4CAF50', border: 'none' }}>Start learning</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}