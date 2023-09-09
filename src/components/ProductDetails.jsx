import PropTypes from 'prop-types'

function ProductDetails(props) { }

ProductDetails.propTypes = {
    product: PropTypes.object.isRequired,
    sellProduct: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired,
    goToEdit: PropTypes.func.isRequired,
    return: PropTypes.func.isRequired
}

export default ProductDetails;