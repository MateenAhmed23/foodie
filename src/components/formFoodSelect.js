import React,{useState} from 'react'


import Cities from '../data/cities'
import FoodType from '../data/foodtypes'
import Areas from '../data/areas'
import {Axios} from './Axios'


import Swal from 'sweetalert2'



function FormFoodSelect() {


    const [formData,setFormData] = useState({
        area: 'DR',
        city: 'LHR',
        type: 'BG'
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        Swal.fire({
            title:"Loading...",
            showConfirmButton:false,
            timer: 3000
        });
        try{
            console.log("Going to get response");
            console.log(formData);
            const R = await Axios.get("/deals/all");
            console.log(R);
            const response = await Axios.post("/deals/specific", {data: formData});
            console.log("Got response")
            console.log(response);
            console.log(response.data,response.status);
            
        }catch(e){
            console.log("I am error")
            console.log(e);
        }
    }

    return (
        <div className="form-container">
            <h3 className="welcome-heading">Welcome to Foodie</h3>
            <form onSubmit={handleSubmit}>
            <label htmlFor="city" className="form-item">Please enter the city</label>
                <select className="form-item" name="city" id="city" onChange={handleChange}>
                {
                        Cities.map(type=>{
                            return <option value={type.tag}>{type.value}</option>
                        })
                    }
                </select>
                <label htmlFor="area" className="form-item">Please enter the area</label>
                <select className="form-item" name="area" id="area" onChange={handleChange}>
                {
                        Areas.map(type=>{
                            return <option value={type.tag}>{type.value}</option>
                        })
                }
                </select>
                <label htmlFor="FoodType" className="form-item">What do you want to eat?</label>
                <select name="type" id="FoodType" onChange={handleChange} className="form-item">
                    {
                        FoodType.map(type=>{
                            return <option value={type.tag}>{type.value}</option>
                        })
                    }
                </select>
                <button className="form-item form-button">Search</button>
            </form>
        </div>
    )
}

export default FormFoodSelect;
