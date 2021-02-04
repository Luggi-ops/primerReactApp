import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import NavbarComponent from './components/navbar/';
import ItemListContainer from './containers/ItemListContainer/';
import FooterComponent from './components/Footer/';


function App() {
  

  return (
    
    <>
      <NavbarComponent />
      
      <ItemListContainer greeting={"Bienvenidos a nuestra tienda online!"}/> 

      <FooterComponent />

    </>
  );
}

export default App;
