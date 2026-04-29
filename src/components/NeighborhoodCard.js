import { Card, Badge, Button } from 'react-bootstrap';

function NeighborhoodCard({ name, description, emoji, highlights, vibe, onAdd, isAdded }) {
    return (
        <Card
            style={{
                borderRadius: '12px',
                border: 'none',
                boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                height: '100%',
                transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.1)';
            }}
        >
            <div style={{
                background: 'linear-gradient(135deg, #1a1a2e, #0f3460)',
                padding: '28px',
                textAlign: 'center'
            }}>
                <div style={{ fontSize: '3rem', marginBottom: '8px' }}>{emoji}</div>
                <h2 style={{ color: 'white', fontWeight: '700', margin: 0, fontSize: '1.4rem' }}>{name}</h2>
                <Badge bg="warning" text="dark" className="mt-2" style={{ fontSize: '0.75rem' }}>
                    {vibe}
                </Badge>
            </div>

            <Card.Body style={{ padding: '20px' }}>
                <p style={{ color: '#555', fontSize: '0.95rem', marginBottom: '16px' }}>
                    {description}
                </p>

                <h3 style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#888', marginBottom: '8px' }}>
                    Highlights
                </h3>
                <ul style={{ paddingLeft: '18px', marginBottom: '16px' }}>
                    {highlights.map((h, i) => (
                        <li key={i} style={{ fontSize: '0.9rem', color: '#444', marginBottom: '4px' }}>{h}</li>
                    ))}
                </ul>

                <Button
                    variant={isAdded ? 'success' : 'outline-primary'}
                    className="w-100"
                    onClick={() => onAdd(name)}
                    disabled={isAdded}
                    style={{ borderRadius: '8px', fontWeight: '600' }}
                    aria-label={isAdded ? `${name} added to bucket list` : `Add ${name} to bucket list`}
                >
                    {isAdded ? '✓ On Your List!' : '+ Add to Bucket List'}
                </Button>
            </Card.Body>
        </Card>
    );
}

export default NeighborhoodCard;