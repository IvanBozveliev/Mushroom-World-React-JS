import './AllMush.css'
const AllMush = () => {
    return (
        <section>
            <h2>All Mushrooms</h2>
            <div class="wrapper">
                <div class="spacer">
                    <ul>
                        <li>
                        
                            <a href="article.html">Portabello </a>
                            <div class="card">
                                
                                {/* <h3 class='poison'>Poison<img src='/images/skull2.png' /></h3>  */}
                                <h3 class='edible'>Edible<img src='/images/edible.png' /></h3>
                                <div class="cta-container"><a href="#" class="det-link">Details</a></div>
                                <div class="card_circle"><img src="/images/mush.jpg" /></div>

                            </div>
                        </li>
                        <li>
                            <a href="article.html">Shiitake </a>
                        </li>
                        <li>
                            <a href="article.html">Maitake </a>
                        </li>
                        <li>
                            <a href="article.html">Oyster </a>
                        </li>
                        <li>
                            <a href="article.html">Enoki </a>
                        </li>
                    </ul>
                </div>
                <div class="right-element">
                    <div className="images_box">
                        <figure><img src="/images/mushroom5.jpg" /></figure>
                    </div>
                </div>
            </div>


        </section>
        // <section id="all-listings">
        //     <h1>All Mushrooms</h1>
        //     {/* <!-- If there are offers for housing in the database display each of them --> */}

        //     <div class="card">
        //         <h3>Real House Luxury Villa</h3>
        //         <p>Spacious and grand villa, 3 bedroom, 2 bath.</p>

        //         <div class="cta-container"><a href="#" class="det-link">Details</a></div>
        //         <div class="card_circle"><img src="/images/mush.jpg" /></div>

        //     </div>
        //   

        //     {/* <!-- If there are still no offers for housing in the database display: -->
        //     <!--<div class="no-data-listing">
        //         <p class="no-offer">There are no housing offers found...</p>
        //     </div>--> */}

        // </section>
    )
}

export default AllMush;