import React from 'react'
import '../assets/Product.css'
import { useState } from 'react'
import PropTypes from 'prop-types'
import Styles from '../assets/Styles'

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

const productListingStyle = isProductHeader => isProductHeader ?
    ({
        ...Styles.productList.productListing.div,
        background: 'rgba(255, 255, 255, 0.1)',
        fontFamily: 'Baumans',
        fontSize: '1.3em'
    })
    : Styles.productList.productListing.div

function Product(props) {
    const [input, setInput] = useState(1);
    return <div className="product-listing" style={productListingStyle(props.id === 'product-header')}>
        <div className="listing-details" onClick={() => props.selectProduct(props.id)}>
            <span>{props.name}</span>
            <span className="optional-listing">{props.plant}</span>
            <span className="optional-listing">{props.origin}</span>
            <span className="optional-listing">{props.roast}</span>
            <span className="optional-listing">{props.type}</span>
            <span>{getQuantity(props.quantity)}</span>
            <span>{getPrice(props.price)}</span>
        </div>
        <span>{props.id === "product-header" ?
            <></>
            : props.quantity !== 0 ?
                <>
                    <input style={Styles.productList.productListing.input} type="number" value={input} onInput={e => setInput(e.target.value) } />
                    <button style={Styles.productList.productListing.button} onClick={e => props.sellProduct(props.id, input)}>sell</button>
                </>
                : <></>
        }
        </span>
    </div>
}

Product.propTypes = {
    selectProduct: PropTypes.func,
    sellProduct: PropTypes.func,
    name: PropTypes.string.isRequired,
    plant: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    roast: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
}

export default Product;