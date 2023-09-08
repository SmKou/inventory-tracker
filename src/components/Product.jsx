import PropTypes from 'prop-types'

function Product(props) {
    return <div className="product-listing" onClick={() => props.onSelect(props.id)}>
        <span>{props.name}</span>
        <span className="optional-listing">{props.origin}</span>
        <span className="optional-listing">{props.roast}</span>
        <span className="optional-listing">{props.type}</span>
        <span>{props.quantity > 0 ?
            props.quantity < 10 ? props.quantity + " lbs Almost empty" : props.quantity + " lbs"
            : "Out of stock"
        }</span>
        <span>{props.price > 0 ? '$' + props.price : "Not available"}</span>
        <form>
            <input name="decrement" type="number" defaultValue="1" />
            <input type="submit" value="sell" />
        </form>
    </div>
}

Product.propTypes = {
    name: PropTypes.string,
    origin: PropTypes.string,
    roast: PropTypes.string,
    type: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
    id: PropTypes.string,
}

export default Product;