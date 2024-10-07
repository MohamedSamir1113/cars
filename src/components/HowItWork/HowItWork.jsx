import styles from './HowItWork.module.css'
import location from "../../assets/location.png"
import carIcon from "../../assets/car-icon.png"
import volvo from "../../assets/volvo.png"
import jaguar from "../../assets/jaguar.png"
import nissan from "../../assets/nissan.png"
import audi from "../../assets/audi.png"
function HowItWork() {
    return (
        <div className='container text-center my-3 py-5'>
            <button className={`${styles.btnTitle}`} style={{ borderRadius: "8px" }}> How It Work </button>
            <h1 className='text-center m-4'>Most popular cars rental deals</h1>
            <div className='row m-0 p-0 w-75 mx-auto justify-content-center'>
                <div className='col-md-4 mb-4'>
                    <img src={location} alt="" />
                    <h5>Choose location</h5>
                    <small className="text-muted text-center">Choose your and find your<br/> best car</small>
                </div>
                <div className='col-md-4 mb-4'>
                    <img src={carIcon} alt="" />
                    <h5>Pick-up date</h5>
                    <small className="text-muted text-center">Select your pick up date <br/>and time to book your<br/> car</small>
                </div>
                <div className='col-md-4 mb-4'>
                    <img src={location} alt="" />
                    <h5>Book your car</h5>
                    <small className="text-muted text-center">Book your car and we<br/> will deliver it directly to<br/> you</small>
                </div>
            </div>
            <div className='row justify-content-between mt-4 mx-auto'>
               <div className="col-md-3 mb-4"><img src={jaguar} alt="" /></div>
               <div className="col-md-3 mb-4"><img src={nissan} alt="" /></div>
               <div className="col-md-3 mb-4"><img src={volvo} alt=""  /></div>
               <div className="col-md-3 mb-4"><img src={audi} alt=""   /></div>
            </div>
        </div>
    )
}

export default HowItWork
