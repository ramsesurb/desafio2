import { Header } from './components/Header/Header'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';







function App() {


  return (
    <div >

      <BrowserRouter>

      <Header/>
      
       <Routes>
       <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
      </Routes>
      <ItemListContainer/>

      </BrowserRouter>
      
     
    
    </div>
  );
}

export default App;
