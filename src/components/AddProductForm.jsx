import React from 'react'
import PropTypes from 'prop-types'
import ProductForm from './ProductForm';

function AddProductForm(props) { 
    return <ProductForm
        product={props.product}
        goToList={props.goToList}
        submitText={"Add Product"}
        onFormSubmit={props.addProduct}
    />
}

AddProductForm.propTypes = {
    product: PropTypes.object,
    addProduct: PropTypes.func.isRequired,
    goToList: PropTypes.func.isRequired,
}

export default AddProductForm;