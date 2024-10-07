/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react'
import styles from './SearchBar.module.css'
import axios from 'axios'
function SearchBar({setCars}) {
    const [searchedCar, setSearchedCar] = useState("")
    //const [cars, setCars] = useState([])
    async function searchCar(searchedCar) {
        let res =await axios.get(`https://freetestapi.com/api/v1/cars?search=${searchedCar}`)
        setCars(res.data);

    }
    
    useEffect(() => {
        try {
            searchCar(searchedCar)
        } catch (error) {
            console.log(error);

        }
    }, [searchedCar])
    
    return (
        <div className={`${styles['input-group']} flex-nowrap shadow mb-3`}>
            <span className={`${styles['input-group-text']}`}>
                <i className='fas fa-map-marker-alt'></i>
            </span>
            <input onChange={(e) => setSearchedCar(e.target.value)} type="text" placeholder="Search by name" aria-label="Username" aria-describedby="addon-wrapping" className="form-control" />
            <button type="button" className="btn bold btn-primary"> Search </button>
        </div>
    )
}


export default SearchBar
