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

    goToList = () => this.setState({ page: 'list' })
    sellProduct(product, n) {

    }
    goToAdd = () => this.setState({ page: 'add' })
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
    goToEdit = () => this.setState({ page: 'edit' })
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