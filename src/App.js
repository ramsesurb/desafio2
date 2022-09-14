import { Header } from './components/Header/Header'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './components/contexts/CartProvider/CartProvider';







function App() {

 

  return (
    
  <CartProvider>
    <BrowserRouter>

      <Header/>
      
       <Routes>
       <Route path='/' element={ <ItemListContainer/> }/>
       <Route path='/productos/:categoryId' element={<ItemListContainer/>} />
       <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
      </Routes>
      

      </BrowserRouter>
  </CartProvider> 
     
    
    
  );
}

export default App;
