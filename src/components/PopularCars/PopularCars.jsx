import styles from './PopularCars.module.css'
function PopularCars() {
    return (
        <div className='container text-center'>
            <button className={`${styles.btnTitle}`} style={{borderRadius:"8px"}}> POPULAR RENTAL DEALS </button>
            <h1 className='text-center m-4'>Most popular cars rental deals</h1>
        </div>
    )
}

export default PopularCars
