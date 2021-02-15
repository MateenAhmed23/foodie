import React,{useState} from 'react'


import Cities from '../data/cities'
import FoodType from '../data/foodtypes'
import Areas from '../data/areas'


import Swal from 'sweetalert2'




function FormFoodSelect() {


    const [city,setCity] = useState(Cities[0].tag);
    const [food,setFood] = useState(FoodType[0].tag);
    const [area,setArea] = useState(Areas[0].tag);


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
            <h3 className="welcome-heading">Welcome to Foodie</h3>
            <form onSubmit={handleSubmit}>
            <label htmlFor="city" className="form-item">Please enter the city</label>
                <select className="form-item" name="city" id="city" onChange={e=>{
                    setCity(e.target.value);
                }}>
                {
                        Cities.map(type=>{
                            return <option value={type.tag}>{type.value}</option>
                        })
                    }
                </select>
                <label htmlFor="area" className="form-item">Please enter the area</label>
                <select className="form-item" name="area" id="area" onChange={e=>{
                    setArea(e.target.value);
                }}>
                {
                        Areas.map(type=>{
                            return <option value={type.tag}>{type.value}</option>
                        })
                }
                </select>
                <label htmlFor="FoodType" className="form-item">What do you want to eat?</label>
                <select name="type" id="FoodType" onChange={e=>{
                    setFood(e.target.value);
                }} className="form-item">
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
