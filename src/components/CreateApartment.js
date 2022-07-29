import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateApartment(props) {
    const [img, setImg] = useState("");
    const [title, setTitle] = useState("");
    const [pricePerDay, setPricePerDay] = useState("");

    let navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();

        const newApartment = {
            img,
            title,
            pricePerDay,
        };

        axios
            .post(process.env.REACT_APP_API_BASE_URL + '/apartments', newApartment)
            .then(response => {
                setImg("");
                setTitle("");
                setPricePerDay("");
                navigate("/apartments", { replace: true });
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            });


    }







    return (
        <form onSubmit={handleSubmit}>
            <>
                <h1>Add An Apartment</h1>

                <label>Title</label>
                <input value={title} type="text" onChange={(e) => { setTitle(e.target.value) }} />

                <label>Image</label>
                <input value={img} type="text" onChange={(e) => { setImg(e.target.value) }} />

                <label>Price Per Day</label>
                <input value={pricePerDay} type="number" onChange={(e) => { setPricePerDay(e.target.value) }} />

                <button type="submit">Create</button><br />

            </>
        </form>
    );

}

export default CreateApartment;

