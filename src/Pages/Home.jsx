import HeroSection from '../components/HeroSection/HeroSection'
import BibleStoriesPreview from '../components/BibleStoriesPreview/BibleStoriesPreview'
import { FaBookOpen, FaGamepad, FaQuestionCircle, FaCalendarAlt } from "react-icons/fa";
import Card from "../components/Card/Card";
import PopularGames from '../components/PopularGames/PopularGames';
// import TakeQuiz from '../components/QuizSection/TakeQuiz';
// import UpcomingEvent from '../components/UpcomingEvents/UpcomingEvent';
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom';



export default function Home(){
    return(
        <>
        <div>
            <HeroSection/>

            <div className="relative -mt-12 grid grid-cols-2 gap-4 sm:gap-6 place-items-center md:flex md:justify-center">
                <Link to="/bible-stories">
                    <Card className="w-18 sm:w-22 md:w-40" icon={<FaBookOpen />} title="Bible Stories" bgColor="bg-indigo-700" />
                </Link>  
                <Link to="/games">
                    <Card className="w-18 sm:w-22 md:w-40" icon={<FaGamepad />} title="Games" bgColor="bg-purple-600" />
                </Link>
                <Link to="/quiz">
                    <Card className="w-18 sm:w-22 md:w-40" icon={<FaQuestionCircle />} title="Quiz" bgColor="bg-blue-600" />
                </Link>
                <Link to="/schedule">
                    <Card className="w-18 sm:w-22 md:w-40" icon={<FaCalendarAlt />} title="Schedule" bgColor="bg-teal-600" />
                </Link>
                </div>



            
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <BibleStoriesPreview />
            <PopularGames />
                
            </div>


            {/* <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                <TakeQuiz />
                <UpcomingEvent />
            </div> */}

            
        



        
            </div>
            <Footer />
            
       
        </>
    )
}