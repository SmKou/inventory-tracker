import { useState } from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import '../assets/ProductForm.css'
import Store from '../containers/Store'
import ButtonNavigation from './ButtonNavigation'

function ProductForm(props) {
    const product = props.product;
    const [name, setName] = useState(product ? product.name : '')
    const [plant, setPlant] = useState(product ? product.plant : '')
    const [origin, setOrigin] = useState(product ? product.origin : '')
    const [roast, setRoast] = useState(product ? product.roast : '')
    const [type, setType] = useState(product ? product.type : '')
    const [quantity, setQty] = useState(product ? product.quantity : 130)
    const [price, setPrice] = useState(product ? product.price : 1)
    const id = product ? product.id : ''

    const handleSubmit = e => {
        e.preventDefault();
        const product = { name, plant, origin, roast, type, quantity, price, id: id || v4() };
        props.onFormSubmit(product)
    }

    return <section>
        <ButtonNavigation buttons={[{
            buttonText: "Back to List",
            handleClick: props.goToList
        }]} />
        <form onSubmit={handleSubmit}>
            <input type="hidden" name="id" value={id} />
            <label>
                Product Name:
                <input name="name" value={name} onInput={e => setName(e.target.value)} />
            </label>
            <label>
                Plant Species:
                <select name="plant" value={plant} onChange={e => setPlant(e.target.value)}>
                    {Store.plant.map((plant) => <option value={plant}>{plant}</option>)}
                </select>
            </label>
            <label>
                Country of Origin:
                <input name="origin" value={origin} onInput={e => setOrigin(e.target.value)} />
            </label>
            <label>
                Roast:
                <select name="roast" value={roast} onChange={e => setRoast(e.target.value)}>
                    {Store.roast.map((roast) => <option value={roast}>{roast}</option>)}
                </select>
            </label>
            <label>
                Type:
                <select name="type" value={type} onChange={e => setType(e.target.value)}>
                    {Store.type.map((type) => <option value={type}>{type}</option>)}
                </select>
            </label>
            <label>
                Quantity:
                <input type="number" name="quantity" value={quantity} onInput={e => setQty(e.target.value)} />
            </label>
            <label>
                Price:
                <input type="number" name="price" value={price} onInput={e => setPrice(e.target.value)} />
            </label>
            <input type="submit" value={props.submitText} />
        </form>
    </section>
}

ProductForm.propTypes = {
    product: PropTypes.object,
    goToList: PropTypes.func.isRequired,
    submitText: PropTypes.string.isRequired,
    onFormSubmit: PropTypes.func.isRequired
}

export default ProductForm;