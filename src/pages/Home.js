import ExperienceCard from '../components/ExperienceCard';
import BucketList from '../components/BucketList';
import SearchBar from '../components/SearchBar';
import FilterButtons from '../components/FilterButtons';
import HeroSection from '../components/HeroSection';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

function Home({ bucketList, handleAdd, clearList, removeItem, visited, toggleVisited }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('all');

    const experiences = [
        { title: "Central Park", description: "A beautiful park in NYC", category: "park" },
        { title: "Brooklyn Bridge", description: "Amazing skyline views", category: "landmark" },
        { title: "Times Square", description: "Bright lights and energy", category: "landmark" }
    ];

    const filtered = experiences.filter((exp) => {
        const matchesSearch = exp.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = activeFilter === 'all' || exp.category === activeFilter;
        return matchesSearch && matchesFilter;
    });

    return (
        <div>
            <HeroSection />

            <Container style={{ maxWidth: '1200px', marginTop: '30px' }}>
                <h2 style={{ marginBottom: '20px' }}>Experiences</h2>

                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <FilterButtons activeFilter={activeFilter} setFilter={setActiveFilter} />

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '25px'
                }}>
                    {filtered.map((exp, index) => (
                        <ExperienceCard
                            key={index}
                            title={exp.title}
                            description={exp.description}
                            onAdd={handleAdd}
                        />
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                    <BucketList items={bucketList} removeItem={removeItem} visited={visited} toggleVisited={toggleVisited} />

                    <button className="btn btn-danger btn-lg mt-3" onClick={clearList}>
                        Clear List
                    </button>
                </div>
            </Container>
        </div>
    );
}

export default Home;