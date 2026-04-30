import NeighborhoodCard from '../components/NeighborhoodCard';
import Header from '../components/Header';
import { Container, Row, Col } from 'react-bootstrap';

const NEIGHBORHOODS = [
    {
        name: "Manhattan",
        emoji: "🏙️",
        description: "The iconic heart of NYC — skyscrapers, world-class museums, and the energy of Times Square.",
        highlights: ["Central Park", "The Met", "Fifth Avenue"],
        vibe: "Iconic & Electric"
    },
    {
        name: "Brooklyn",
        emoji: "🌉",
        description: "Trendy neighborhoods, artisan food markets, and stunning views of the Manhattan skyline.",
        highlights: ["Brooklyn Bridge", "DUMBO", "Prospect Park"],
        vibe: "Hip & Creative"
    },
    {
        name: "Queens",
        emoji: "🌍",
        description: "The most ethnically diverse borough — incredible food from every corner of the world.",
        highlights: ["Flushing Meadows", "Jackson Heights", "Astoria"],
        vibe: "Diverse & Delicious"
    }
];

function Neighborhoods({ bucketList, handleAdd }) {
    return (
        <div>
            <Header
                title="Neighborhoods"
                subtitle="Discover different areas of New York City"
            />

            <Container style={{ maxWidth: '1200px', padding: '40px 20px' }}>
                <Row xs={1} md={3} className="g-4">
                    {NEIGHBORHOODS.map((n) => (
                        <Col key={n.name}>
                            <NeighborhoodCard
                                name={n.name}
                                emoji={n.emoji}
                                description={n.description}
                                highlights={n.highlights}
                                vibe={n.vibe}
                                onAdd={handleAdd}
                                isAdded={bucketList.includes(n.name)}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Neighborhoods;