import {Route, Routes} from "react-router-dom";
import {Admin, Contact, ContactEu, ContactUs, Home, PageNotFound, ProductDetails, ProductList} from "../pages";

export const AllRoutes = () => {
    const user = false;
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="products" element={<ProductList/>}/>
                <Route path="products/:id" element={<ProductDetails/>}/>
                <Route path="contact" element={<Contact/>}>
                    <Route path="eu" element={<ContactEu/>}></Route>
                    <Route path="us" element={<ContactUs/>}></Route>
                </Route>

                <Route path="/admin" element={user ? <Admin/> : <PageNotFound/>}/>
                <Route path="*" element={<PageNotFound/>}/>}
            </Routes>
        </>
    )


}
