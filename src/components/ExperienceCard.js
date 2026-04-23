import { Card, Button } from 'react-bootstrap';

function ExperienceCard({ title, description, onAdd }) {
    return (
        <Card style={{ width: '26rem', padding: '15px' }}>
            <Card.Body>
                <Card.Title style={{ fontSize: '1.6rem' }}>
                    {title}
                </Card.Title>

                <Card.Text style={{ fontSize: '1.2rem' }}>
                    {description}
                </Card.Text>

                <Button 
                    variant="primary" 
                    size="lg" 
                    onClick={() => onAdd(title)}
                >
                    Add to Bucket List
                </Button>
            </Card.Body>
        </Card>
    );
}

export default ExperienceCard;