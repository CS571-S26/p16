function BucketList({ items }) {
    return (
        <div>
            <h3>My Bucket List</h3>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default BucketList;