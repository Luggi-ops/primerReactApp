import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar/';
import ItemListContainer from './containers/ItemListContainer/';
import ItemCount from './components/ItemCount/';
import CardComponent from './components/CardComponent/';

function App() {
  

  return (
    
    <div>
      <NavbarComponent />
      
      <ItemListContainer greeting={"Bienvenidos a nuestra tienda online!"}/>

      <CardComponent stock={5}/>

      <CardComponent stock={10}/>

      <CardComponent stock={0}/>

    </div>
  );
}

export default App;
