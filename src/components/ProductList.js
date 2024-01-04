import {useState} from "react"

export const ProductList = () => {

    const [url, setUrl] = useState("http://localhost:3000/products");


    return (
        <section>
            <div className="filter">
                <button onClick={() => setUrl("http://localhost:3000/products")}>All</button>
                <button onClick={() => setUrl("http://localhost:3000/products?in_stock=true")}>In Stock Only</button>
            </div>

        </section>
    )
}
