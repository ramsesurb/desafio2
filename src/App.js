import { Header } from './components/Header/Header'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './components/contexts/CartProvider/CartProvider';
import Cart from './components/Cart/Cart';
import { Checkout } from './components/Checkout/Checkout';
import { Footer } from './components/Footer/Footer';
import {MainPage} from "./components/Main/Main"

function App() {

 

  return (
    
  <CartProvider>
    <BrowserRouter>

      <Header/>

      
      
       <Routes>
       <Route path='/' element={ <MainPage/> }/>
       <Route path='/productos' element={ <ItemListContainer/> }/>
       <Route path='/productos/:categoryId' element={<ItemListContainer/>} />
       <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
       <Route path="/cart" element={<Cart/>}/>
       <Route path="/Checkout" element={<Checkout/>}></Route>
      </Routes>
      <Footer/>

      </BrowserRouter>
  </CartProvider> 
     
    
    
  );
}

export default App;
