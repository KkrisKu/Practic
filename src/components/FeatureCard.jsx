import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function FeatureCard({ title, text, image, buttonText, buttonLink }) {
    return (
        <Card className="feature-card h-100 d-flex flex-column">
            <Card.Img variant="top" src={image} alt={title} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{title}</Card.Title>
                <Card.Text className="flex-grow-1">{text}</Card.Text>
                <Link to={buttonLink} style={{ textDecoration: 'none' }}>
                    <Button style={{ backgroundColor: '#4CAF50', border: 'none' }}>
                        {buttonText}
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

FeatureCard.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

