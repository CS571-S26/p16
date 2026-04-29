function BucketListItem({ item, removeItem }) {
    return (
        <li style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 16px',
            backgroundColor: 'white',
            borderRadius: '8px',
            marginBottom: '8px',
            boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
            border: '1px solid #e9ecef'
        }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#0f3460', fontSize: '1.2rem' }}>📍</span>
                <span style={{ fontWeight: '500', color: '#1a1a2e' }}>{item}</span>
            </span>
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
                    fontWeight: '600',
                    transition: 'background 0.15s'
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#fff0f0'}
                onMouseLeave={e => e.currentTarget.style.background = 'none'}
            >
                Remove
            </button>
        </li>
    );
}

export default BucketListItem;