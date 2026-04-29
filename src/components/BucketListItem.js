function BucketListItem({ item, removeItem, isVisited, toggleVisited }) {
    return (
        <li style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 16px',
            backgroundColor: isVisited ? '#f0fff4' : 'white',
            borderRadius: '8px',
            marginBottom: '8px',
            boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
            border: `1px solid ${isVisited ? '#b2f5c8' : '#e9ecef'}`
        }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '1.2rem' }}>{isVisited ? '✅' : '📍'}</span>
                <span style={{
                    fontWeight: '500',
                    color: '#1a1a2e',
                    textDecoration: isVisited ? 'line-through' : 'none',
                    opacity: isVisited ? 0.6 : 1
                }}>
                    {item}
                </span>
            </span>
            <span style={{ display: 'flex', gap: '8px' }}>
                <button
                    onClick={() => toggleVisited(item)}
                    aria-label={isVisited ? `Mark ${item} as not visited` : `Mark ${item} as visited`}
                    style={{
                        background: isVisited ? '#d4edda' : 'none',
                        border: '1px solid #dee2e6',
                        borderRadius: '6px',
                        padding: '4px 10px',
                        cursor: 'pointer',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        color: isVisited ? '#155724' : '#555'
                    }}
                >
                    {isVisited ? 'Visited ✓' : 'Mark Visited'}
                </button>
                <button
                    onClick={() => removeItem(item)}
                    aria-label={`Remove ${item} from bucket list`}
                    style={{
                        background: 'none',
                        border: '1px solid #dee2e6',
                        borderRadius: '6px',
                        padding: '4px 10px',
                        cursor: 'pointer',
                        color: '#dc3545',
                        fontSize: '0.8rem',
                        fontWeight: '600'
                    }}
                >
                    Remove
                </button>
            </span>
        </li>
    );
}

export default BucketListItem;