import Slider from '../components/Slider.jsx'
import '../styles/AboutUs.css';

export default function AboutUs() {
    const slides = [
        {
            image: '/images/photo-man.jpg',
            altText: 'First slide',
            label: 'First slide label',
            description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
        },
        {
            image: '/images/photo-man.jpg',
            altText: 'Second slide',
            label: 'Second slide label',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            image: '/images/photo-man.jpg',
            altText: 'Third slide',
            label: 'Third slide label',
            description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
        },
    ];

    return (
        <div className="about-us-container">
            <h1 className="main-title">Welcome to the Carousel</h1>
            <Slider slides={slides} />
            <div className="company-info">
                <h2>Про нас</h2>
                <p>
                    Ми — компанія <strong>&quot;SkillUp Academy&quot;</strong>, яка спеціалізується на проведенні
                    навчальних курсів для професіоналів і новачків у різних галузях. Наша місія —
                    допомогти вам досягти ваших кар&apos;єрних і особистих цілей через якісну освіту.
                </p>
                <p>
                    Наша команда досвідчених тренерів пропонує курси з програмування, дизайну,
                    управління проектами, маркетингу та багато іншого. Ми віримо, що кожен має
                    потенціал для розвитку, і наша мета — створити сприятливе середовище для вашого успіху.
                </p>
                <p>
                    Приєднуйтесь до нас, щоб отримати нові знання, навички та побудувати
                    успішну кар&apos;єру разом із <strong>&quot;SkillUp Academy&quot;</strong>.
                </p>
            </div>
        </div>
    );
}
