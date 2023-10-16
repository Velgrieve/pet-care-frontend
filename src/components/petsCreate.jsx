import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CreatePet = () => {
    const [formData, setFormData] = useState({
        name: '',
        breed: '',
        dateOfBirth: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/pets', formData);

            console.log('Pet created successfully:', response.data);

        } catch (error) {
            console.error('Error creating pet:', error);
        }
    };

    return (
        <div>
            {/* <Link to={`/pets/${pet_id}`}>
                <button className="btn btn-secondary">View Pet Details</button>
            </Link> */}
            <h2>Create a New Pet</h2>
            <form onSubmit={handleSubmit}>
                <label className="form-label">
                    Name:
                    <input
                        className="form-control"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <br />

                <label className='form-label'>
                    Breed:
                    <input
                        className='form-control'
                        type="text"
                        name="breed"
                        value={formData.breed}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <br />

                <label className='form-label'>
                    Date of Birth:
                    <input
                        className='form-control'
                        type="text"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <br />
                <button className="btn btn-primary" type="submit">Create Pet</button>
            </form>
        </div>


    );
};

export default CreatePet;
