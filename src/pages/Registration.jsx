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
import { Link } from 'react-router-dom';
import '../styles/Registration.css';

function Registration() {
    return (
        <MDBContainer fluid className="registration-container">
            <MDBRow className='justify-content-center align-items-center m-5'>
                <MDBCard style={{ maxWidth: '500px', padding: '20px' }}>
                    <MDBCardBody>
                        <h3 className="fw-bold text-center mb-4">Registration Form</h3>
                        <MDBRow>
                            <MDBCol md='6'>
                                <MDBInput wrapperClass='mb-3' placeholder='First Name' size='md' id='form1' type='text'/>
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBInput wrapperClass='mb-3' placeholder='Last Name' size='md' id='form2' type='text'/>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md='12'>
                                <MDBInput wrapperClass='mb-3' placeholder='Birthday' size='md' id='form3' type='date'/>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md='12' className='mb-3'>
                                <h6 className="fw-bold mb-2">Gender:</h6>
                                <MDBRadio name='inlineRadio' id='inlineRadio1' value='female' label='Female' inline />
                                <MDBRadio name='inlineRadio' id='inlineRadio2' value='male' label='Male' inline />
                                <MDBRadio name='inlineRadio' id='inlineRadio3' value='other' label='Other' inline />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md='6'>
                                <MDBInput wrapperClass='mb-3' placeholder='Email' size='md' id='form4' type='email'/>
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBInput wrapperClass='mb-3' placeholder='Phone Number' size='md' id='form5' type='tel'/>
                            </MDBCol>
                        </MDBRow>
                        <div className="mb-3">
                            <label htmlFor="subject-select" className="form-label fw-bold">Choose a Course</label>
                            <select id="subject-select" className="form-select form-select-sm custom-select">
                                <option value="" disabled selected>Choose option</option>
                                <option value="1">Subject 1</option>
                                <option value="2">Subject 2</option>
                                <option value="3">Subject 3</option>
                            </select>
                        </div>
                        <div className="text-center">
                            <MDBBtn className='custom-btn mb-3' size='md'>Submit</MDBBtn>
                        </div>
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



