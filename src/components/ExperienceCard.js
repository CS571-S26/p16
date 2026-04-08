import { Card, Button } from 'react-bootstrap';

function ExperienceCard({ title, description, onAdd }) {
    return (
        <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary" onClick={() => onAdd(title)}>
                    Add to Bucket List
                </Button>
            </Card.Body>
        </Card>
    );
}

export default ExperienceCard;