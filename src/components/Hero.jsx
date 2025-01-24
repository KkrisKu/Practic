import PropTypes from 'prop-types';

export default function Hero({ title, description, buttonText, buttonLink, image }) {
    return (
        <div className="hero">
            <img src={image} alt="Фонове зображення" className="hero-image" />
            <div className="hero-text-container">
                <h1 className="hero-title">{title}</h1>
                <p className="hero-description">{description}</p>
                <a href={buttonLink} className="hero-button">
                    {buttonText}
                </a>
            </div>
        </div>
    );
}

Hero.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired, // Додаємо новий prop
    image: PropTypes.string.isRequired,
};
