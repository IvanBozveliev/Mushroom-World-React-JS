import './AllMush.css';

const AllMush = () => {
    return (
        <section id="all-listings">
            <h1>All Mushrooms</h1>
            {/* <!-- If there are offers for housing in the database display each of them --> */}

            <div class="card">
                <h3>Real House Luxury Villa</h3>
                <p>Spacious and grand villa, 3 bedroom, 2 bath.</p>

                <div class="cta-container"><a href="#" class="det-link">Details</a></div>
                <div class="card_circle"><img src="/images/mush.jpg" /></div>

            </div>
            <div class="card">
                <h3>House Take Away</h3>
                {/* <p>Nested among stunning Victorians and located.</p> */}
                <div class="cta-container"><a href="#" class="det-link">Details</a></div>
                <div class="card_circle"><img src="/images/mush1.jpg" /></div>

            </div>

            <div class="card">
                <h3>Sunhouse C21</h3>
                <p>Spacious dining room, remodel kitchen and wonderful deeded walk-out deck. </p>
                <div class="cta-container"><a href="#" class="det-link">Details</a></div>
                <div class="card_circle"><img src="/images/mush2.jpg" /></div>

            </div>

            {/* <!-- If there are still no offers for housing in the database display: -->
            <!--<div class="no-data-listing">
                <p class="no-offer">There are no housing offers found...</p>
            </div>--> */}

        </section>
    )
}

export default AllMush;