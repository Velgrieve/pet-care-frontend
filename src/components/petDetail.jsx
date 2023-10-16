import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import {getPetById} from "../services/main/pets";

const PetDetail = () => {

    const {pet_id} = useParams();
    const [pet, setPet] = useState([])

    useEffect(() => {
        const abortController = new AbortController();
        async function test () {
            const Pet = await getPetById(pet_id)
            setPet(Pet)
        }
        test()
        return() => {
            abortController.abort();
        };
    }, []);

    return (
        <>
        <Link to={`/form/$pet_id`}>
            <button>Edit</button>
        </Link>
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-Title"> Name: {pet.name}</h5>
                    <p className="card-text">Breed: {pet.breed}</p>
                    <p className="card-text">Date of Birth: {pet.dateOfBirth}</p>

                </div>
            </div>
        </div>
        </>
    )
}

export default PetDetail;