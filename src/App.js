import { Header } from './components/Header/Header'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'



function App() {
  return (
    <div >
      <Header/>
      
      <ItemListContainer titulo={"Bienvenidos a mi tienda!"} />
      
      
    
    </div>
  );
}

export default App;
