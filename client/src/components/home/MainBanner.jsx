import styles from "./MainBanner.module.css";

const MainBanner = () => {
    return (
        <div className={styles.mbimgwrapper}>
            <img alt="banner" src="./client/../Refreshed_Fieldz_by_Drag0nalayer.jpg" className={styles.mbimg}/>
        </div>
    )
}

export default MainBanner;