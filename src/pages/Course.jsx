import { Container } from 'react-bootstrap';
import Slider from '../components/Slider.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles/Course.css';

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

    const courses = [
        {
            title: 'Курс з програмування',
            text: 'Опануйте основи програмування та створюйте власні проєкти.',
            image: '/images/working.jpg',
            buttonText: 'Дізнатися більше',
            buttonLink: '/course-page',
        },
        {
            title: 'Курс з дизайну',
            text: 'Розвивайте навички графічного та UX/UI дизайну.',
            image: '/images/working.jpg',
            buttonText: 'Дізнатися більше',
            buttonLink: '/courses/design',
        },
        {
            title: 'Курс з маркетингу',
            text: 'Освойте сучасні маркетингові стратегії та інструменти.',
            image: '/images/working.jpg',
            buttonText: 'Дізнатися більше',
            buttonLink: '/courses/marketing',
        },
        {
            title: 'Курс з управління проектами',
            text: 'Навчіться керувати проектами ефективно та професійно.',
            image: '/images/working.jpg',
            buttonText: 'Дізнатися більше',
            buttonLink: '/courses/project-management',
        },
    ];

    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };

    return (
        <div className="about-us-container">
            <h1 className="main-title">Ласкаво просимо до SkillUp Academy</h1>
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
                    управління проектами, маркетингу та багато іншого.
                </p>
                <p>
                    Приєднуйтесь до нас, щоб отримати нові знання, навички та побудувати
                    успішну кар&apos;єру разом із <strong>&quot;SkillUp Academy&quot;</strong>.
                </p>
            </div>
            <div className="features-section">
                <Container>
                    <h2 className="text-center mb-4" style={{ color: '#fff', fontWeight: 'bold' }}>
                        Наші курси
                    </h2>
                    <Carousel responsive={responsive} infinite={true} autoPlay={false} arrows={true}>
                        {courses.map((course, index) => (
                            <FeatureCard
                                key={index}
                                title={course.title}
                                text={course.text}
                                image={course.image}
                                buttonText={course.buttonText}
                                buttonLink={course.buttonLink}
                            />
                        ))}
                    </Carousel>
                </Container>
            </div>
        </div>
    );
}