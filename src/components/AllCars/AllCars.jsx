import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './AllCars.module.css';
import axios from 'axios';
import PopularCar from '../PopularCar/PopularCar';
import SearchBar from '../SearchBar/SearchBar';

function AllCars() {

     const [cars, setCars] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const carsPerPage = 12;

    async function getCars() {
        let res = await axios.get(`https://freetestapi.com/api/v1/cars?limit=30`)
        setCars(res.data);

    }
    useEffect(() => {
        try {
            getCars()
        } catch (error) {
            console.log(error);

        }
    }, []);

    // Calculate total pages based on the number of cars
    const totalPages = Math.ceil(cars.length / carsPerPage);

    // Get cars for the current page
    const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);
    
    // Handler for page change
    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div className='container-fluid'>
            <div className='p-4'>
                <div className='ps-3 pt-3 fs-6'>
                    <Link to="/"> Home</Link> / Cars
                </div>
            </div>

            <div className='container text-center'>
                <SearchBar cars={cars} setCars={setCars}/>
                <button className={styles.btnTitle} style={{ borderRadius: '8px' }}>
                    POPULAR RENTAL DEALS
                </button>
                <h1 className='text-center m-4'>Most popular car rental deals</h1>


                <div className="row justify-content-center p-0 m-0 g-3">
                    {currentCars.map((car) => (<PopularCar key={car.id} linkPath={"car"} popularCar={car} />
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="d-flex justify-content-center my-4">
                    <nav aria-label="Page navigation">
                        <ul className="pagination">
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
                                    Previous
                                </button>
                            </li>
                            {/* Generate page numbers dynamically */}
                            {[...Array(totalPages).keys()].map((_, index) => (
                                <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                    <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
                                    Next
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default AllCars;
