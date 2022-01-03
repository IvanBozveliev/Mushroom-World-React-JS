import './Info.css';
import {isAuth} from '../../HOC/isAuth';

const info = () => {

    const onInfo = (e) => {
        e.preventDefault()
    }
    return (
        <div className='infoForm'>
            <h2>Account Info</h2>
            <form className="contact_bg" onSubmit={onInfo} method="POST">
                <div className="row">
                    <div className="col-md-12">

                        <div className="col-md-12">
                            <label htmlFor="userName" className='labelInfo'>username:</label>
                            <input id="userName" className="contactus" placeholder="Type your username" type="text" name="username"  />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="age" className='labelInfo'>age:</label>
                            <input id="age" className="contactus" placeholder="Type your ages" type="number" name="age"  />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor='email' className='labelInfo'>email:</label>
                            <input id="email" className="contactus" placeholder="Type your email" type="text" name="email" />
                        </div>
                        
                        <div className="col-md-12">
                            <input  className="uploadFile" type="file" />
                        </div>

                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <button className="send" type="submit">Send</button>
                        </div>
                    </div>
                </div>
            </form>

        </div>

    )
}

export default isAuth(info);