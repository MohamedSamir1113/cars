import { useEffect, useState } from 'react'
import styles from './PopularCars.module.css'
import axios from 'axios'
import PopularCar from '../PopularCar/PopularCar'
import { Link } from 'react-router-dom'
function PopularCars() {

    const [popularCars, setPopularCars] = useState([])
    async function getPopularCars() {
        let res = await axios.get(`https://freetestapi.com/api/v1/cars?limit=4`)
        console.log(res.data);
        setPopularCars(res.data)
    }

    useEffect(function () {
        try {
            getPopularCars()
        } catch (error) {
            console.log(error);
        }
    }, [])

    return (
        <div className='container text-center'>
            <button className={`${styles.btnTitle}`} style={{ borderRadius: "8px" }}> POPULAR RENTAL DEALS </button>
            <h1 className='text-center m-4'>Most popular cars rental deals</h1>

            <div className="row p-0 m-0 g-3" >
                {
                    popularCars.map((popularCar) => <PopularCar key={popularCar.id} linkPath={"all-vehicles/car"} popularCar={popularCar} />)
                }
            </div>

            <div className='mt-5'>
                <Link to="all-vehicles">
                    <button className='my-3  w-md-25 btn btn-outline-secondary'>
                        Show all vehicles <i className='fa-solid fa-arrow-right'></i>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default PopularCars
