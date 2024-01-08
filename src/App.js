import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {Home} from "./components/Home";
import {ProductList} from "./components/ProductList";
import {ProductDetails} from "./components/ProductDetails";
import {Contact} from "./components/Contact";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Admin} from "./components/Admin";

function App() {
    const user = false;
    return (
        <div className="App">
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="products" element={<ProductList/>}/>
                    <Route path="products/1001" element={<ProductDetails/>}/>
                    <Route path="contact" element={<Contact/>}></Route>
                    <Route path="/admin" element={user ? <Admin/> : <Navigate to="/"/>}/>
                </Routes>
            </main>

            <Footer/>
        </div>
    );
}

export default App;
