import {useParams} from "react-router-dom";

export const ProductDetails = () => {

    const params = useParams();

    return (
        <div className="component"> Product {params.id} - Product Details</div>
    )
}
