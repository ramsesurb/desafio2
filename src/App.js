import { Header } from './components/Header/Header'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';







function App() {


  return (
    <div >

      <BrowserRouter>

      <Header/>
      
      <ItemDetailContainer/>
      <ItemListContainer/>

      </BrowserRouter>
      
     
    
    </div>
  );
}

export default App;
