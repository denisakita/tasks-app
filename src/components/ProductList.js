import {useState} from "react"
import {useFetch} from "../hooks/useFetch";

export const ProductList = () => {
    // const [products, setProducts] = useState([]);
    const [url, setUrl] = useState("http://localhost:3000/products");
    const {data: products} = useFetch(url);

    // 3. fetch as a function outside useEffect

    // const fetchProducts = useCallback(
    //     async () => {
    //         const response = await fetch(url);
    //         const data = await response.json();
    //         setProducts(data);
    //     }, [url]
    // );

    // useEffect(() => {
    //     fetchProducts();
    // }, [fetchProducts]);

    // 2. fetch as a function inside useEffect

    // useEffect(() => {
    //         const fetchProducts = async () => {
    //             const response = await fetch(url);
    //             const data = await response.json();
    //             setProducts(data);
    //         }
    //         fetchProducts();
    //     }, [url]
    // );

    // 1. fetch inside useEffect

    // useEffect(() => {
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => setProducts(data));
    // }, [url]);


    return (
        <section>
            <div className="filter">
                <button onClick={() => setUrl("http://localhost:3000/products")}>All</button>
                <button onClick={() => setUrl("http://localhost:3000/products?in_stock=true")}>In Stock Only</button>
            </div>

            {products && products.map((product) => (
                <div className="card" key={product.id}>
                    <p className="id">{product.id}</p>
                    <p className="name">{product.name}</p>
                    <p className="info">
                        <span>${product.price}</span>
                        <span
                            className={product.in_stock ? "instock" : "unavailable"}>{product.in_stock ? "In Stock" : "Unavailable"}</span>
                    </p>
                </div>
            ))}
        </section>
    )
}
