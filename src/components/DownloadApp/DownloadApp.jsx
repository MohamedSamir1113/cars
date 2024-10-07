import styles from './DownloadApp.module.css'
import andriod from "../../assets/andriod.png"
import ios from "../../assets/ios.png"
import iPhone14 from "../../assets/iPhone-14.png"
function DownloadApp() {
    return (
        <div className='d-flex mt-5 justify-content-around'>
            <div>
                <div className='mx-5'>
                    <h1>Download Rentcars App for <span className='text-primary'>FREE </span></h1>
                    <small>For faster, easier booking and exclusive deals.</small>
                    <div className='my-3 my-3 col-md-7 d-flex justify-content-center'>
                        <img src={andriod} className='me-2' alt="" />
                        <img src={ios} alt="" />
                    </div>
                    <form className='d-flex flex-column col-md-7'>
                        <input type="text" placeholder="Name" className={`${styles[`contact-us`]} my-1 ${styles[`px-3`]}`} />
                        <input type="text" placeholder="Phone Number" className={`${styles[`contact-us`]} my-1 ${styles[`px-3`]}`} />
                        <input type="email" placeholder="Email" className={`${styles[`contact-us`]} my-1 ${styles[`px-3`]}`} />
                        <div className='d-flex justify-content-center my-2'>
                            <button type='submit' className='btn bold btn-primary px-5'>send</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-end'>
                <img src={iPhone14} className={`${styles[`mobile-img`]}`} alt="" />
            </div>

        </div>
    )
}

export default DownloadApp
