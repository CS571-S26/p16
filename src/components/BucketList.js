import BucketListItem from './BucketListItem';
import EmptyState from './EmptyState';

function BucketList({ items, removeItem, visited, toggleVisited }) {
    if (items.length === 0) return <EmptyState />;
    return (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
            {items.map((item, index) => (
                <BucketListItem
                    key={index}
                    item={item}
                    removeItem={removeItem}
                    isVisited={visited.includes(item)}
                    toggleVisited={toggleVisited}
                />
            ))}
        </ul>
    );
}

export default BucketList;