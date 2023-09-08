import PropTypes from 'prop-types'
import Product from './Product'

function ProductList(props) {
    return <section className="product-list">
        <Product
            name="Product Name"
            origin="Origin"
            roast="Roast"
            type="Type"
            quantity={-1}
            price={-1}
            key="product-header"
        />
        {props.productList.map((product) => <Product
            onSelect={props.onSelect}
            onSubmit={props.onSellProduct}
            name={product.name}
            origin={product.origin}
            roast={product.roast}
            type={product.type}
            quantity={product.qty}
            price={product.price}
            id={product.id}
            key={product.id}
        />)}
    </section>
}

ProductList.propTypes = {
    productList: PropTypes.array,
    onSelect: PropTypes.func,
    onSellProduct: PropTypes.func
}

export default ProductList;