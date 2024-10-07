import styles from './Testomonial.module.css'
import image1 from "../../assets/Rectangle 8 (1).png"
import girl from "../../assets/girl.png"
function Testomonial() {
    return (
        <>
            <section className='position-relative text-center my-3 py-5'>
                <button className={`${styles.btnTitle}`} style={{ borderRadius: "8px" }}> Testomonial </button>
                <h1 className='text-center m-4'>Most popular cars rental deals</h1>
                <div className="d-flex flex-wrap justify-content-around">

                    <div className='card mb-3 mx-2 shadow pb-5' style={{ maxWidth: "540px" }}>
                        <div className="row g-0">

                            <div className="col-md-6">
                                <img src={image1} className='img-fluid rounded-start w-100' alt="" />
                            </div>

                            <div className="col-md-6">
                                <div className="card-body">
                                    <h1 className='text-start card-title mb-0'>5.5
                                        <small className='fs-5 ms-3'>stars</small>
                                    </h1>
                                    <div className='text-start'>
                                        <i className="fa-solid fa-star me-2 text-warning"></i>
                                        <i className="fa-solid fa-star me-2 text-warning"></i>
                                        <i className="fa-solid fa-star me-2 text-warning"></i>
                                        <i className="fa-solid fa-star me-2 text-warning"></i>
                                        <i className="fa-solid fa-star me-2 text-warning"></i>
                                    </div>
                                    <p className='card-text my-4'>“I feel very secure when using caretall&apos;s services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
                                    <div className='card-text text-start'>
                                        <p className='bold mb-0'>Charlie Johnson</p>
                                        <small className='text-muted fs-6 text-start '> Last updated 3 mins ago</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='card mb-3 mx-2 shadow' style={{ maxWidth: "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-6">
                                <img src={girl} className='img-fluid rounded-start w-100' alt="" />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h1 className='text-start card-title mb-0'>5.5
                                        <small className='fs-5 ms-3'>stars</small>
                                    </h1>
                                    <div className='text-start'>
                                        <i className="fa-solid fa-star me-2 text-warning"></i>
                                        <i className="fa-solid fa-star me-2 text-warning"></i>
                                        <i className="fa-solid fa-star me-2 text-warning"></i>
                                        <i className="fa-solid fa-star me-2 text-warning"></i>
                                        <i className="fa-solid fa-star me-2 text-warning"></i>
                                    </div>
                                    <p className='card-text my-4'>“I feel very secure when using caretall&apos;s services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
                                    <div className='card-text text-start'>
                                        <p className='bold mb-0'>Charlie Johnson</p>
                                        <small className='text-muted fs-6 text-start '> Last updated 3 mins ago</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Testomonial
