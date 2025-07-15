function Filters({ setSearchInput, setSelectedAge }) {
    const ageGroups = ['Baby', 'Young', 'Adult', 'Senior']

    const handleInputChange = (e) => {
  setSearchInput(e.target.value)
    }
    
      const handleAgeChange = (e) => {
    setSelectedAge(e.target.value);
    };
    

    return (
    <div className="filters">
        <h2>Filters</h2>
        <input
        type="text"
                placeholder="Search by pet type..."
        onChange={handleInputChange}
        //onChange={(inputString) => searchItems(inputString.target.value)}
            />

            <h2>Age Range</h2>
            {ageGroups.map(age => (
                <label key={age}>
                    <input
                    type="radio"
                    name="age"
                    value={age}
                    onChange={handleAgeChange}
                    />
                    {age}
                </label>
                ))}
        </div>
)

}


export default Filters;