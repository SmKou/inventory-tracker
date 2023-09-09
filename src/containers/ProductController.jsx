import React from 'react';
import { useContext } from 'react'
import Store from '../containers/Store'
import Valid from '../containers/Valid'
import ProductList from '../components/ProductList'
import AddProductForm from '../components/AddProductForm'
import EditProductForm from '../components/EditProductForm'
import ProductDetails from '../components/ProductDetails'

class ProductController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'list',
            productList: Store(),
            selectedProduct: null
        }
    }

    goToList = () => this.setState({ page: 'list' })
    sellProduct(id, n) {
        const product = this.state.productList.filter(product => product.id === id)[0];
        const validCheck = Valid.sellable(product.quantity, n);
        if (validCheck.status) {
            product.quantity -= n;
            const list = this.state.productList.filter(product => product.id !== id).concat(product);
            this.setState({ productList: list })
            return {
                ...validCheck,
                success: "Product sold",
                message: `${product.name} sold for ${product.price * n} USD. Sold ${n} lbs.`
            }
        }
        else
            this.props.relayMessage(validCheck);
    }

    goToAdd = () => this.setState({ page: 'add' })
    addProduct(product) {
        const validCheck = Valid.enterable(product);
        if (validCheck.status) {
            const list = this.state.productList.concat(product);
            this.setState({
                productList: list,
                page: 'list'
            })
        }
        else
            this.props.relayMessage(validCheck);
    }

    selectProduct(id) {
        const selected = this.state.productList.filter(product => product.id === id)[0];
        this.setState({
            selectedProduct: selected,
            page: 'view'
        })
    }

    goToEdit = () => this.setState({ page: 'edit' })
    editProduct(product) {
        const validCheck = Valid.custom({
            func: ["exists", "enterable"],
            ipt: {
                exists: [this.state.productList, product.id],
                enterable: [product]
            }
        });
        if (validCheck.status) {
            const { productList, selectedProduct } = this.state;
            const list = productList.filter(product => product.id !== selectedProduct.id).concat(product);
            this.setState({
                productList: list,
                page: 'list',
                selectedProduct: null
            })
        }
        else
            this.props.relayMessage(validCheck);
    }

    deleteProduct(id) {
        const validCheck = Valid.exists(this.state.productList, id);
        if (validCheck.status) {
            const list = this.state.productList.filter(product => product.id !== id);
            this.setState({
                productList: list,
                page: 'list'
            })
        }
        else
            this.props.relayMessage(validCheck);
    }

    render() {
        switch (this.state.page) {
            case 'add':
                return <React.Fragment>
                    <AddProductForm
                        addProduct={this.addProduct}
                        return={this.goToList}
                    />
                </React.Fragment>
            case 'view':
                return <React.Fragment>
                    <ProductDetails
                        product={this.state.selectedProduct}
                        sellProduct={this.sellProduct}
                        deleteProduct={this.deleteProduct}
                        goToEdit={this.goToEdit}
                        return={this.goToList}
                    />
                </React.Fragment>
            case 'edit':
                return <React.Fragment>
                    <EditProductForm
                        product={this.state.selectedProduct}
                        editProduct={this.editProduct}
                        return={this.goToList}
                    />
                </React.Fragment>
            default:
                return <React.Fragment>
                    <ProductList
                        productList={this.state.productList}
                        sellProduct={this.sellProduct}
                        selectProduct={this.selectProduct}
                        goToAdd={this.goToAdd}
                    />
                </React.Fragment>
        }
    }
}

export default ProductController;