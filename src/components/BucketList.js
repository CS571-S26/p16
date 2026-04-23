export default BucketList;

function BucketList({ items, removeItem }) {
    return (
        <div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {items.map((item, index) => (
                    <li 
                        key={index}
                        style={{ 
                            margin: '10px 0',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px'
                        }}
                    >
                        {item}
                        <button onClick={() => removeItem(item)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}