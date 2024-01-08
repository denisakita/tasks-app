import {useState} from "react";
import {useLocation} from "react-router-dom";

export const ProductList = () => {
    const [searchPrams, setSearchParams] = useState();
    console.log(searchPrams);

    const location = useLocation();
    console.log(location);


    return (
        <main>
            <div className="component">Product List</div>

        </main>
    )
}
