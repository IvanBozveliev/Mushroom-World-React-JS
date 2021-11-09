import { Component } from 'react';
import App from '../../App';

class LoadingClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
          loading: true
        }
    }

    componentDidMount() {
      this.fakeRequest()
            .then(() => {
               const el = document.querySelector('.loader_bg');
               if(el){
                   el.remove();
                   this.setState({loading: false})
               }
            })
    }

    fakeRequest = () => {
        return new Promise(resolve => setTimeout(() => resolve(), 2300))
    }

    render() {

        if(this.state.loading){
            return null;
        }

        return (
            // <App />
            <div className="loader_bg">
                <div className="loader"><img src="/images/loading-fun.gif" alt="#" /></div>
            </div>
        )

    }
}

export default LoadingClass;