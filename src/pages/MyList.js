import BucketList from '../components/BucketList';
import Header from '../components/Header';
import { Container, Button, Alert, ProgressBar } from 'react-bootstrap';

function MyList({ bucketList, clearList, removeItem, visited, toggleVisited }) {
    const visitedCount = visited.length;
    const total = bucketList.length;
    const progress = total > 0 ? Math.round((visitedCount / total) * 100) : 0;

    const toVisit = bucketList.filter(item => !visited.includes(item));
    const visitedItems = bucketList.filter(item => visited.includes(item));

    return (
        <div>
            <Header title="My Bucket List" subtitle="Track your NYC adventures" emoji="📋" />

            <Container style={{ maxWidth: '700px', padding: '40px 20px' }}>
                {total > 0 && (
                    <div style={{ backgroundColor: '#f0f4ff', borderRadius: '10px', padding: '20px', marginBottom: '28px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                            <span style={{ fontWeight: '700', color: '#1a1a2e' }}>🗺️ Your Progress</span>
                            <span style={{ color: '#6c757d', fontSize: '0.9rem' }}>{visitedCount} of {total} visited</span>
                        </div>
                        <ProgressBar now={progress} label={`${progress}%`} variant="success" style={{ height: '12px', borderRadius: '8px' }} />

                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
                            <Button variant="outline-danger" size="sm" onClick={clearList} aria-label="Clear all items from bucket list">
                                Clear All
                            </Button>
                        </div>
                    </div>
                )}

                {toVisit.length > 0 && (
                    <div style={{ marginBottom: '32px' }}>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1a1a2e', marginBottom: '12px' }}>
                            📍 Still To Visit ({toVisit.length})
                        </h2>
                        <BucketList items={toVisit} removeItem={removeItem} visited={visited} toggleVisited={toggleVisited} />
                    </div>
                )}

                {visitedItems.length > 0 && (
                    <div>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#155724', marginBottom: '12px' }}>
                            ✅ Already Visited ({visitedItems.length})
                        </h2>
                        <BucketList items={visitedItems} removeItem={removeItem} visited={visited} toggleVisited={toggleVisited} />
                    </div>
                )}

                {total === 0 && <BucketList items={[]} removeItem={removeItem} visited={[]} toggleVisited={toggleVisited} />}

                {visitedCount === total && total > 0 && (
                    <Alert variant="success" className="mt-4" style={{ borderRadius: '10px', textAlign: 'center' }}>
                        🎉 You've visited everything on your list! Time to add more adventures.
                    </Alert>
                )}
            </Container>
        </div>
    );
}

export default MyList;