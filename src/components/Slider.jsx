import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';

export default function Slider({ slides }) {
    return (
        <Carousel>
            {slides.map((slide, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={slide.image}
                        alt={slide.altText}
                    />
                    <Carousel.Caption>
                        <h3 className="slide-title">{slide.label}</h3>
                        <p className="slide-description">{slide.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

Slider.propTypes = {
    slides: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            altText: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
};

