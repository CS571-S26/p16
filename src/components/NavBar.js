import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/">NYC Travel</Navbar.Brand>
            <Nav>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/neighborhoods">Neighborhoods</Nav.Link>
                <Nav.Link as={Link} to="/my-list">My List</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default NavigationBar;