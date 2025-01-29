import { useState } from 'react';
/*import { Container, Row, Col, Accordion, Button, Card } from 'react-bootstrap';*/
import '../styles/CoursePage.css';

export default function Course() {
    const [openSections, setOpenSections] = useState({});
    const [modalContent, setModalContent] = useState(null);

    const toggleSection = (index) => {
        setOpenSections((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const openModal = (videoUrl, text) => {
        setModalContent({ videoUrl, text });
    };

    const closeModal = () => {
        setModalContent(null);
    };

    const coursePlan = [
        {
            title: "Основи Python",
            subtopics: [
                { title: "Змінні та типи даних", video: "https://www.youtube.com/embed/video1", text: "Опис змінних та типів даних у Python." },
                { title: "Умовні оператори", video: "https://www.youtube.com/embed/video2", text: "Як працюють if, elif та else у Python." },
            ],
        },
        {
            title: "Функції",
            subtopics: [
                { title: "Оголошення функцій", video: "https://www.youtube.com/embed/video3", text: "Як створювати та викликати функції в Python." },
                { title: "Аргументи та повернення значень", video: "https://www.youtube.com/embed/video4", text: "Передача параметрів у функції." },
            ],
        },
        {
            title: "Об'єктно-орієнтоване програмування",
            subtopics: [
                { title: "Класи та об'єкти", video: "https://www.youtube.com/embed/video5", text: "Основи ООП у Python." },
                { title: "Наслідування", video: "https://www.youtube.com/embed/video6", text: "Як працює наслідування у Python." },
            ],
        },
        {
            title: "Файлове введення/виведення",
            subtopics: [
                { title: "Читання файлів", video: "https://www.youtube.com/embed/video7", text: "Як відкривати та читати файли у Python." },
                { title: "Запис у файли", video: "https://www.youtube.com/embed/video8", text: "Методи запису у файли." },
            ],
        },
    ];

    return (
        <div className="course-container">
            <div className="course-sidebar">
                <iframe
                    className="course-video"
                    src="https://www.youtube.com/embed/main_video"
                    title="Course Video"
                    allowFullScreen
                ></iframe>
                <button className="register-button">Зареєструватись</button>
                <div className="course-benefits">
                    <h3>Переваги курсу</h3>
                    <ul>
                        <li>Доступно для початківців</li>
                        <li>Практичні завдання</li>
                        <li>Досвідчені інструктори</li>
                        <li>Доступ назавжди</li>
                    </ul>
                </div>
            </div>

            <div className="course-content">
                <h1>Про курс</h1>
                <p>Цей курс допоможе вам освоїти Python з нуля, включаючи основи синтаксису, роботу з функціями та ООП.</p>

                <h2>Що ви дізнаєтесь?</h2>
                <ul className="learning-points">
                    <li>Розуміння основ програмування</li>
                    <li>Робота з функціями та змінними</li>
                    <li>Застосування ООП у Python</li>
                    <li>Обробка файлів та помилок</li>
                </ul>

                <h2>План курсу</h2>
                <div className="course-plan">
                    {coursePlan.map((section, index) => (
                        <div key={index} className="course-section">
                            <button onClick={() => toggleSection(index)} className="section-title">
                                {section.title}
                                <span className={`arrow ${openSections[index] ? 'open' : ''}`}>&#x25BC;</span> {/* Стрілочка */}
                            </button>
                            {openSections[index] &&
                                section.subtopics.map((sub, subIndex) => (
                                    <button
                                        key={subIndex}
                                        onClick={() => openModal(sub.video, sub.text)}
                                        className="subtopic"
                                    >
                                        {sub.title}
                                    </button>
                                ))}
                        </div>
                    ))}
                </div>
            </div>

            {modalContent && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <iframe src={modalContent.videoUrl} title="Subtopic Video" allowFullScreen></iframe>
                        <p>{modalContent.text}</p>
                    </div>
                </div>
            )}
        </div>
    );
}


