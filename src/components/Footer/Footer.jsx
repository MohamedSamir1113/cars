import styles from './Footer.module.css'
import footerLogo from "../../assets/logo-footer.png"
import location from "../../assets/location (1).png"
import call from "../../assets/call.png"
import sms from "../../assets/sms.png"
import facebook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"
import youtube from "../../assets/youtube.png"
function Footer() {
    return (
        <footer className='w-100 py-5'>
            <div className='text-white container'>
                <div className='sec-8 col-md-12 d-flex flex-wrap mx-2 justify-content-between'>
                    <div className='col-md-3 me-3 mb-5'>
                        <img src={footerLogo} className='mb-4' alt="" />

                        <div className='d-flex'>
                            <img src={location} className='align-self-center me-2' alt="" />
                            <div className='d-flex flex-column'>
                                <small style={{ fontSize: "11px" }}>25566 Hc 1, Glenallen,</small>
                                <small style={{ fontSize: "11px" }}> Alaska, 99588, USA</small>
                            </div>

                        </div>
                        <div className='d-flex my-2'>
                            <img src={call} className='align-self-center me-2' alt="" />
                            <div className='d-flex flex-column'>
                                <small style={{ fontSize: "11px" }}>+603 4784 273 12</small>
                            </div>

                        </div>
                        <div className='d-flex'>
                            <img src={sms} className='align-self-center me-2' alt="" />
                            <div className='d-flex flex-column'>
                                <small style={{ fontSize: "11px" }}>rentcars@gmail.com</small>

                            </div>

                        </div>
                    </div>
                    <div className='col-md-2 d-flex flex-column me-3 mb-5'>
                        <p className="mb-4">Our Products</p>

                        <div className='d-flex flex-column align-items-start'>
                            <small>Career</small>
                            <small>Car</small>
                            <small>Packages</small>
                            <small>Features</small>
                            <small>Priceline</small>
                        </div>
                    </div>
                    <div className='col-md-2 d-flex flex-column me-3 mb-5'>
                        <p className="mb-4">Resources</p>

                        <div className='d-flex flex-column align-items-start'>
                            <small>Download</small>
                            <small>Help Centre</small>
                            <small>Guides</small>
                            <small>Partner Network</small>
                            <small>Cruises</small>
                            <small>Developer</small>
                        </div>
                    </div>
                    <div className='col-md-2 d-flex flex-column me-3 mb-5'>
                        <p className="mb-4">About Rentcars</p>

                        <div className='d-flex flex-column align-items-start'>
                            <small>Why choose us</small>
                            <small>Our Story</small>
                            <small>Investor Relations</small>
                            <small>Press Center</small>
                            <small>Advertise</small>

                        </div>
                    </div>
                    <div className='col-md-2 d-flex flex-column mb-5'>
                        <p className="mb-4">Follow Us</p>
                        <div className='col-md-6 d-flex justify-content-between'>
                            <img src={facebook} alt="" />
                            <img src={instagram} alt="" />
                            <img src={youtube} alt="" />
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <small className='text-md-center'>Copyright 2023 ・ Rentcars, All Rights Reserved</small>
                </div>
            </div>
        </footer>
    )
}

export default Footer
