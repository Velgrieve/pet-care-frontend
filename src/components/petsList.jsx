import React, { useState, useEffect } from 'react';
import { getAllPets, deletePet } from '../services/main/pets';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './searchPets';

const ListPets = (pet) => {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchPets = async () => {
      try {
        const petsData = await getAllPets();
        setPets(petsData);
        setFilteredPets(petsData);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };

    fetchPets();

    return () => abortController.abort();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = pets.filter((pet) =>
      pet.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPets(filtered);
  };

  const navigate = useNavigate();

  const redirectToCreatePet = () => {
    navigate('/pets/form');
  };

  const handleClick = async (petId) => {
    try {
      await deletePet(petId);
      setRefresh(true);
    } catch (error) {
      console.error('Error deleting pet:', error);
    }
  };

  return (
    <div>
      <h2>List of Pets</h2>
      <button className='btn btn-primary' onClick={redirectToCreatePet}>Create a New Pet</button>

      <SearchBar onSearch={handleSearch} />

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Breed</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPets.map((pet, index) => (
            <tr key={pet.id}>
              <th scope="row">{index + 1}</th>
              <td><Link to={`/pets/${pet.id}`}>{pet.name}</Link></td>
              <td>{pet.dateOfBirth}</td>
              <td>{pet.breed}</td>
              <td>
                <button onClick={() => handleClick(pet.id)} className="btn btn-primary">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListPets;

