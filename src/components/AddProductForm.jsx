import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import ProductForm from './ProductForm';

function AddProductForm(props) { 
    const handleSubmit = e => {
        e.preventDefault();
        const data = new FormData(e.target);
        const product = {
            name: data.get("name"),
            plant: data.get("plant"),
            origin: data.get("origin"),
            roast: data.get("roast"),
            type: data.get("type"),
            quantity: data.get("quantity"),
            price: data.get("price"),
            id: data.get("id") || v4()
        };
        props.addProduct(product);
    }

    return <ProductForm
        product={props.product}
        goToList={props.goToList}
        submitText={"Add Product"}
        handleSubmit={handleSubmit}
    />
}

AddProductForm.propTypes = {
    product: PropTypes.object,
    addProduct: PropTypes.func.isRequired,
    goToList: PropTypes.func.isRequired,
}

export default AddProductForm;