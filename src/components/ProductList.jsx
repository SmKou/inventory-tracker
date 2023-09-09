import PropTypes from 'prop-types'
import Product from './Product'

function ProductList(props) {
    return <section className="product-list">
        <Product
            onPress={props.goToAdd}
            name="Product Name"
            plant="Plant"
            origin="Origin"
            roast="Roast"
            type="Type"
            quantity={-1}
            price={-1}
            key="product-header"
        />
        {props.productList.map((product) => <Product
            onSelect={props.selectProduct}
            onSubmit={props.sellProduct}
            name={product.name}
            plant={product.plant}
            origin={product.origin}
            roast={product.roast}
            type={product.type}
            quantity={product.quantity}
            price={product.price}
            id={product.id}
            key={product.id}
        />)}
    </section>
}

ProductList.propTypes = {
    productList: PropTypes.array,
    sellProduct: PropTypes.func,
    selectProduct: PropTypes.func,
    goToAdd: PropTypes.func
}

export default ProductList;