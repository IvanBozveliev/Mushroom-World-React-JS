import './HomePage.css';
import Carousel from './Carousel';

const HomePage = () => {

 

    return (
        <section className="slider_section">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <Carousel />

            </div>

        </section>
    )
}

export default HomePage;
