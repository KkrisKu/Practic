import { Container, Row, Col } from 'react-bootstrap';
import Hero from '../components/Hero.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import '../styles/Home.css';

export default function Home() {
    return (
        <div className="home-page">
            <Hero
                title="Learn WordPress the easy way."
                description="Learn WordPress basics right here in about an hour!"
                buttonText="Start Learning Now"
                image="/images/photo-man.jpg"
                buttonLink="/register"
            />

            <div className="features-section">
                <Container>
                    <h2 className="text-center mb-4" style={{ color: '#fff', fontWeight: 'bold' }}>
                        We provide you with the right tools to interact confidently.
                    </h2>
                    <Row className="justify-content-center">
                        <Col xs={12} sm={6} md={4} className="d-flex justify-content-center">
                            <FeatureCard
                                title="Skills"
                                text="Practise your listening, reading, and speaking skills with audio and video materials."
                                image="/images/working.jpg"
                                buttonText="Start learning"
                                buttonLink="/register"
                            />
                        </Col>
                        <Col xs={12} sm={6} md={4} className="d-flex justify-content-center">
                            <FeatureCard
                                title="Grammar"
                                text="Improve your grammar and increase your confidence with clear explanations and exercises."
                                image="/images/man-working1.jpg"
                                buttonText="Start learning"
                                buttonLink="/register"
                            />
                        </Col>
                        <Col xs={12} sm={6} md={4} className="d-flex justify-content-center">
                            <FeatureCard
                                title="Vocabulary"
                                text="Learn new words and improve your vocabulary to communicate effectively."
                                image="/images/man-working2.jpg"
                                buttonText="Start learning"
                                buttonLink="/register"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}