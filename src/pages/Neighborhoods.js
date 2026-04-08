import ExperienceCard from '../components/ExperienceCard';

function Neighborhoods() {
    return (
        <div>
            <h1>Neighborhoods</h1>

            <h3>Explore Areas</h3>

            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <ExperienceCard
                    title="Manhattan"
                    description="The heart of NYC with iconic landmarks."
                />

                <ExperienceCard
                    title="Brooklyn"
                    description="Trendy neighborhoods and great food."
                />

                <ExperienceCard
                    title="Queens"
                    description="Diverse culture and amazing cuisine."
                />
            </div>
        </div>
    );
}

export default Neighborhoods;