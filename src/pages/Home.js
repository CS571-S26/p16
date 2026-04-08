import ExperienceCard from '../components/ExperienceCard';
import BucketList from '../components/BucketList';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';

function Home({ bucketList, handleAdd, clearList }) {
    const [searchTerm, setSearchTerm] = useState('');

    const experiences = [
        { title: "Central Park", description: "A beautiful park in NYC" },
        { title: "Brooklyn Bridge", description: "Amazing skyline views" },
        { title: "Times Square", description: "Bright lights and energy" }
    ];

    return (
        <div>
            <h1>NYC Travel Guide</h1>

            <h3>Experiences</h3>

            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {experiences
                    .filter((exp) =>
                        exp.title.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((exp, index) => (
                        <ExperienceCard
                            key={index}
                            title={exp.title}
                            description={exp.description}
                            onAdd={handleAdd}
                        />
                    ))}
            </div>

            <BucketList items={bucketList} />
            <button onClick={clearList}>Clear List</button>

        </div>
    );
}

export default Home;