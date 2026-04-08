import { Form } from 'react-bootstrap';

function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <Form.Control
            type="text"
            placeholder="Search experiences..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ margin: '20px 0' }}
        />
    );
}

export default SearchBar;