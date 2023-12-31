const Styles = {
    header: {
        e: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            lineHeight: 1
        },
        h1: {
            marginBottom: 0
        }
    },
    notification: {
        section: {
            width: '100%',
            height: 'auto',
            minHeight: '66px',
            border: '1px solid #999',
            display: 'flex',
            alignItems: 'center'
        },
        p: {
            paddingLeft: '1.2rem',
            paddingRight: '1.2rem'
        },
        pStrong: {
            paddingLeft: '1.2rem',
            fontFamily: 'Baumans',
            fontSize: '1.2em',
            fontWeight: 'bold'
        }
    },
    btnNavigation: {
        div: {
            position: 'fixed',
            top: '2rem',
            right: '2rem',
            display: 'flex',
            alignItems: 'center'
        },
        button: {
            margin: '0 0.6rem'
        }
    },
    productList: {
        productListing: {
            div: {
                width: '100%',
                height: '2.4rem',
                border: '1px solid #888',
                display: 'grid',
                gridTemplateColumns: '1fr 130px'
            },
            input: { width: '52px' },
            button: {
                width: '50px',
                height: '2.2rem',
                padding: 0,
                textAlign: 'center'
            }
        }
    },
    productDetails: {
        div: {
            display: 'grid',
            gridTemplateColumns: '1fr 3fr'
        },
        input: {
            paddingLeft: '1.2rem'
        }
    }
}

export default Styles;