import './Info.css';
import { isAuth } from '../../HOC/isAuth';
import { useState, useEffect, useContext } from 'react';
import { getUser } from '../../services/authService';
import * as userServices from '../../services/userServices';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { AuthContext } from '../../contexts/AuthContext';

const Info = () => {

    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState({});
    const [imageSize, setImageSize] = useState(null);

    const history = useHistory();
    const {login} = useContext(AuthContext);

    useEffect(() => {

       

        if (image) {
            setImageSize(image.size)
            if(image.size > 64000){
                return
            }
            const reader = new FileReader();
            
            reader.onloadend = () => {
                setPreview(reader.result)
            }
            reader.readAsDataURL(image);
           

        } else {
            setPreview(null)
        }
    }, [image]);

    
    useEffect(() => {
        userServices.getUserInfo(getUser().id)
          .then(res => {
            
              setUser(res)
              
          })
    }, [])

    const onInfo = (e) => {
        e.preventDefault()

        let formData = new FormData(e.currentTarget);

        let username = formData.get('username');
        let age = formData.get('age');
        let email = formData.get('email');
        let image = preview;
        
        userServices.editUserInfo({username, age, email, image, token: getUser().token}, getUser().id)
         .then(res => {
        
             if(res){
  
                login(res)
                sessionStorage.setItem('user', JSON.stringify(res))
              
                history.push('/')
             }else {
                setError(res.message)
                return;
            }
         })
    }
    return (
        <div className='infoForm'>
            <h2>Account Info</h2>
            {error && <div className="errorInfo"><p className='errTxtInfo'>{error}</p></div>}
            <form className="contact_bg" onSubmit={onInfo} method="POST">
                <div className="row">
                    <div className="col-md-12">

                        <div className="col-md-12">
                            <label htmlFor="userName" className='labelInfo'>username:</label>
                            <input id="userName" className="contactus" placeholder="Type your username" type="text" name="username" defaultValue={user.username} />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="age" className='labelInfo'>age:</label>
                            <input id="age" className="contactus" placeholder="Type your ages" type="number" name="age" defaultValue={user.age}/>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor='email' className='labelInfo'>email:</label>
                            <input id="email" className="contactus" placeholder="Type your email" type="text" name="email" defaultValue={user.email}/>
                        </div>

                        <div className="col-md-12">
                            <input
                                style={{color: imageSize > 64000 ? 'red' : 'green'}}
                                className="uploadFile"
                                type="file"
                                name='file'
                                accept='image/*'
                                onChange={e => {
                                    let file = e.target.files[0];
                                    if (file && file.type.substring(0, 5) === 'image') setImage(file)
                                }
                                } />
                        </div>

                        <div className='photoView'>
                            {preview ? 
                                <img src={preview} width='100px' height='100px' /> 
                                 :
                                <img src='/images/avatar.png' width='100px' height='100px' />
                            }
                        </div>

                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <button className="send">Send</button>
                        </div>
                    </div>
                </div>
            </form>

        </div>

    )
}

export default isAuth(Info);