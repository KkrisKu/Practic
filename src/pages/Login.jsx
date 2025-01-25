import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBInput
} from 'mdb-react-ui-kit';
import '../styles/Registration.css';

function Login() {
    return (
        <MDBContainer fluid className="login-container">
            <MDBRow className="justify-content-center align-items-center m-5">
                <MDBCard style={{ maxWidth: '400px', padding: '20px' }}>
                    <MDBCardBody>
                        <h3 className="fw-bold text-center mb-4">Login</h3>
                        <MDBInput
                            wrapperClass="mb-3"
                            placeholder="Email"
                            size="md"
                            id="email"
                            type="email"
                        />
                        <div className="mb-3">
                            <label htmlFor="subject-select" className="form-label fw-bold">Choose your Course</label>
                            <select id="subject-select" className="form-select form-select-sm custom-select">
                                <option value="" disabled selected>Choose option</option>
                                <option value="1">Course 1</option>
                                <option value="2">Course 2</option>
                                <option value="3">Course 3</option>
                            </select>
                        </div>
                        <div className="text-center">
                            <MDBBtn className="custom-btn mb-3" size="md">Login</MDBBtn>
                        </div>
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
