import { Container } from 'react-bootstrap';

function Header({ title, subtitle }) {
    return (
        <div style={{ backgroundColor: '#0d6efd', color: 'white', padding: '20px 0' }}>
            <Container>
                <h1 style={{ fontWeight: 'bold' }}>{title}</h1>
                <p style={{ fontSize: '1.2rem' }}>{subtitle}</p>
            </Container>
        </div>
    );
}

export default Header;