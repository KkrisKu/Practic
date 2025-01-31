import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
} from 'mdb-react-ui-kit';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { InputField, RadioGroup } from '../components/FormComponents';
import { registerUser } from '../api';
import '../styles/Registration.css';

function Registration() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        birthday: '',
        gender: '',
        password: '',
        confirmPassword: '',
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
        if (!formData.username) {
            newErrors.username = 'Username is required';
        } else if (formData.username.length < 3) {
            newErrors.username = 'Username must be at least 3 characters';
        }
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!formData.email.includes('@')) {
            newErrors.email = 'Email must contain @';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else {
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
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Confirm password is required';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        if (!formData.course) {
            newErrors.course = 'Course selection is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("handleSubmit");
        if (validateForm()) {
            try {
                const response = await registerUser(formData);
                console.log("handleSubmit", response);
                setMessage(response.message || 'Registration successful!');
                setFormData({
                    username: '',
                    email: '',
                    phone: '',
                    birthday: '',
                    gender: '',
                    password: '',
                    confirmPassword: '',
                    course: '',
                });
            } catch (error) {
                setErrors({ general: error.response?.data?.message || 'Registration failed' });
            }
        }
    };

    return (
        <MDBContainer fluid className="registration-container">
            <MDBRow className="justify-content-center align-items-center m-5">
                <MDBCard style={{ maxWidth: '500px', padding: '20px' }}>
                    <MDBCardBody>
                        <h3 className="fw-bold text-center mb-4">Registration Form</h3>
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
                                id="birthday"
                                type="date"
                                placeholder="Birthday"
                                value={formData.birthday}
                                onChange={handleChange}
                            />
                            <RadioGroup
                                name="gender"
                                label="Gender"
                                options={[
                                    { value: 'female', label: 'Female' },
                                    { value: 'male', label: 'Male' },
                                    { value: 'other', label: 'Other' },
                                ]}
                                selectedValue={formData.gender}
                                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
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
                                id="phone"
                                type="tel"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            <InputField
                                id="password"
                                type="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                error={errors.password}
                            />
                            <InputField
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                error={errors.confirmPassword}
                            />
                            <div className="mb-3">
                                {errors.course && <div className="text-danger mb-1">{errors.course}</div>}
                                <label htmlFor="course" className="form-label fw-bold">
                                    Choose a Course
                                </label>
                                <select
                                    id="course"
                                    className="form-select form-select-sm custom-select"
                                    value={formData.course}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>
                                        Choose option
                                    </option>
                                    <option value="1">Subject 1</option>
                                    <option value="2">Subject 2</option>
                                    <option value="3">Subject 3</option>
                                </select>
                            </div>
                            <div className="text-center">
                                <MDBBtn className="custom-btn mb-3" size="md" type="submit">
                                    Submit
                                </MDBBtn>
                            </div>
                        </form>
                        <p className="text-center">
                            Already registered?{' '}
                            <Link to="/login" className="login-link">
                                Login here
                            </Link>
                        </p>
                    </MDBCardBody>
                </MDBCard>
            </MDBRow>
        </MDBContainer>
    );
}

export default Registration;










