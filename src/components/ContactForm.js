import React,{useState} from 'react'

import Swal from 'sweetalert2'

function ContactForm() {

    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[suggestion,setSuggestion] = useState("");    

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title:"Loading...",
            showConfirmButton:false,
            timer: 3000
        });
    }

    return (
        <div className="form-container">
            <h3 className="welcome-heading">COntact us to make our services better for you</h3>
            <form onSubmit={handleSubmit}>
                <label className="form-item" htmlFor="name">Name</label>
                <input className="form-item" value={name} onChange={(e)=>setName(e.target.value)} type="text"/>
                <label className="form-item" htmlFor="email">Email</label>
                <input className="form-item" value={email} onChange={(e)=>setEmail(e.target.value)} type="email"/>
                <label className="form-item" htmlFor="description">Please convey you issue/suggestion</label>
                <textarea className="form-item text-area" id="description" name="description" rows="4" cols="40" value={suggestion} onChange={(e)=>setSuggestion(e.target.value)}>It was a dark and stormy night... </textarea>
                <button className="form-item form-button">Enter</button>
            </form>
        </div>
    )
}

export default ContactForm
