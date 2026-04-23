function FilterButtons({ setFilter }) {
    return (
        <div>
            <button onClick={() => setFilter('all')}>All</button>
            <button onClick={() => setFilter('landmark')}>Landmarks</button>
            <button onClick={() => setFilter('park')}>Parks</button>
        </div>
    );
}

export default FilterButtons;