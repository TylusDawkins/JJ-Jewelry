import './App.css';
import Nav from './Components/Nav'
import Shop from './Components/Shop'
import NewItem from './Components/NewItem'
import ItemDetails from './Components/ItemDetails'
import { Route, Routes, useNavigate } from 'react-router-dom'


function App() {
const contentful = require('contentful');

const script = document.createElement("script")

script.src = "https://cdn.jsdelivr.net/npm/contentful@latest/dist/contentful.browser.min.js"

console.log(contentful)

const client = contentful.createClient({
  space: 'u36i6vsxj8cq',
  accessToken: 'HJiNU_ONZmcf_CXF0FR5n0S1_qLs_sE1IUu3cJby1MM',
})
console.log(client)
client.getEntries().then(function (entries) {
  // log the title for all the entries that have it
  entries.items.forEach(function (entry) {
    console.log(entry)
    console.log(entry.fields)
    console.log(entry.fields.product)
    if (entry.fields.productName) {
      console.log(entry.fields.productName);
      console.log("update")
    }
  });
});



  return (
    <div className="App">
      <div className='Header'>
        <Nav/>
      </div>
      <div className='main'>
        <Routes>
          <Route path='shop' element={<Shop/>}/>
          <Route path='additem' element={<NewItem/>}/>
          <Route path='shop/:id' element={<ItemDetails/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
