import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {Home} from "./components/Home";
import {ProductList} from "./components/ProductList";
import {ProductDetails} from "./components/ProductDetails";
import {Contact} from "./components/Contact";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Admin} from "./components/Admin";
import {PageNotFound} from "./components/PageNotFound";

function App() {
    const user = false;
    return (
        <div className="App">
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="products" element={<ProductList/>}/>
                    <Route path="products/:id" element={<ProductDetails/>}/>
                    <Route path="contact" element={<Contact/>}></Route>
                    <Route path="/admin" element={user ? <Admin/> : <PageNotFound/>}/>
                    <Route path="*" element={<PageNotFound/>}/>}
                </Routes>
            </main>

            <Footer/>
        </div>
    );
}

export default App;
