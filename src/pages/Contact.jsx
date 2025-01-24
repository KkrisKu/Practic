import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import '../styles/Registration.css';

function Support() {
    return (
        <MDBContainer fluid className="registration-container">
            <MDBRow className="justify-content-center align-items-center m-5">
                <MDBCard style={{ maxWidth: '500px', padding: '20px' }}>
                    <MDBCardBody>
                        <h3 className="fw-bold text-center mb-4">Contact Support</h3>
                        <MDBRow>
                            <MDBCol md="6">
                                <MDBInput wrapperClass="mb-3" placeholder="Your Name" size="md" id="name" type="text" />
                            </MDBCol>
                            <MDBCol md="6">
                                <MDBInput wrapperClass="mb-3" placeholder="Email" size="md" id="email" type="email" />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="12">
                                <label htmlFor="subject-select" className="form-label fw-bold">Choose a Subject</label>
                                <select id="subject-select" className="form-select form-select-sm custom-select mb-3">
                                    <option value="" disabled selected>Choose option</option>
                                    <option value="technical">Technical Support</option>
                                    <option value="account">Account Issues</option>
                                    <option value="general">General Inquiry</option>
                                </select>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="12">
                                <textarea
                                    className="form-control mb-3"
                                    id="message"
                                    rows="5"
                                    placeholder="Write your message here..."
                                    style={{
                                        resize: 'none',
                                        borderRadius: '5px',
                                        fontSize: '14px',
                                        padding: '10px',
                                    }}
                                ></textarea>
                            </MDBCol>
                        </MDBRow>
                        <div className="text-center">
                            <MDBBtn className="custom-btn mb-3" size="md">
                                Send Message
                            </MDBBtn>
                        </div>
                        <p className="text-center">
                            Need immediate assistance? <Link to="/faq" className="login-link">Visit FAQ</Link>
                        </p>
                    </MDBCardBody>
                </MDBCard>
            </MDBRow>
        </MDBContainer>
    );
}

export default Support;
