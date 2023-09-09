import PropTypes from 'prop-types'
import ProductForm from './ProductForm'

function EditProductForm(props) {
    return <ProductForm
        product={props.product}
        goToList={props.goToList}
        submitText={"Update Product"}
        onFormSubmit={props.editProduct}
    />
}

EditProductForm.propTypes = {
    product: PropTypes.object.isRequired,
    editProduct: PropTypes.func.isRequired,
    goToList: PropTypes.func.isRequired
}

export default EditProductForm;