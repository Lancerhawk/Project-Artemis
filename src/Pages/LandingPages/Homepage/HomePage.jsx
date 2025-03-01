import AICards from '../../../Components/LandingPageComponents/AICards/AICards';
import LandingCards from '../../../Components/LandingPageComponents/LandingCards/LandingCards';
import LandingComponent from '../../../Components/LandingPageComponents/LandingComponent/LandingComponent';
import './HomePage.css';

function HomePage(){
    return(
        <>
        <LandingComponent/>
        <LandingCards/>
        <AICards/>
        </>
    )
}

export default HomePage;