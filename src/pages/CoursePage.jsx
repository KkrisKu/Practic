import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCourseById } from '../api.js';
import '../styles/CoursePage.css';

export default function CoursePage() {
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [openSections, setOpenSections] = useState({});
    const [modalContent, setModalContent] = useState(null);

    useEffect(() => {
        const loadCourse = async () => {
            try {
                const data = await fetchCourseById(id);
                setCourse(data);
            } catch (error) {
                console.error('Error fetching course:', error);
            }
        };
        loadCourse();
    }, [id]);

    const toggleSection = (index) => {
        setOpenSections((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const openModal = (content, duration) => {
        setModalContent({ content, duration });
    };

    const closeModal = () => {
        setModalContent(null);
    };

    if (!course) return <p>Loading...</p>;

    return (
        <div className="course-container">
            <div className="course-sidebar expanded">
                <iframe
                    className="course-video"
                    src={course.video}
                    title="Course Video"
                    allowFullScreen
                ></iframe>
                <button className="register-button">Зареєструватись</button>
                <div className="course-details">
                    <h3>{course.name}</h3>
                    <p><strong>Тип:</strong> {course.type}</p>
                    <p><strong>Мова:</strong> {course.language}</p>
                    <p><strong>Автор:</strong> {course.author}</p>
                    <p><strong>Інструктор:</strong> {course.instructor}</p>
                    <p><strong>Тривалість:</strong> {course.duration}</p>
                    <p><strong>Ціна:</strong> ${course.price}</p>
                    <p><strong>Рейтинг:</strong> {course.rating} ({course.reviews} відгуків)</p>
                </div>
            </div>

            <div className="course-content">
                <h1>Про курс</h1>
                <div dangerouslySetInnerHTML={{ __html: course.course_info }}></div>

                <h2>План курсу</h2>
                <div className="course-plan">
                    {Object.entries(course.course_content).map(([_, section], index) => (
                        <div key={index} className="course-section">
                            <button onClick={() => toggleSection(index)} className="section-title">
                                {section.title}
                                <span className={`arrow ${openSections[index] ? 'open' : ''}`}>&#x25BC;</span>
                            </button>
                            {openSections[index] && (
                                <button
                                    onClick={() => openModal(section.content, section.duration)}
                                    className="subtopic"
                                >
                                    {section.title}
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {modalContent && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <p>{modalContent.content}</p>
                        <p><strong>Тривалість:</strong> {modalContent.duration}</p>
                    </div>
                </div>
            )}
        </div>
    );
}






