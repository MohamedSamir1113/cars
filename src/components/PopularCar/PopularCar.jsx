import styles from './PopularCar.module.css'
import car1 from "../../assets/car1.png"
import Frame from "../../assets/Frame.png"
function PopularCar() {
    return (
        <div className="row p-0 m-0">
            <div className={`col-md-3 card ${styles.shadow}`}>
                <img src={car1} className='w-75' alt="" />
                <h5 className="mt-3">Toyota Corola</h5>
                <div className="d-flex pb-2 align-items-center">
                    <i className="fa-solid fa-star me-2 text-warning"></i>
                    <h6 className="p-0 m-0">4.6</h6>
                    <small className="text-muted ms-1">(1345 reviews)</small>
                </div>
                <div className='d-flex justify-content-between w-75'>
                    <div className='d-flex'>
                        <i className="fa-regular text-muted fs-5 fa-user me-1"></i>
                        <small className='text-muted p-0 m-0'>2 Passengers</small>
                    </div>

                    <div className='d-flex'>
                        <i className="fa-solid text-muted fs-5 fa-snowflake me-1"></i>
                        <small className='text-muted p-0 m-0'>Air Conditioning</small>
                    </div>
                </div>

                <div className='d-flex justify-content-between w-75 mt-3'>
                    <div className='d-flex'>
                    <i className="fa-solid fa-calendar-days text-black me-1 fs-5"></i>
                        <small className='text-muted p-0 m-0'>2022</small>
                    </div>

                    <div className='d-flex me-4'>
                        <img src={Frame} alt="" />
                        <small className='text-muted p-0 m-0'>Automatic</small>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default PopularCar
