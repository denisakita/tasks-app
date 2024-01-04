import { ProductList } from './components/ProductList';
import './App.css';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <h1>Product List</h1>
            <ProductList />
            <Footer/>
        </div>
    );
}

export default App;
