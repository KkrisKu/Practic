import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownItem
} from 'mdb-react-ui-kit';
import '../styles/Login.css';

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
                        <MDBDropdown className="mb-3">
                            <MDBDropdownToggle>Choose your course</MDBDropdownToggle>
                            <MDBDropdownMenu>
                                <MDBDropdownItem>Course 1</MDBDropdownItem>
                                <MDBDropdownItem>Course 2</MDBDropdownItem>
                                <MDBDropdownItem>Course 3</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
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
