import { useEffect, useState } from 'react'
import PetList from './components/PetList'
import './App.css'

function App() {
  const [pets, setPets] = useState([])
  const [filteredResults, setFilteredResults] = useState([])
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/pets')
        const data = await response.json()
        setPets(data)
      }
      catch (error) {
        console.error('Error fetching pets:', error)
      
      }
    }
    fetchPets()
  }, [])

     console.log(`Fetched ${pets.length} pets from the server.`);
    pets.forEach(pet => console.log(pet.name))
  return (
    <div>
       <h1>Adoptable Pets</h1>
      <PetList
        pets={pets}
      ></PetList>
      </div>
  )
}

export default App
