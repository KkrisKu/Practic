import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Slider from '../components/Slider.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles/Course.css';
import { fetchCourses } from '../api.js';

export default function Course() {
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

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const loadCourses = async () => {
            try {
                const data = await fetchCourses();
                setCourses(data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        loadCourses();
    }, []);

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
                        {courses.map((course) => (
                            <FeatureCard
                                key={course._id}
                                title={course.name}
                                text={course.description}
                                image="/images/working.jpg"
                                buttonText="Дізнатися більше"
                                buttonLink={`/courses/${course._id}`}
                            />
                        ))}
                    </Carousel>
                </Container>
            </div>
        </div>
    );
}
