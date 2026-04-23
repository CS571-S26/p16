import ExperienceCard from '../components/ExperienceCard';
import BucketList from '../components/BucketList';
import Header from '../components/Header';
import { Container } from 'react-bootstrap';

function Neighborhoods({ bucketList, handleAdd, clearList, removeItem }) {
    return (
        <div>
            <Header 
                title="Neighborhoods" 
                subtitle="Discover different areas of New York City"
            />

            <Container style={{ maxWidth: '1200px', marginTop: '30px' }}>
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center',
                    gap: '25px'
                }}>
                    <ExperienceCard
                        title="Manhattan"
                        description="The heart of NYC with iconic landmarks."
                        onAdd={handleAdd}
                    />

                    <ExperienceCard
                        title="Brooklyn"
                        description="Trendy neighborhoods and great food."
                        onAdd={handleAdd}
                    />

                    <ExperienceCard
                        title="Queens"
                        description="Diverse culture and amazing cuisine."
                        onAdd={handleAdd}
                    />
                </div>

                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                    <BucketList items={bucketList} removeItem={removeItem} />

                    <button className="btn btn-danger btn-lg mt-3" onClick={clearList}>
                        Clear List
                    </button>
                </div>
            </Container>
        </div>
    );
}

export default Neighborhoods;