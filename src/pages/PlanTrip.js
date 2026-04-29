import { useState } from 'react';
import Header from '../components/Header';
import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap';

function PlanTrip() {
    const [formData, setFormData] = useState({
        name: '', email: '', startDate: '', endDate: '', travelers: '1', interests: [], notes: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const INTERESTS = ['Landmarks', 'Food & Drink', 'Parks', 'Culture & Art', 'Nightlife', 'Shopping'];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const handleInterest = (interest) => {
        setFormData(prev => ({
            ...prev,
            interests: prev.interests.includes(interest)
                ? prev.interests.filter(i => i !== interest)
                : [...prev.interests, interest]
        }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required.';
        if (!formData.email.trim()) newErrors.email = 'Email is required.';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Enter a valid email.';
        if (!formData.startDate) newErrors.startDate = 'Start date is required.';
        if (!formData.endDate) newErrors.endDate = 'End date is required.';
        if (formData.startDate && formData.endDate && formData.endDate < formData.startDate)
            newErrors.endDate = 'End date must be after start date.';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div>
                <Header title="Plan Your Trip" subtitle="Let's get you to NYC" emoji="✈️" />
                <Container style={{ maxWidth: '600px', padding: '60px 20px', textAlign: 'center' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🎉</div>
                    <h2 style={{ fontWeight: '800', color: '#1a1a2e' }}>You're all set, {formData.name}!</h2>
                    <p style={{ color: '#6c757d', marginBottom: '24px' }}>
                        We'll send your trip details to <strong>{formData.email}</strong>. Get ready for an amazing NYC adventure!
                    </p>
                    <Button variant="primary" onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', startDate: '', endDate: '', travelers: '1', interests: [], notes: '' }); }}>
                        Plan Another Trip
                    </Button>
                </Container>
            </div>
        );
    }

    return (
        <div>
            <Header title="Plan Your Trip" subtitle="Tell us about your NYC adventure" emoji="✈️" />
            <Container style={{ maxWidth: '650px', padding: '40px 20px' }}>
                <Form onSubmit={handleSubmit} noValidate>

                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Full Name <span aria-hidden="true" style={{ color: '#dc3545' }}>*</span></Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Jane Smith"
                                    isInvalid={!!errors.name}
                                    aria-required="true"
                                />
                                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email Address <span aria-hidden="true" style={{ color: '#dc3545' }}>*</span></Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="jane@email.com"
                                    isInvalid={!!errors.email}
                                    aria-required="true"
                                />
                                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="startDate">
                                <Form.Label>Arrival Date <span aria-hidden="true" style={{ color: '#dc3545' }}>*</span></Form.Label>
                                <Form.Control
                                    type="date"
                                    name="startDate"
                                    value={formData.startDate}
                                    onChange={handleChange}
                                    isInvalid={!!errors.startDate}
                                    aria-required="true"
                                />
                                <Form.Control.Feedback type="invalid">{errors.startDate}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="endDate">
                                <Form.Label>Departure Date <span aria-hidden="true" style={{ color: '#dc3545' }}>*</span></Form.Label>
                                <Form.Control
                                    type="date"
                                    name="endDate"
                                    value={formData.endDate}
                                    onChange={handleChange}
                                    isInvalid={!!errors.endDate}
                                    aria-required="true"
                                />
                                <Form.Control.Feedback type="invalid">{errors.endDate}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="travelers">
                        <Form.Label>Number of Travelers</Form.Label>
                        <Form.Select name="travelers" value={formData.travelers} onChange={handleChange}>
                            {[1,2,3,4,5,6,7,8,9,10].map(n => (
                                <option key={n} value={n}>{n} {n === 1 ? 'traveler' : 'travelers'}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <fieldset className="mb-3">
                        <legend style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '8px' }}>
                            What are you interested in?
                        </legend>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {INTERESTS.map(interest => (
                                <Button
                                    key={interest}
                                    type="button"
                                    variant={formData.interests.includes(interest) ? 'dark' : 'outline-dark'}
                                    size="sm"
                                    onClick={() => handleInterest(interest)}
                                    aria-pressed={formData.interests.includes(interest)}
                                    style={{ borderRadius: '20px' }}
                                >
                                    {interest}
                                </Button>
                            ))}
                        </div>
                    </fieldset>

                    <Form.Group className="mb-4" controlId="notes">
                        <Form.Label>Additional Notes</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            placeholder="Any special requests or things you want to do?"
                        />
                    </Form.Group>

                    <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-100"
                        style={{ borderRadius: '8px', fontWeight: '700' }}
                    >
                        Plan My Trip ✈️
                    </Button>
                </Form>
            </Container>
        </div>
    );
}

export default PlanTrip;