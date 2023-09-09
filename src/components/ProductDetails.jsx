import { useState } from 'react'
import PropTypes from 'prop-types'
import Styles from '../assets/Styles'
import '../assets/ProductDetails.css'

function ProductDetails(props) { 
    const [input, setInput] = useState(1);
    const { product } = props;
    return <section>
        <div style={Styles.btnNavigation.div}>
            <button style={Styles.btnNavigation.button} onClick={props.goToList}>Back to List</button>
        </div>
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
                    <td colSpan="2">{`${product.quantity} lb${product.quantity > 1 ? 's': ''}`} remaining</td>
                </tr>
                <tr>
                    <th>Price</th>
                    <td colSpan="2">{`$${product.price} per pound`}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td>
                        <input className="sell-ipt" type="number" value={input} onInput={e => setInput(e.target.value) } />
                        <button className="sell-btn" onClick={e =>  props.sellProduct(props.id, input)}>sell</button>
                    </td>
                    <td><button onClick={props.goToEdit}>Edit Details</button></td>
                    <td><button onClick={() => props.deleteProduct(product.id)}>Delete Product</button></td>
                </tr>
            </tfoot>
        </table>
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