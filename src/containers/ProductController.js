import React from 'react';

class ProductController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'list',
            productList: [],
            selectedProduct: null
        }
    }

    setPage = (page) => this.setState({ page })
    decrementProduct = (id, n) => {
        const product = this.state.productList.filter(product => product.id === id)[0];
        if (n > product.quantity)
            return 0;
        product.quantity -= n;
        const list = this.state.productList.filter(product => product.id !== id).concat(product);
        this.setState({ productList: list })
        return 1;
    }
    addProduct(product) {
        const list = this.state.productList.concat(product);
        this.setState({
            productList: list,
            page: 'list'
        })
    }
    selectProduct(id) {
        const selected = this.state.productList.filter(product => product.id === id)[0];
        this.setState({
            selectedProduct: selected,
            page: 'view'
        })
    }
    editProduct(product) {
        const { productList, selectedProduct } = this.state;
        const list = productList.filter(product => product.id !== selectedProduct.id).concat(product);
        this.setState({
            productList: list,
            page: 'list',
            selectedProduct: null
        })
    }
    deleteProduct(id) {
        const list = this.state.productList.filter(product => product.id !== id);
        this.setState({
            productList: list,
            page: 'list'
        })
    }

    render() {
        switch (this.state.page) {
            case 'add':
                return <React.Fragment>
                    <AddProductForm onSubmit={this.addProduct} />
                </React.Fragment>
            case 'view':
                return <React.Fragment>
                    <ProductDetails product={this.state.selectedProduct} />
                </React.Fragment>
            case 'edit':
                return <React.Fragment>
                    <EditProductForm product={this.state.selectedProduct} onSubmit={this.editProduct} />
                </React.Fragment>
            default:
                return <React.Fragment>
                    <button className="add-btn" onClick={() => {
                        this.setState({page: 'add'})
                    }}>+</button>
                    <ProductList productList={this.state.productList} onSelect={this.selectProduct} onSellProduct={this.decrementProduct} />
                </React.Fragment>
        }
    }
}

export default ProductController;