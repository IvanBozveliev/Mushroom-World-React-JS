import './HomePage.css';
import Carousel from './Carousel';
import ListCarousel from './ListCarousel';

const HomePage = () => {

 

    return (
        <section className="slider_section">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">

                <ListCarousel />

                <Carousel />

            </div>

        </section>
    )
}

export default HomePage;
