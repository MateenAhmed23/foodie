import React,{useState} from 'react'

import Swal from 'sweetalert2'


const EMPTYOBJ = {
    name: "",
    email: "",
    desc: ""
}
function ContactForm() {

    const [formData,setFormData] = useState(EMPTYOBJ);
    
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        console.log(formData);
        e.preventDefault();
        Swal.fire({
            title:"Submitted!",
            icon: "success",
            showConfirmButton:false,
            timer: 3000,
            timerProgressBar: true
        });

        setFormData(EMPTYOBJ);
    }

    return (
        <div className="form-container">
            <h3 className="welcome-heading">COntact us to make our services better for you</h3>
            <form onSubmit={handleSubmit}>
                <label className="form-item" htmlFor="name">Name</label>
                <input className="form-item" name= "name" value={formData.name} onChange={handleChange} type="text"/>
                <label className="form-item" htmlFor="email">Email</label>
                <input className="form-item" name= "email" value={formData.email} onChange={handleChange} type="email"/>
                <label className="form-item" htmlFor="description">Please convey you issue/suggestion</label>
                <textarea className="form-item text-area" id="description" name="desc" rows="4" cols="40" value={formData.desc} onChange={handleChange}>We will love your input! :)</textarea>
                <button className="form-item form-button">Enter</button>
            </form>
        </div>
    )
}

export default ContactForm
