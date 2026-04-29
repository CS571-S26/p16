import { Form, InputGroup } from 'react-bootstrap';

function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <Form.Group controlId="search-input" className="mb-3">
            <Form.Label className="fw-semibold">Search Experiences</Form.Label>
            <InputGroup>
                <InputGroup.Text>🔍</InputGroup.Text>
                <Form.Control
                    type="text"
                    placeholder="Search experiences..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </InputGroup>
        </Form.Group>
    );
}
export default SearchBar;