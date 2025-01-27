import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBRadio
} from 'mdb-react-ui-kit';
import { useState } from 'react';
import { Link } from 'react-router-dom';
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
        course: ''
    });
    const [errors, setErrors] = useState({});

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert('Registration successful!');
        }
    };

    return (
        <MDBContainer fluid className="registration-container">
            <MDBRow className='justify-content-center align-items-center m-5'>
                <MDBCard style={{ maxWidth: '500px', padding: '20px' }}>
                    <MDBCardBody>
                        <h3 className="fw-bold text-center mb-4">Registration Form</h3>
                        <form onSubmit={handleSubmit}>
                            <MDBRow>
                                <MDBCol md='12'>
                                    {errors.username && <div className="text-danger mb-1">{errors.username}</div>}
                                    <MDBInput
                                        wrapperClass='mb-3'
                                        placeholder='Username'
                                        size='md'
                                        id='username'
                                        type='text'
                                        value={formData.username}
                                        onChange={handleChange}
                                    />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md='12'>
                                    <MDBInput
                                        wrapperClass='mb-3'
                                        placeholder='Birthday'
                                        size='md'
                                        id='birthday'
                                        type='date'
                                        value={formData.birthday}
                                        onChange={handleChange}
                                    />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md='12' className='mb-3'>
                                    <h6 className="fw-bold mb-2">Gender:</h6>
                                    <MDBRadio
                                        name='gender'
                                        id='gender'
                                        value='female'
                                        label='Female'
                                        inline
                                        onChange={handleChange}
                                    />
                                    <MDBRadio
                                        name='gender'
                                        id='gender'
                                        value='male'
                                        label='Male'
                                        inline
                                        onChange={handleChange}
                                    />
                                    <MDBRadio
                                        name='gender'
                                        id='gender'
                                        value='other'
                                        label='Other'
                                        inline
                                        onChange={handleChange}
                                    />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md='6'>
                                    {errors.email && <div className="text-danger mb-1">{errors.email}</div>}
                                    <MDBInput
                                        wrapperClass='mb-3'
                                        placeholder='Email'
                                        size='md'
                                        id='email'
                                        type='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </MDBCol>
                                <MDBCol md='6'>
                                    <MDBInput
                                        wrapperClass='mb-3'
                                        placeholder='Phone Number'
                                        size='md'
                                        id='phone'
                                        type='tel'
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md='6'>
                                    {errors.password && <div className="text-danger mb-1">{errors.password}</div>}
                                    <MDBInput
                                        wrapperClass='mb-3'
                                        placeholder='Password'
                                        size='md'
                                        id='password'
                                        type='password'
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </MDBCol>
                                <MDBCol md='6'>
                                    {errors.confirmPassword && <div className="text-danger mb-1">{errors.confirmPassword}</div>}
                                    <MDBInput
                                        wrapperClass='mb-3'
                                        placeholder='Confirm Password'
                                        size='md'
                                        id='confirmPassword'
                                        type='password'
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                    />
                                </MDBCol>
                            </MDBRow>
                            <div className="mb-3">
                                {errors.course && <div className="text-danger mb-1">{errors.course}</div>}
                                <label htmlFor="course" className="form-label fw-bold">Choose a Course</label>
                                <select
                                    id="course"
                                    className="form-select form-select-sm custom-select"
                                    value={formData.course}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>Choose option</option>
                                    <option value="1">Subject 1</option>
                                    <option value="2">Subject 2</option>
                                    <option value="3">Subject 3</option>
                                </select>
                            </div>
                            <div className="text-center">
                                <MDBBtn className='custom-btn mb-3' size='md' type='submit'>Submit</MDBBtn>
                            </div>
                        </form>
                        <p className="text-center">
                            Already registered? <Link to="/login" className="login-link">Login here</Link>
                        </p>
                    </MDBCardBody>
                </MDBCard>
            </MDBRow>
        </MDBContainer>
    );
}

export default Registration;





