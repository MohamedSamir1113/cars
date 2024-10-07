import styles from './Home.module.css'
import carBG from "../../assets/car 2 1.png"
import andriod from "../../assets/andriod.png"
import ios from "../../assets/ios.png"
import { useEffect, useState } from 'react';
import PopularCars from '../PopularCars/PopularCars';
import Navbar from '../Navbar/Navbar';
import HowItWork from '../HowItWork/HowItWork';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import { useMediaQuery } from 'react-responsive';
function Home() {
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        setShowImage(true)
    }, []);
    const isScreenSmall = useMediaQuery({ query: "(max-width: 768px)" });
    return (
        <>
            <Navbar />
           {isScreenSmall?<>
            <header className='container-fluid pt-3'>
                <div className='row p-0 m-0 align-items-center justify-content-between'>
                    <img
                        src={carBG}
                        alt=""
                        className={`${showImage ? styles['img-animate'] : ''} col-md-6  ${styles.responsiveImg}`}
                    />
                    <div className="col-md-5 m-0 p-0">
                        <div className='w-75  mx-auto'>
                            <h1>
                                Find, book and rent a car <span>Easily</span>
                            </h1>
                            <p>Get a car wherever and whenever you need it with your IOS and Android device.</p>
                            <div>
                                <img src={andriod} className='me-2' alt="" />
                                <img src={ios} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </header>
           </>:<>
           <header className='container-fluid pt-3'>
                <div className='row p-0 m-0 align-items-center justify-content-evenly'>
                    <div className="col-md-5 m-0 p-0">
                        <div className='w-75  mx-auto'>
                            <h1>
                                Find, book and rent a car <span>Easily</span>
                            </h1>
                            <p>Get a car wherever and whenever you need it with your IOS and Android device.</p>
                            <div>
                                <img src={andriod} className='me-2' alt="" />
                                <img src={ios} alt="" />
                            </div>
                        </div>
                    </div>

                    <img
                        src={carBG}
                        alt=""
                        className={`${showImage ? styles['img-animate'] : ''} col-md-6  ${styles.responsiveImg}`}
                    />

                </div>
            </header>
           </>}
            <PopularCars />
            <HowItWork />
            <WhyChooseUs />
        </>
    )
}

export default Home
