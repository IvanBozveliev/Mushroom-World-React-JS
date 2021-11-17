import './AllRecipes.css';
import Recipe from './Recipe';
import * as recipeServices from '../../services/recipeServices'
import {Component} from 'react';

class AllRecipes extends Component{
    constructor(props){
        super(props)

        this.state ={
            products: []
        }
    }

    componentDidMount(){
       recipeServices.getAll()
        .then(data => this.setState({products: data}))
     
    }

    render(){
    return (
        <section>
            <h2>All Recipes</h2>
            <div className="wrapper">
                <div className="spacer">
                    <ul>
                        {this.state.products.map(x => <Recipe key = {x._id} {...x}/>)}
                    </ul>
                </div>
                <div className="right-element">
                    <div className="images_box">
                        <figure><img src="/images/mushroom5.jpg" /></figure>
                    </div>
                </div>
            </div>


        </section>
  
    )
    }
}

export default AllRecipes;