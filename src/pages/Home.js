import { useState } from 'react';
import ExperienceCard from '../components/ExperienceCard';
import BucketList from '../components/BucketList';
import SearchBar from '../components/SearchBar';

function Home() {
    const [bucketList, setBucketList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const experiences = [
        { title: "Central Park", description: "A beautiful park in NYC" },
        { title: "Brooklyn Bridge", description: "Amazing skyline views" },
        { title: "Times Square", description: "Bright lights and energy" }
        ];

    const handleAdd = (place) => {
        if (!bucketList.includes(place)) {
            setBucketList([...bucketList, place]);
        }
    };

    return (
        <div>
            <h1>NYC Travel Guide</h1>

            <h3>Experiences</h3>

            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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

            <BucketList items={bucketList} />
        </div>
    );
}

export default Home;