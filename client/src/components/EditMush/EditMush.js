import './EditMush.css';
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';

import * as mushServices from '../../services/mushServices';

const EditMush = ({
    match
}) => {
    
    const [mush, setMush] = useState({});
    const [error, setError] = useState('');
    const history = useHistory();

    useEffect(() => {
        mushServices.getOne(match.params.mushId)
            .then(res => setMush(res))
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setError('')
        }, 5000)
     }, [error])

    const onMushEdit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let title = formData.get('title');
        let description = formData.get('description');
        let imageUrlOne = formData.get('imageUrlOne');
        let imageUrlTwo = formData.get('imageUrlTwo');
        let mushType = formData.get('mushType');
        
        mushServices.editOne(match.params.mushId, {
            title,
            description,
            imageUrlOne,
            imageUrlTwo,
            mushType,
            author: sessionStorage.username
        })

            .then((res) => {
                if(res.ok){
                    history.push(`/mush/details/${mush._id}`)
                }else{
                    setError(res.message)
                    return;
                }
                
            })
            
    }

    return (
        <div id="contact" className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="titlepage">
                            <h2>Edit <strong className="llow">Mushroom</strong></h2>
                        </div>
                    </div>

                </div>
                {error && <div className="errorEdit"><p className='errTxtEdit'>{error}</p></div>}
                <div className="white_color">
                    <div className="row">

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <form className="contact_bg" onSubmit={onMushEdit} method="POST">
                                <div className="row">
                                    <div className="col-md-12">

                                        <div className="col-md-12">
                                            <label htmlFor="mushname" className='label'>Mushroom Name</label>
                                            <input id="mushname" className="contactus" placeholder="Mushroom Name" type="text" name="title" defaultValue={mush.title} />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="firstImage" className='label'>First Image</label>
                                            <input id="firstImage" className="contactus" placeholder="Type Image URL" type="text" name="imageUrlOne" defaultValue={mush.imageUrlOne} />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor='secondImage' className='label'>Second Image</label>
                                            <input id="secondImage" className="contactus" placeholder="Type Image URL" type="text" name="imageUrlTwo" defaultValue={mush.imageUrlTwo} />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="distribution">Distribution</label>
                                            <textarea id="distribution" className="textarea" placeholder="Distribution Summary" type="text" name="description" defaultValue={mush.description}></textarea>
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="mush">Type:  </label>
                                            <select id="mush" className="select" type="select" name="mushType" >
                                                
                                                <option defaultValue="edable">edable</option>
                                                <option defaultValue="poison">poison</option>
                                                
                                            </select>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <button className="send" type="submit">Edit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EditMush;