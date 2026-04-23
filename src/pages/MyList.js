import BucketList from '../components/BucketList';
import Header from '../components/Header';
import { Container } from 'react-bootstrap';

function MyList({ bucketList, clearList, removeItem }) {
    return (
        <div>
            <Header 
                title="My Bucket List" 
                subtitle="Your saved NYC experiences"
            />

            <Container style={{ maxWidth: '1200px', marginTop: '30px' }}>

                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                    <h3 style={{ marginBottom: '20px' }}>
                        My Bucket List
                    </h3>

                    <BucketList items={bucketList} removeItem={removeItem} />

                    <button className="btn btn-danger btn-lg mt-3" onClick={clearList}>
                        Clear List
                    </button>
                </div>
            </Container>
        </div>
    );
}

export default MyList;