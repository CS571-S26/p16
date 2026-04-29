import ExperienceCard from '../components/ExperienceCard';
import BucketList from '../components/BucketList';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';
import Header from '../components/Header';
import { Container } from 'react-bootstrap';
import HeroSection from '../components/HeroSection';

function Home({ bucketList, handleAdd, clearList, removeItem }) {
    const [searchTerm, setSearchTerm] = useState('');

    const experiences = [
        { title: "Central Park", description: "A beautiful park in NYC" },
        { title: "Brooklyn Bridge", description: "Amazing skyline views" },
        { title: "Times Square", description: "Bright lights and energy" }
    ];

    return (
        <div>
            <Header 
                title="NYC Travel Guide" 
                subtitle="Explore the city and build your personal bucket list"
            />

            <Container style={{ maxWidth: '1200px', marginTop: '30px' }}>
                <h2 style={{ marginBottom: '20px' }}>Experiences</h2>

                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center',
                    gap: '25px'
                }}>
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

export default Home;