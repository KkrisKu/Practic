import PropTypes from 'prop-types';

export default function Hero({ title, description, buttonText, image }) {
    return (
        <div className="hero">
            <img src={image} alt="Фонове зображення" className="hero-image" />
            <div className="hero-text-container">
                <h1 className="hero-title">{title}</h1>
                <p className="hero-description">{description}</p>
                <button className="hero-button">{buttonText}</button>
            </div>
        </div>
    );
}

Hero.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};