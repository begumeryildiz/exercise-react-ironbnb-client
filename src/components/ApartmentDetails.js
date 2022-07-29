import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

function ApartmentDetails() {

    const { apartmentId } = useParams();

    const [details, setDetails] = useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_BASE_URL + "/apartments/" + apartmentId)
            .then(response => {
                setDetails(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    const renderDetails = () => {
        return (
            <div className='apartment'>
                {details.img !== "" && details.img !== undefined
                ?<img src={details.img} alt="house" />
                :<img src="https://www.krishnarealty.com/public/homesearch/image/no_property_image.jpg" alt="home" />
        }
                <h2>{details.title}</h2>
                <p>Price Per Day: {details.pricePerDay} €</p>

                <NavLink to="/apartments">Back</NavLink>
            </div>
        );
    }
    return (
        <>
            {details === []
                ? <p>loading...</p>
                : renderDetails()
            }
        </>
    );
}

export default ApartmentDetails;