import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import Store from '../containers/Store'
import ButtonNavigation from './ButtonNavigation'

function ProductForm(props) {
    const handleSubmit = e => {
        e.preventDefault();
        const data = new FormData(e.target);
        const product = {
            name: data.get("name"),
            plant: data.get("plant"),
            origin: data.get("origin"),
            roast: data.get("roast"),
            type: data.get("type"),
            quantity: data.get("quantity"),
            price: data.get("price"),
            id: data.get("id") || v4()
        };
        props.onFormSubmit(product)
    }
    const product = props.product;

    return <section>
        <ButtonNavigation buttons={[{
            buttonText: "Back to List",
            handleClick: props.goToList
        }]} />
        <form onSubmit={handleSubmit}>
            <input type="hidden" name="id" value={product ? product.id : ''} />
            <label>
                Product Name:
                <input name="name" value={product ? product.name : ''} />
            </label>
            <label>
                Plant Species:
                <select name="plant" value={product ? product.plant : ''}>
                    {Store.plant.map((plant) => <option value={plant}>{plant}</option>)}
                </select>
            </label>
            <label>
                Country of Origin:
                <input name="origin" value={product ? product.origin : ''} />
            </label>
            <label>
                Roast:
                <select name="roast" value={product ? product.roast : ''}>
                    {Store.roast.map((roast) => <option value={roast}>{roast}</option>)}
                </select>
            </label>
            <label>
                Type:
                <select name="type" value={product ? product.type : ''}>
                    {Store.type.map((type) => <option value={type}>{type}</option>)}
                </select>
            </label>
            <label>
                Quantity:
                <input type="number" name="quantity" value={product ? product.quantity : 130} />
            </label>
            <label>
                Price:
                <input type="number" name="price" value={product ? product.price : 1} />
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