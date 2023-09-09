import PropTypes from 'prop-types'
import ProductForm from './ProductForm'

function EditProductForm(props) {
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
            id: data.get("id")
        };
        props.editProduct(product);
    }
    
    return <ProductForm
        product={props.product}
        goToList={props.goToList}
        submitText={"Update Product"}
        handleSubmit={handleSubmit}
    />
}

EditProductForm.propTypes = {
    product: PropTypes.object.isRequired,
    editProduct: PropTypes.func.isRequired,
    goToList: PropTypes.func.isRequired
}

export default EditProductForm;