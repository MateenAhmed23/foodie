import React,{useState} from 'react'

import Cities from '../data/cities'
import FoodType from '../data/foodtypes'
import Areas from '../data/areas'

import Swal from 'sweetalert2'

function AddDeal() {

    const [city,setCity] = useState(Cities[0].tag);
    const [food,setFood] = useState(FoodType[0].tag);
    const [area,setArea] = useState(Areas[0].tag);
    const [restaurant,setRestaurant] = useState("");
    const [des,setDes] = useState("");
    const [price,setPrice] = useState(400);
    const [name,setName] = useState("");

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
                <label htmlFor="FoodType" className="form-item">Enter the Type of Food</label>
                <select name="type" id="FoodType" onChange={e=>{
                    setFood(e.target.value);
                }} className="form-item">
                    {
                       FoodType.map(type=>{
                            return <option value={type.tag}>{type.value}</option>
                        })
                    }
                </select>
                <label htmlFor="res-name" className="form-item">Restaurant Name</label>
                <input className="form-item" type="text" id= "res-name" value={restaurant} onChange={(e)=>setRestaurant(e.target.value)}/>
                <label className="form-item" htmlFor="name">Enter the food/deal name</label>
                <input className="form-item" type="text" id="name"value={name} onChange={e=>setName(e.target.value)}/>
                <label className="form-item" htmlFor="price">Enter the Price</label>
                <input className="form-item" type="number" id="price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                <label className="form-item" htmlFor="description">Please enter any more details</label>
                <textarea className="form-item" id="description" name="description" rows="4" cols="40" value={des} onChange={(e)=>setDes(e.target.value)}>It was a dark and stormy night... </textarea>
                <button className="form-item form-button">Add</button>
            </form>
        </div>
    )
}

export default AddDeal
