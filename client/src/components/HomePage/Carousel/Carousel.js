import Search from '../Search';
import * as mushService from '../../../services/mushServices';
import * as recipeService from '../../../services/recipeServices';

import { useEffect, useState } from 'react';

const Carousel = () => {
    const [mushrooms, setMushrooms] = useState([]);
    const [dish, setDish] = useState([]);

    useEffect(() => {
        mushService.getAll()
            .then(result => {
                setMushrooms(result)
            })
    }, [])

    useEffect(() => {
        recipeService.getAll()
            .then(result => {
                setDish(result)
            })
    }, [])
    return (
        <div className="carousel-inner">
        <div className="carousel-item active">

            <div className="container-fluid padding_dd">
                <div className="carousel-caption">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="text-bg">
                                <span>Welcome to</span>
                                <h1>World of Mushrooms</h1>
                                <label htmlFor='mush' className='searchName'>Mushrooms:</label>
                                <Search id='mush' placeholder="Enter mushroom name.." typeDetails ='mush' products={mushrooms}/>
                                <p>Within the ecological community, there is a growing understanding of the utterly vital roles fungi play in healthy ecosystems. And yet within our society at large, there remains more fear than knowledge about these amazing organisms. </p>
                                
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="images_box">
                                <figure><img src='/images/mushroom3.png' /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="carousel-item">

            <div className="container-fluid padding_dd">
                <div className="carousel-caption">

                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="text-bg">
                                <span>Welcome to</span>
                                <h1>World of Mushrooms</h1>
                                <label htmlFor='recipe' className='searchName'>Recipes:</label>
                                <Search id='recipe' placeholder="Enter recipe name.." typeDetails ='recipes' products={dish}/>
                                <p>The goal of this website is to give wild mushroom novices a safe and immersive introduction to fungi that can serve as a solid base for future exploration, whether that be learning to forage or grow mushrooms, or incorporating fungal knowledge into other practices like gardening, herbalism, or art. </p>

                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="images_box">
                                <figure><img src='/images/recipe1.png' /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


        <div className="carousel-item">

            <div className="container-fluid padding_dd">
                <div className="carousel-caption ">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="text-bg">
                                <span>Welcome to</span>
                                <h1>World of Mushrooms</h1>
                                <p>On our site you can also choose different recipes for cooking mushrooms. Which can enrich you culinary and contribute to a unique taste experience. </p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="images_box">
                                <figure><img src='/images/mushroom2.png' /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Carousel;