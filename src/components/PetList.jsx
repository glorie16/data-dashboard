function PetList({ pets }) {
    console.log('Rendering PetList with pets:', pets.map(p => `${p.id} - ${p.name}`))
  if (!pets.length) {
    return <p>No pets found.</p>
  }

  return (
    <ul className="pet-list">
      {pets.map((pet) => (
        <li key={pet.id} className="pet-card">
          <h2>{pet.name}</h2>
          {pet.photos[0] && (
            <img
              src={pet.photos[0].medium}
              alt={pet.name}
              width="200"
            />
          )}
          <p>{pet.breeds.primary}</p>
              <p> {pet.gender} | {pet.age}</p>
              <p>{pet.description?.slice(0, 50)}...</p>
        </li>
      ))}
    </ul>
  )
}

export default PetList;