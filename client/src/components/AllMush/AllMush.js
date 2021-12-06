import './AllMush.css';
import Mush from './Mush';
import NavMush from './NavMush';

import * as mushServices from '../../services/mushServices';
// import mushroom5 from '../images/mushroom5.jpg';
import {Component} from 'react';


class AllMush extends Component{
    constructor(props){
        super(props)

        this.state ={
            products: [],
            currentCategory: 'all'
        }
    }

    componentDidMount(){
      mushServices.getAll()
        .then(data => this.setState({products: data}))
     
    }

    componentDidUpdate(prevProps) {
        
        const mushType = this.props.match.params.mushType;
        
        if(prevProps.match.params.mushType === mushType){
            return;
        }

        mushServices.getAll(mushType)
          .then(res => this.setState({products: res, currentCategory: mushType}))
    }

    render(){
    return (
        <section>
            <div className="titlepage">
                <h2>All <strong className="llow">Mushrooms</strong></h2>
            </div>
            <div className="btns">
             <NavMush />
            </div>
            <div className="wrapper">
                <div className="spacer-mush">
                    <ul>
                    {this.state.products?.length != 0 ? this.state.products.map(x => <Mush key={x._id} {...x} />) : <h1>Still haven`t mushrooms...</h1>}
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

export default AllMush;