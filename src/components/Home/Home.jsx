import styles from './Home.module.css'
import carBG from "../../assets/car 2 1.png"
import andriod from "../../assets/andriod.png"
import ios from "../../assets/ios.png"
import { useEffect, useState } from 'react';
function Home() {
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        setShowImage(true) 
    }, []);
    return (
        <>
            <header className='container-fluid pt-3'>
                <div className='d-flex align-items-center justify-content-between'>
                    <article>
                        <h1>
                            Find, book and rent a car <span>Easily</span>
                        </h1>
                        <p>Get a car wherever and whenever you need it with your IOS and Android device.</p>
                        <div>
                            <img src={andriod} className='me-2' alt="" />
                            <img src={ios} alt="" />
                        </div>
                    </article>
                    <img
                        src={carBG}
                        alt=""
                        className={showImage ? styles['img-animate'] : ''}
                    />
                </div>
            </header>
        </>
    )
}

export default Home
