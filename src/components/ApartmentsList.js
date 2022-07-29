import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';



function ApartmentsList(props) {

    const [apartmentList, setApartmentList] = useState([]);



    useEffect(() => {
        axios.get(process.env.REACT_APP_API_BASE_URL + "/apartments")
            .then(response => {
                setApartmentList(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);


    const renderApartments = () => {
        const result = apartmentList.map(element => {
            return (
                <div className='apartmentslist' key={element._id}>
                    {element.img !== "" && element.img !== undefined
                        ? <img src={element.img} alt="apartment" />
                        : <img src="https://www.krishnarealty.com/public/homesearch/image/no_property_image.jpg" alt="home" />
                    }
                    <h2>{element.title}</h2>
                    <NavLink to={`/apartments/${element._id}`}>More Details</NavLink>
                </div>
            );
        });
        return result;
    }


    return (
        <div>
            <h2>List of Apartments</h2>
            <div >
                {apartmentList === []
                    ? <p>loading...</p>
                    : renderApartments()
                }
            </div>

        </div>
    );
}

export default ApartmentsList;