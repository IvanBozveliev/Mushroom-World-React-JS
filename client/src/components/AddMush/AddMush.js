import './AddMush.css';
import * as mushServices from '../../services/mushServices';
import { useState, useEffect } from 'react';
import { isAuth } from '../../HOC/isAuth';

import Form from '../Forms/MushroomForm';

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

                            <Form onSubmit={onMushCreate} />
                           
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default isAuth(AddMush);