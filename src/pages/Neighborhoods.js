import ExperienceCard from '../components/ExperienceCard';
import BucketList from '../components/BucketList';

function Neighborhoods({ bucketList, handleAdd, clearList }) {
    return (
        <div>
            <h1>Neighborhoods</h1>

            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
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

            <BucketList items={bucketList} />
            <button onClick={clearList}>Clear List</button>
            
        </div>
    );
}

export default Neighborhoods;