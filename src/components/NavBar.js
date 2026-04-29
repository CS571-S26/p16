import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function NavigationBar({ bucketListCount }) {
    const location = useLocation();
    return (
        <Navbar bg="dark" variant="dark" expand="md" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/">🗽 NYC Travel</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-nav" />
                <Navbar.Collapse id="main-nav">
                    <Nav className="ms-auto" activeKey={location.pathname}>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/neighborhoods">Neighborhoods</Nav.Link>
                        <Nav.Link as={Link} to="/my-list">
                            My List{' '}
                            {bucketListCount > 0 && <Badge bg="warning" text="dark" pill>{bucketListCount}</Badge>}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavigationBar;