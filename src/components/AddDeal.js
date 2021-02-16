import React,{useState} from 'react'

import Cities from '../data/cities'
import FoodType from '../data/foodtypes'
import Areas from '../data/areas'

import Swal from 'sweetalert2'


const EMPTYOBJ = {
    area: Areas[0].tag,
    city: Cities[0].tag,
    type: FoodType[0].tag,
    price: 400,
    desc: "",
    name: "",
    restaurantName: ""
}
function AddDeal() {

    const [formData,setFormData] = useState(EMPTYOBJ);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            // text: 'You will not be able to recover this imaginary file!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes!',
            cancelButtonText: 'No, I want to edit'
          }).then((result) => {
            if (result.value) {
                setFormData(EMPTYOBJ);
                Swal.fire({
                    title: "Success",
                    text: "We will review and add the deal shortly",
                    icon: "success",
                    timer: 3000,
                    timerProgressBar: true
                }
              )
            // For more information about handling dismissals please visit
            // https://sweetalert2.github.io/#handling-dismissals
            }
          })      
    }

    return (
        <div className="form-container">
            <h3 className="welcome-heading">Add A New Deal and Help the Foodie Community Grow</h3>
            <form autoComplete="off" onSubmit={handleSubmit}>
            <label htmlFor="city" className="form-item">Please enter the city</label>
                <select className="form-item" name="city" id="city" onChange={handleChange} value={formData.city}>
                {
                        Cities.map(type=>{
                            return <option value={type.tag}>{type.value}</option>
                        })
                }
                </select>
                <label htmlFor="area" className="form-item">Please enter the area</label>
                <select className="form-item" name="area" id="area" value={formData.area} onChange={handleChange}>
                {
                        Areas.map(type=>{
                            return <option value={type.tag}>{type.value}</option>
                        })
                }
                </select>
                <label htmlFor="FoodType" className="form-item">Enter the Type of Food</label>
                <select name="type" id="FoodType" value={formData.type} onChange={handleChange} className="form-item">
                    {
                       FoodType.map(type=>{
                            return <option value={type.tag}>{type.value}</option>
                        })
                    }
                </select>
                <label htmlFor="res-name" className="form-item">Restaurant Name</label>
                <input className="form-item" type="text" id= "res-name" name="restaurantName" value={formData.restaurantName} onChange={handleChange}/>
                <label className="form-item" htmlFor="name">Enter the food/deal name</label>
                <input className="form-item" type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
                <label className="form-item" htmlFor="price">Enter the Price</label>
                <input className="form-item" type="number" id="price" name="price" value={formData.price} onChange={handleChange}/>
                <label className="form-item" htmlFor="desc">Please enter any more details</label>
                <textarea className="form-item text-area" id="desc" name="desc" rows="4" cols="40" value={formData.desc} onChange={handleChange} />
                <button className="form-item form-button">Add</button>
            </form>
        </div>
    )
}

export default AddDeal
