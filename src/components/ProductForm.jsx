import PropTypes from 'prop-types'
import Styles from '../assets/Styles'
import Store from '../containers/Store'
import ButtonNavigation from './ButtonNavigation'

function ProductForm(props) {
    const product = props.product;
    return <section>
        <ButtonNavigation buttons={[{
            buttonText: "Back to List",
            handleClick: props.goToList
        }]} />
        <form onSubmit={props.handleSubmit}>
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
    goToList: PropTypes.func,
    submitText: PropTypes.string,
    handleSubmit: PropTypes.func
}

export default ProductForm;