/* eslint-disable react/prop-types */

import styles from './PopularCar.module.css'
import car1 from "../../assets/car1.png"
import car3 from "../../assets/car3.png"
import Frame from "../../assets/Frame.png"
import { Link } from 'react-router-dom'
function PopularCar({ popularCar ,linkPath}) {
    let { id, model,make, price, year, transmission } = popularCar
    return (

        <div className='col-md-3'>
            <div className={`card ${styles.shadow} p-1`}>
                <img src={model == "Corolla" ? car1 : car3} className='w-75' alt="" />
                <h5 className="mt-3 text-start">{make} {model}</h5>

                <div className="d-flex pb-2 align-items-center">
                    <i className="fa-solid fa-star me-2 text-warning"></i>
                    <h6 className="p-0 m-0">4.6</h6>
                    <small className="text-muted ms-1">(1345 reviews)</small>
                </div>

                <div className='d-flex justify-content-between '>
                    <div className='d-flex'>
                        <i className="fa-regular text-muted fs-5 fa-user me-1"></i>
                        <small className='text-muted p-0 m-0'>2 Passengers</small>
                    </div>

                    <div className='d-flex me-5'>
                        <i className="fa-solid text-muted fs-5 fa-snowflake me-1"></i>
                        <small className='text-muted p-0 m-0'>Air Conditioning</small>
                    </div>
                </div>

                <div className='d-flex justify-content-between mt-3'>
                    <div className='d-flex'>
                        <i className="fa-solid fa-calendar-days text-black me-1 fs-5"></i>
                        <small className='text-muted p-0 m-0'>{year}</small>
                    </div>

                    <div className='d-flex me-5'>
                        <img src={Frame} alt="" />
                        <small className='text-muted p-0 m-0'>{transmission}</small>
                    </div>
                </div>

                <hr />
                <div className='d-flex align-items-center justify-content-between w-75'>
                    <p className='text-muted p-0 m-0'>Price</p>
                    <h6 className="p-0 m-0">{price}$/day</h6>
                </div>

                

                    <Link to={`${linkPath}/${id}`}>
                        <button className='my-3 w-75 btn btn-primary'>view details <i className='fa-solid fa-arrow-right'></i></button>
                    </Link>
                

            </div>
        </div>

    )
}

export default PopularCar
