import { useState } from 'react'
import PropTypes from 'prop-types'
import Styles from '../assets/Styles'
import '../assets/ProductDetails.css'
import ButtonNavigation from './ButtonNavigation'

const sellButtonStyle = () => ({
    ...Styles.sellProduct.button,
    width: '100%'
})

function ProductDetails(props) { 
    const [input, setInput] = useState(1);
    const { product } = props;
    return <section>
        <ButtonNavigation buttons={[
            { buttonText: "Back to List", handleClick: props.goToList },
            { buttonText: "Edit Details", handleClick: props.goToEdit },
            { buttonText: "Delete Product", handleClick: () => props.deleteProduct(product.id)}
        ]} />
        <h2>{product.name}</h2>
        <table>
            <tbody>
                <tr>
                    <th>Plant Species</th>
                    <td colSpan="2">{product.plant}</td>
                </tr>
                <tr>
                    <th>Country of Origin</th>
                    <td colSpan="2">{product.origin}</td>
                </tr>
                <tr>
                    <th>Roast</th>
                    <td colSpan="2">{product.roast}</td>
                </tr>
                <tr>
                    <th>Roast Type</th>
                    <td colSpan="2">{product.type}</td>
                </tr>
                <tr>
                    <th>Quantity</th>
                    <td colSpan="2">{product.quantity > 0 ?
                        `${product.quantity} lb${product.quantity > 1 ? 's' : ''} remaining`
                        : "Out of stock"
                    }</td>
                </tr>
                <tr>
                    <th>Price</th>
                    <td colSpan="2">{`$${product.price} per pound`}</td>
                </tr>
            </tbody>
        </table>
        <div>
            <input style={Styles.sellProduct.input} type="number" value={input} onInput={e => setInput(e.target.value) } />
            <button style={sellButtonStyle()} onClick={e => props.sellProduct(product.id, input)}>sell</button>
        </div>
    </section>
}

ProductDetails.propTypes = {
    product: PropTypes.object.isRequired,
    sellProduct: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired,
    goToEdit: PropTypes.func.isRequired,
    return: PropTypes.func.isRequired
}

export default ProductDetails;