import axios from 'axios'
import { useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import './shop.css'

function Shop() {
    
  const [items, setItems] = useState([])


  let navigate = useNavigate();
  const showItem = (item) => {
    navigate(`${item._id}`);
  };

  const getItems = async() =>{
    const itemList = await axios.get('http://localhost:3001/api/items')
    setItems(itemList.data.data)
  }

  useEffect(()=>{
    getItems()
  },[])
  
    return items ? (
      <div className="shop-main">
        <div className='welcome'>
          <p>Welcome! All of the items seen below are hand crafted locally in Las Vegas. If you want any custom items please see the Contact Us section!</p>
        </div>
        <div className='items'>
        {items.map((item, id) => (
        <div id={item._id} className="item-card" onClick={() => showItem(item)} key={item._id}>
          <img style={{ display: "block" }} src={item.image} alt={item.name} className='image' />
          <h3 className='card-text'>{item.name}</h3>
        </div>
      ))}
      </div>
      </div>
    ) : <h1>loading</h1>
  }
  
  export default Shop;
  