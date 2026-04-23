import { Container } from 'react-bootstrap';

function Footer() {
    return (
        <div style={{ backgroundColor: '#212529', color: 'white', padding: '15px 0', marginTop: '40px' }}>
            <Container style={{ textAlign: 'center' }}>
                <p style={{ margin: 0 }}>NYC Travel Guide © 2026</p>
                <small>Built with React, React Router, and React Bootstrap</small>
            </Container>
        </div>
    );
}

export default Footer;