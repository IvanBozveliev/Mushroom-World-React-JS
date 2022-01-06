import './EditMush.css';
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import { isAuth } from '../../HOC/isAuth'
import * as mushServices from '../../services/mushServices';
import { getUser } from '../../services/authService';
import Form from '../Forms/MushroomForm';

const types = [
    { value: 'edible', text: 'edible' },
    { value: 'poison', text: 'poison' }
];

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
        let identification = formData.get('identification');
        let culinary = formData.get('culinary');
        let imageUrlOne = formData.get('imageUrlOne');
        let imageUrlTwo = formData.get('imageUrlTwo');
        let mushType = formData.get('mushType');

        mushServices.editOne(match.params.mushId, {
            title,
            description,
            identification,
            culinary,
            imageUrlOne,
            imageUrlTwo,
            mushType,
            author: getUser().username
        })

            .then((res) => {
                if (res.ok) {
                    history.push(`/mush/details/${mush._id}`)
                } else {
                    setError(res.message)
                    return;
                }

            })

    }

    const onSelected = (data) => {
        setMush(prev => ({ ...prev, mushType: data }))
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

                            <Form onSubmit={onMushEdit} types={types} mush={mush} onSelected={onSelected} />

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default isAuth(EditMush);