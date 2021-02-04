import logo from './logo.png';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import NavbarComponent from './components/navbar/';
import ItemListContainer from './containers/ItemListContainer/';



function App() {
  

  return (
    
    <div>
      <NavbarComponent />
      
      <ItemListContainer greeting={"Bienvenidos a nuestra tienda online!"}/>  

    </div>
  );
}

export default App;
