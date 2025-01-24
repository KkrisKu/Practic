import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/" style={{ fontSize: "30px", fontWeight: "bold" }}>
                        ONLINE COURSES
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">HOME</Nav.Link>
                            <Nav.Link href="/courses">COURSES</Nav.Link>
                            <Nav.Link href="/about-us">ABOUT US</Nav.Link>
                            <Nav.Link href="/contacts">CONTACTS</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/login">LOGIN</Nav.Link>
                            <Nav.Link href="/register">REGISTER</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

