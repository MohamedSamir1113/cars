import styles from './WhyChooseUs.module.css'
import audi from "../../assets/Audi 1.png"
import message from "../../assets/message.png"
import chat from "../../assets/chat.png"
import user from "../../assets/user (1).png"
function WhyChooseUs() {
    return (
        <>
            <div className='container-fluid'>
                <div className="row my-5 py-5">
                    <div className="d-flex align-items-center col-lg-6">
                        <img src={audi} className={`${styles.resposiveImg}`} alt="" />
                    </div>

                    <div className="col-md-6">
                        <button className={`${styles.btnTitle}`} style={{ borderRadius: "8px" }}> Why Choose Us </button>
                        <h4 className='mt-3 mb-4'>We offer the best experience with our rental deals</h4>

                        <div className='d-flex align-items-center'>
                            <img src={user} className='me-3' alt="" />
                            <div className='m-0 p-0 '>
                                <h6 className='mb-0'>Best price guaranteed</h6>
                                <small className='text-muted'>Find a lower price? We’ll refund you 100% of the difference.</small>
                            </div>
                        </div>
                        <div className='d-flex mt-4 align-items-center'>
                            <img src={user} className='me-3' alt="" />
                            <div className='m-0 p-0 '>
                                <h6 className='mb-0'>24 hour car delivery</h6>
                                <small className='text-muted'>Book your car anytime and we will deliver it directly to you.</small>
                            </div>
                        </div>
                        <div className='d-flex mt-4 align-items-center'>
                            <img src={message} className='me-3' alt="" />
                            <div className='m-0 p-0 '>
                                <h6 className='mb-0'>Best price guaranteed</h6>
                                <small className='text-muted'>Find a lower price? We’ll refund you 100% of the difference.</small>
                            </div>
                        </div>
                        <div className='d-flex mt-4 align-items-center'>
                            <img src={chat} className='me-3' alt="" />
                            <div className='m-0 p-0 '>
                                <h6 className='mb-0'>24/7 technical support</h6>
                                <small className='text-muted'>Have a question? Contact Rentcars support any time when you have problem.</small>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </>
    )
}

export default WhyChooseUs
