import styles from './Navbar.module.css'
import logo from "../../assets/logo.png"
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg pt-4">
                <div className="container">
                    <img src={logo} alt="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-evenly" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 ms-lg-5 ps-lg-5 mb-lg-0">
                            <li className="nav-item">
                                <button className="nav-link active" aria-current="page">Become a Renter</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link">Rental Deals</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link">How it Work</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link">Why Choose Us</button>
                            </li>


                        </ul>

                        <ul  className="navbar-nav mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <button className="nav-link active" aria-current="page" >Sign in</button>
                            </li>
                            <li className="nav-item">
                                <button className='btn btn-primary text-white'>Sign Up</button>
                            </li>


                        </ul>



                    </div>
                </div>
            </nav>
        </>
    )
}


export default Navbar
