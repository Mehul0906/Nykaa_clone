
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';
import Footer  from './Components/Footer';
// import Product from './Components/Product';


function App() {
  return (
    <>
  <Navbar/>
    <AllRoutes/> 
    <Footer />
    {/* <Product /> */}
    </>
  );
}

export default App;
