import MainBanner from '../components/home/MainBanner';
import MainNav from '../components/home/MainNav';
import styles from "./PageLayout.module.css";

const PageLayout = (props) => {
    return (
        <>
            {/** Component for main-banner */}
            <MainBanner />
            {/** Component for navigation bar */}
            <MainNav />
            {/** Component for page content */}
            {props.children}
        </>
    )
}

export default PageLayout;