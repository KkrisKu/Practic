import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
} from 'mdb-react-ui-kit';
import { useState } from 'react';
import { InputField } from '../components/FormComponents';
import { loginUser } from '../api';
import '../styles/Registration.css';

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        course: '',
    });
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await loginUser(formData);
                setMessage(response.message || 'Login successful!');
                localStorage.setItem('authToken', response.token);
            } catch (error) {
                setMessage(error.response?.data?.message || 'Login failed');
                setErrors({ general: 'Invalid username or password' });
            }
        }
    };

    return (
        <MDBContainer fluid className="login-container">
            <MDBRow className="justify-content-center align-items-center m-5">
                <MDBCard style={{ maxWidth: '400px', padding: '20px' }}>
                    <MDBCardBody>
                        <h3 className="fw-bold text-center mb-4">Login</h3>
                        {message && <div className="text-success text-center mb-3">{message}</div>}
                        <form onSubmit={handleSubmit}>
                            <InputField
                                id="username"
                                type="text"
                                placeholder="Username"
                                value={formData.username}
                                onChange={handleChange}
                                error={errors.username}
                            />
                            <InputField
                                id="email"
                                type="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                error={errors.email}
                            />
                            <InputField
                                id="password"
                                type="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                error={errors.password}
                            />

                            <div className="mb-3">
                                {errors.course && <div className="text-danger mb-1">{errors.course}</div>}
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

