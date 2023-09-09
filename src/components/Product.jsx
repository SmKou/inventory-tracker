import PropTypes from 'prop-types'

const getQuantity = (qty) => {
    if (qty > 0)
        if (qty > 10)
            return `${qty} lbs`
        else
            return `${qty} lbs Almost empty!`
    else if (qty === 0)
        return "Out of Stock"
    else
        return "Quantity"
}

const getPrice = (price) => {
    if (price > 0)
        return `$${price}.00`
    else if (price === 0)
        return "Not available"
    else
        return "Price"
}



function Product(props) {
    const [productId, setId] = useState('');
    const decrementQty = (e, id) => {
        e.preventDefault();
        const data = new FormData(e.target);
        props.onSubmit(id, )
    }

    return <div className="product-listing" onClick={() => props.onSelect(props.id)}>
        <span>{props.name}</span>
        <span className="optional-listing">{props.plant}</span>
        <span className="optional-listing">{props.origin}</span>
        <span className="optional-listing">{props.roast}</span>
        <span className="optional-listing">{props.type}</span>
        <span>{getQuantity(props.quantity)}</span>
        <span>{getPrice(props.price)}</span>
        <form onSubmit={e => decrementQty(e, props.id)}>
            <input name="decrement" type="number" defaultValue="1" />
            <input type="submit" value="sell" />
        </form>
    </div>
}

Product.propTypes = {
    onSelect: PropTypes.func,
    onSubmit: PropTypes.func,
    name: PropTypes.string,
    plant: PropTypes.string,
    origin: PropTypes.string,
    roast: PropTypes.string,
    type: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
    id: PropTypes.string,
}

export default Product;