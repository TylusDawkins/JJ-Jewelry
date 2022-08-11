import axios from 'axios'
import { useState, useEffect} from 'react'

function App() {
    const [newForm, setNewForm] = useState({
        name: "",
        type: "",
        description:"",
        image:"",
        colors:[],
        band:''
      })
    

      const handleChange = (event) => {
        //copies the state into a new variable
        const newState = { ...newForm }
        //grabs the event target value
        newState[event.target.name] = event.target.value;
        //sets the form of the state 
        setNewForm(newState)
      }

      const handleSubmit = async (event) => {
        let newItem = {name :newForm.name, type: newForm.type, description: newForm.description, image: newForm.image, colors: newForm.colors, band: newForm.band}
        //prevents page from reloading
        event.preventDefault()
        //sends newForm to items
        await axios.post('http://localhost:3001/items/add/', newForm)
        //resets the form state
        setNewForm({
            name: "",
            type: "",
            description:"",
            image:"",
            colors:'',
            band:''
        })
      }

    return (
      <div>
          <form onSubmit={handleSubmit} onChange={handleChange}>
              <label>
                  Name:
                  <input type='text' name='name' onChange={handleChange}/>
                  type:
                  <input type='text' name='type' onChange={handleChange}/>
                  description:
                  <input type='text' name='description' onChange={handleChange}/>
                  image:
                  <input type='text' name='image' onChange={handleChange}/>
                  colors:
                  <input type='text' name='colors' onChange={handleChange}/> 
                  band:
                  <input type='text' name='band' onChange={handleChange}/>
                  <input type='submit' name="submit" onChange={handleChange}/>
              </label>
          </form>
      </div>
    );
  }
  export default App;
// axios.post('http://localhost:3001/items/add', {id: newForm.id, type: newForm.type, description: newForm.description, image: newForm.image, colors: newForm.colors, band: newForm.band})

// {id:'12',name:'test',type:'ring',description:'this is a test item',image:'someurl',colors:['red','yellow'],band:'silver}')

// axios.post('localhost:3001/items/add/{{e.id},{e.type},{e.description},{e.image},{e.colors},{e.band}})

//   id: {type: String, required: true},
//         name: {type: String, required: true},
//         type: {type: String, required: true},
//         description: {type: String, required: true},
//         image: {type: String, required: true},
//         colors: {type: Array, required: true},
//         band: {type: String, required: true},