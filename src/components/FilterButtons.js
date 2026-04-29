import { Button } from 'react-bootstrap';

const FILTERS = [
    { value: 'all', label: '🗺️ All' },
    { value: 'landmark', label: '🏛️ Landmarks' },
    { value: 'park', label: '🌿 Parks' },
    { value: 'food', label: '🍕 Food' },
];

function FilterButtons({ activeFilter, setFilter }) {
    return (
        <div className="mb-4" role="group" aria-label="Filter by category">
            {FILTERS.map(({ value, label }) => (
                <Button
                    key={value}
                    variant={activeFilter === value ? 'dark' : 'outline-dark'}
                    size="sm"
                    className="me-2 mb-2"
                    onClick={() => setFilter(value)}
                    aria-pressed={activeFilter === value}
                    style={{ borderRadius: '20px' }}
                >
                    {label}
                </Button>
            ))}
        </div>
    );
}
export default FilterButtons;