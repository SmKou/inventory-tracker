import PropTypes from 'prop-types'
import Styles from '../assets/Styles'
import Product from './Product'

function ProductList(props) {
    return <section>
        <div style={Styles.btnNavigation.div}>
            <button style={Styles.btnNavigation.button} onClick={props.goToAdd}>Add a Coffee</button>
        </div>
        <Product
            goToAdd={props.goToAdd}
            name="Product Name"
            plant="Plant"
            origin="Origin"
            roast="Roast"
            type="Type"
            quantity={-1}
            price={-1}
            id="product-header"
            key="product-header"
        />
        {props.productList.map((product) => <Product
            selectProduct={props.selectProduct}
            sellProduct={props.sellProduct}
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
    productList: PropTypes.array.isRequired,
    sellProduct: PropTypes.func.isRequired,
    selectProduct: PropTypes.func.isRequired,
    goToAdd: PropTypes.func.isRequired
}

export default ProductList;