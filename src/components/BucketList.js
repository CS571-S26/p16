import BucketListItem from './BucketListItem';
import EmptyState from './EmptyState';

function BucketList({ items, removeItem }) {
    if (items.length === 0) return <EmptyState />;
    return (
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {items.map((item, index) => (
                <BucketListItem key={index} item={item} removeItem={removeItem} />
            ))}
        </ul>
    );
}
export default BucketList;