import './AddMush.css';
import * as mushServices from '../../services/mushServices';
import { useState, useEffect } from 'react';

const AddMush = ({
    history
}) => {

    const [error, setError] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setError('')
        }, 5000)
    }, [error])

    const onMushCreate = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let title = formData.get('title');
        let description = formData.get('description');
        let imageUrlOne = formData.get('imageUrlOne');
        let imageUrlTwo = formData.get('imageUrlTwo');
        let mushType = formData.get('mushType');

        mushServices.create({
            title,
            description,
            imageUrlOne,
            imageUrlTwo,
            mushType,
            author: sessionStorage.username
        })

            .then((res) => {
                console.log(res)
                if (res.ok) {
                    history.push('/all-mushrooms')
                } else {
                    setError(res.message)
                    return
                }

            })

    }
    return (
        <div id="contact" className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="titlepage">
                            <h2>Add <strong className="llow">Mushroom</strong></h2>
                        </div>
                    </div>

                </div>
                {error && <div className="errorMush"><p className="errTxtMush">{error}</p></div>}
                <div className="white_color">
                    <div className="row">

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <form className="contact_bg" onSubmit={onMushCreate} method="POST">
                                <div className="row">
                                    <div className="col-md-12">

                                        <div className="col-md-12">
                                            <label htmlFor="mushname" className='label'>Mushroom Name</label>
                                            <input id="mushname" className="contactus" placeholder="Mushroom Name" type="text" name="title" />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="firstImage" className='label'>First Image</label>
                                            <input id="firstImage" className="contactus" placeholder="Type Image URL" type="text" name="imageUrlOne" />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor='secondImage' className='label'>Second Image</label>
                                            <input id="secondImage" className="contactus" placeholder="Type Image URL" type="text" name="imageUrlTwo" />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="distribution">Distribution</label>
                                            <textarea id="distribution" className="textarea" placeholder="Distribution Summary" type="text" name="description"></textarea>
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="mush">Type:  </label>
                                            <select id="mush" className="select" type="select" name="mushType">
                                                <option value="edable">edable</option>
                                                <option value="poison">poison</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <button className="send" type="submit">Create</button>
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

export default AddMush;