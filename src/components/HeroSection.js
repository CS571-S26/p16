import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HeroSection() {
    return (
        <div style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
            color: 'white',
            padding: '80px 20px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background decoration */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,100,50,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(50,150,255,0.08) 0%, transparent 50%)',
                pointerEvents: 'none'
            }} />

            <div style={{ position: 'relative', maxWidth: '700px', margin: '0 auto' }}>
                <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🗽</div>
                <h1 style={{
                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                    fontWeight: '800',
                    marginBottom: '16px',
                    letterSpacing: '-1px'
                }}>
                    Discover New York City
                </h1>
                <p style={{
                    fontSize: '1.2rem',
                    opacity: 0.85,
                    marginBottom: '32px',
                    lineHeight: 1.6
                }}>
                    Explore iconic landmarks, hidden gems, and vibrant neighborhoods. 
                    Build your personal NYC bucket list and plan your perfect trip.
                </p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Button
                        as={Link}
                        to="/neighborhoods"
                        variant="warning"
                        size="lg"
                        style={{ fontWeight: '600', borderRadius: '8px', padding: '12px 28px' }}
                    >
                        Explore Neighborhoods
                    </Button>
                    <Button
                        as={Link}
                        to="/my-list"
                        variant="outline-light"
                        size="lg"
                        style={{ fontWeight: '600', borderRadius: '8px', padding: '12px 28px' }}
                    >
                        View My List
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;