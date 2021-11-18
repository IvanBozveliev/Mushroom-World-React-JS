import './AllMush.css';
import Mush from './Mush';
import * as mushServices from '../../services/mushServices';
import mushroom5 from '../images/mushroom5.jpg';
import {Component} from 'react';

class AllMush extends Component{
    constructor(props){
        super(props)

        this.state ={
            products: []
        }
    }

    componentDidMount(){
      mushServices.getAll()
        .then(data => this.setState({products: data}))
     
    }

    render(){
    return (
        <section>
            <h2>All Mushrooms</h2>
            <div className="wrapper">
                <div className="spacer-mush">
                    <ul>
                        {this.state.products.map(x => <Mush key = {x._id} {...x}/>)}
                    </ul>
                </div>
                <div className="right-element">
                    <div className="images_box">
                        <figure><img src={mushroom5} /></figure>
                    </div>
                </div>
            </div>


        </section>
  
    )
    }
}

export default AllMush;