import { useState } from "react";

const Form = ({
    onSubmit,
    mush,
    types,
    onSelected
}) => {
    
    const [errors, setErrors] = useState({ name: false });
    const [errorCulinary, setErrorCulinary] = useState({culinaryName: false})

    const onHandler = (e) => {
        const product = e.target.value;

        if (product.length < 20) {
            setErrors(state => ({ ...state, name: 'Your text should be at least 20 characters long!' }))
        } else {
            setErrors(state => ({ ...state, name: false }))
        }

        if (product.length < 5) {
            setErrorCulinary(state => ({ ...state, name: 'Your text should be at least 5 characters long!' }))
        } else {
            setErrorCulinary(state => ({ ...state, name: false }))
        }
    }

    return (
        <form className="contact_bg" onSubmit={onSubmit} method="POST">
            <div className="row">
                <div className="col-md-12">

                    <div className="col-md-12">
                        <label htmlFor="mushname" className='label'>Mushroom Name</label>
                        <input id="mushname" className="contactus" placeholder="Mushroom Name" type="text" name="title" defaultValue={mush?.title} />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="firstImage" className='label'>First Image</label>
                        <input id="firstImage" className="contactus" placeholder="Type Image URL" type="text" name="imageUrlOne" defaultValue={mush?.imageUrlOne} />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor='secondImage' className='label'>Second Image</label>
                        <input id="secondImage" className="contactus" placeholder="Type Image URL" type="text" name="imageUrlTwo" defaultValue={mush?.imageUrlTwo} />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="distribution">Distribution</label>

                        <textarea id="distribution" style={{ borderColor: errors.name ? 'red' : 'inherit' }} className="textarea" placeholder="Distribution summary" type="text" name="description" defaultValue={mush?.description} onBlur={onHandler}></textarea>
                        {errors.name && <span className='errtxt'>{errors.name}</span>}

                    </div>
                    <div className="col-md-12">
                        <label htmlFor="identification">Identification guide</label>

                        <textarea id="identification" style={{ borderColor: errors.name ? 'red' : 'inherit' }} className="textarea" placeholder="Identification guide summary" type="text" name="identification" defaultValue={mush?.identification} onBlur={onHandler}></textarea>
                        {errors.name && <span className='errtxt'>{errors.name}</span>}

                    </div>
                    <div className="col-md-12">
                        <label htmlFor="culinary">Culinary notes</label>

                        <textarea id="culinary" style={{ borderColor: errorCulinary.name ? 'red' : 'inherit' }} className="textarea" placeholder="Culinary Summary" type="text" name="culinary" defaultValue={mush?.culinary} onBlur={onHandler}></textarea>
                        {errorCulinary.name && <span className='errtxt'>{errorCulinary.name}</span>}

                    </div>
                    <div className="col-md-12">
                        <label htmlFor="mush">Type:  </label>
                        
                        {mush ? (
                            <select id="mush" className="select" type="select" name="mushType" value={mush.mushType} onChange={(e) => onSelected(e.target.value)}>

                                {types.map((x) => <option key={x.value} value={x.value} >{x.text}</option>)}

                            </select>
                        ) : (
                            <select id="mush" className="select" type="select" name="mushType">
                              <option value="edible">edible</option>
                               <option value="poison">poison</option>
                            </select>
                        )}

                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <button className="send" type="submit">Send</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Form;