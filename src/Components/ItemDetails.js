import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import './ItemDetails.css'

const ItemDetails = (props) => {
    
    const [items, setItems] = useState(null)
    const { id } = useParams();
    const [selectedItem, setSelectedItem] = useState(null);
    const [editForm, setEditForm] = useState({
      })

    const getItem = async() =>{
        const itemList = await axios.get(`http://localhost:3001/api/shop/${id}`)
        setSelectedItem(itemList.data.item)
        setEditForm({name: itemList.data.item.name,
            type: itemList.data.item.type,
            description:itemList.data.item.description,
            image:itemList.data.item.image,
            colors:itemList.data.item.colors,
            band:itemList.data.item.band,
            price:itemList.data.item.price})
      }
  
        
  const navigate = useNavigate();
 
 axios.post(`http://localhost:3001/shop/${id}`, editForm) 

  useEffect(async ()=>{
    getItem()
    console.log(items)
    },[])  
      const handleChange = (event) => {
        //copies the state into a new variable
        const newState = { ...editForm }
        //grabs the event target value
        newState[event.target.name] = event.target.value;
        //sets the form of the state 
        setEditForm(newState)
      }

    const handleSubmit = async (event) => {
      let newItem = {name :editForm.name, type: editForm.type, description:   editForm.description, image: editForm.image, colors: editForm.colors, band: editForm.band, price: editForm.price}
      event.preventDefault()
      await axios.post('http://localhost:3001/items/add/', editForm)
      }

    const submitUpdate = async (event) =>{
      event.preventDefault()
      axios.put(`http://localhost:3001/shop/${id}`, editForm) 

    }

    const deleteItem = () =>{
      axios.delete(`http://localhost:3001/items/${id}`)
      navigate(-1)
    }

    if (selectedItem){
        return  (
            <div className="details-main">
              <div className="detail-header">
                <img src={selectedItem.image} alt={selectedItem.name} id='img' />
                <div className="item-details">
                  <h1>{selectedItem.name}</h1>
                </div>
              </div>
              
                <p>{selectedItem.description}</p>
                
                <div>Price:{selectedItem.price}</div>
              
              
                <form onSubmit={submitUpdate}>
              <label>
                  Name:
                  <input type='text' name='name' onChange={handleChange} value={editForm.name} />
                  type:
                  <input type='text' name='type' onChange={handleChange} value={editForm.type}/>
                  description:
                  <input type='text' name='description' onChange={handleChange} value={editForm.description}/>
                  image:
                  <input type='text' name='image' onChange={handleChange} value={editForm.image}/>
                  colors:
                  <input type='text' name='colors' onChange={handleChange} value={editForm.colors}/> 
                  band:
                  <input type='text' name='band' onChange={handleChange} value={editForm.band}/>
                  <input type='submit' name="submit"/>
              </label>
          </form>
          <div className="buttons">
          <button onClick={deleteItem}>Delete</button>
          <div className="btn" onClick={() => navigate(-1)}>Back</div>
            </div>
            </div>
          )
    } else{
      return <div>This item ID no longer exists.</div>;  
    } 
};

export default ItemDetails;
