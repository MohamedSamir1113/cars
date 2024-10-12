import styles from './CarDetails.module.css'
import { useEffect, useState } from "react"
import audi from "../../assets/Audi 1.png"
import { Link, useParams } from 'react-router-dom';
import Frame from "../../assets/Frame.png"
import door from "../../assets/doors.png"
import axios from 'axios';

function CarDetails() {
    const [showImage, setShowImage] = useState(false);
    const [carDetails, setCar] = useState({});

    const { id } = useParams();

    async function getCar(id) {
        let res = await axios.get(`https://myfakeapi.com/api/cars/${id}`)
        console.log(res.data.Car);
        setCar(res.data.Car);
    }


    useEffect(() => {
        setShowImage(true)
        try {
            getCar(id)
        } catch (error) {
            console.log(error);

        }
    }, [id])

    let { car, car_model, availability } = carDetails

    return (
        <div className='container-fluid'>
            <div className='p-4'>
                <div className='ps-3 pt-3 fs-6'><Link to="/"> Home</Link>/<Link to="/all-vehicles"> Cars</Link>/ Car details / {car} {car_model}</div>
            </div>
            <div className="row my-5 py-5">
                <div className="d-flex align-items-center col-lg-6">
                    <img src={audi} className={`${showImage ? styles['img-animate'] : ''} ${styles.responsiveImg}`} alt="" />
                </div>

                <div className="col-md-6">
                    <button className={`${styles.btnTitle}`} style={{ borderRadius: "8px" }}> Why Choose Us </button>
                    <h4 className='mt-2'>We offer the best experience with our rental deals</h4>
                    <div className='d-flex'>
                        <i className="fa-regular text-muted fs-5 fa-user me-1 mb-3 text-muted"></i>
                        <small className='text-muted p-0 m-0'>2 Passengers</small>
                    </div>

                    <div className='d-flex me-5 mb-1'>
                        <i className="fa-solid text-muted fs-5 fa-snowflake mb-3 text-muted me-1"></i>
                        <small className='text-muted p-0 m-0'>Air Conditioning</small>
                    </div>


                    <div className='d-flex me-5 mb-3'>
                        <img src={Frame} alt="" />
                        <small className='text-muted p-0 m-0'>{availability?"Available":"Out Of Stock"}</small>
                    </div>
                    <div className='d-flex me-5'>
                        <img src={door} alt="" />
                        <small className='text-muted p-0 m-0'>doors</small>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CarDetails
