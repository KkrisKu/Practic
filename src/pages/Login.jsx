import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBInput
} from 'mdb-react-ui-kit';
import { useState } from 'react';
import '../styles/Registration.css';

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        course: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.username) newErrors.username = 'Username is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (!formData.course) newErrors.course = 'Course selection is required';

        if (formData.email && !formData.email.includes('@')) {
            newErrors.email = 'Email must contain @';
        }

        if (formData.password) {
            if (formData.password.length < 6) {
                newErrors.password = 'Password must be at least 6 characters';
            }
            if (!/[a-z]/.test(formData.password)) {
                newErrors.password = 'Password must contain at least one lowercase letter';
            }
            if (!/[A-Z]/.test(formData.password)) {
                newErrors.password = 'Password must contain at least one uppercase letter';
            }
            if (!/[0-9]/.test(formData.password)) {
                newErrors.password = 'Password must contain at least one number';
            }
            if (!/^[a-zA-Z0-9]*$/.test(formData.password)) {
                newErrors.password = 'Password must contain only Latin letters and numbers';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert('Login successful!');
        }
    };

    return (
        <MDBContainer fluid className="login-container">
            <MDBRow className="justify-content-center align-items-center m-5">
                <MDBCard style={{ maxWidth: '400px', padding: '20px' }}>
                    <MDBCardBody>
                        <h3 className="fw-bold text-center mb-4">Login</h3>
                        <form onSubmit={handleSubmit}>
                            {errors.username && <div className="text-danger mb-1">{errors.username}</div>}
                            <MDBInput
                                wrapperClass="mb-3"
                                placeholder="Username"
                                size="md"
                                id="username"
                                type="text"
                                value={formData.username}
                                onChange={handleChange}
                            />

                            {errors.email && <div className="text-danger mb-1">{errors.email}</div>}
                            <MDBInput
                                wrapperClass="mb-3"
                                placeholder="Email"
                                size="md"
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                            />

                            {errors.password && <div className="text-danger mb-1">{errors.password}</div>}
                            <MDBInput
                                wrapperClass="mb-3"
                                placeholder="Password"
                                size="md"
                                id="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                            />

                            {errors.course && <div className="text-danger mb-1">{errors.course}</div>}
                            <div className="mb-3">
                                <label htmlFor="course" className="form-label fw-bold">Choose your Course</label>
                                <select
                                    id="course"
                                    className="form-select form-select-sm custom-select"
                                    value={formData.course}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>Choose option</option>
                                    <option value="1">Course 1</option>
                                    <option value="2">Course 2</option>
                                    <option value="3">Course 3</option>
                                </select>
                            </div>

                            <div className="text-center">
                                <MDBBtn className="custom-btn mb-3" size="md" type="submit">Login</MDBBtn>
                            </div>
                        </form>

                        <p className="text-center">
                            Do not have an account? <a href="/register" className="register-link">Register here</a>
                        </p>
                    </MDBCardBody>
                </MDBCard>
            </MDBRow>
        </MDBContainer>
    );
}

export default Login;

