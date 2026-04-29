import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function EmptyState() {
    return (
        <div style={{
            textAlign: 'center',
            padding: '48px 24px',
            backgroundColor: '#f8f9fa',
            borderRadius: '12px',
            border: '2px dashed #dee2e6'
        }}>
            <div style={{ fontSize: '3rem', marginBottom: '12px' }}>🗺️</div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#1a1a2e', marginBottom: '8px' }}>
                Your bucket list is empty
            </h2>
            <p style={{ color: '#6c757d', marginBottom: '20px' }}>
                Start exploring and add experiences you want to visit!
            </p>
            <Button as={Link} to="/" variant="primary" style={{ borderRadius: '8px', fontWeight: '600' }}>
                Explore Experiences
            </Button>
        </div>
    );
}

export default EmptyState;