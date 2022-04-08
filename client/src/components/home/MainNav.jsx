
import { Link } from "react-router-dom";
import styles from "./MainNav.module.css";

const MainNav = () => {
    return (
        <div className={styles.mainnav}>
            <div className={styles.navitem}>
                <Link to="/profile">
                    <img alt="profile" src="./client/../geta_steel_i.png" className={styles.navicon} />
                </Link>
            </div>
            <div className={styles.navitem}>
                <Link to="/work">
                    <img alt="work" src="./client/../moonpie_i.png" className={styles.navicon} />
                </Link>
            </div>
            <div className={styles.navitem}>
                <Link to="/">
                    <img alt="home" src="./client/../samuraihelmet.png" className={styles.navbrand} />
                </Link>
            </div>
            <div className={styles.navitem}>
                <Link to="/school">
                    <img alt="school" src="./client/../bearclaw.png" className={styles.navicon} />
                </Link>
            </div>
            <div className={styles.navitem}>
                <Link to="/fun">
                    <img alt="fun" src="./client/../ramen.gif" className={styles.navicon} />
                </Link>
            </div>
        </div>
    )
}

export default MainNav;