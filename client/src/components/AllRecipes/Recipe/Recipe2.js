import { Link } from 'react-router-dom';
import { Component } from 'react';
import "./Recipe.css";

class Recipe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showStore: false
        }
    }

    setMyState() {
        this.setState({ showStore: !this.state.showStore })
    }

    render() {
        return (
            <>
                <li
                    onMouseEnter={() => this.setMyState()}
                    onMouseLeave={() => this.setMyState()}
                >
                    <Link to="article.html">{this.props.title} </Link>
                </li>
                {this.state.showStore && console.log(this.state.showStore)}
                {this.state.showStore && (
                    <div className="card-recipe">

                        {/* <h3 className='poison'>Poison<img src='/images/skull2.png' /></h3>  */}
                        {/* <div className="cta-container"><Link to="#" className="det-link">Details</Link></div> */}
                        <div className="card-recipe_circle"><img src={this.props.imageUrl} /></div>

                    </div>
                )}

            </>
        )
    }

}

export default Recipe;