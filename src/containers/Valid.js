const Valid = {
    sellable: (qty, n) => {
        if (qty === 0)
            return {
                status: false,
                error: "Invalid Quantity",
                message: "This product is out of stock."
            }
        else if (n < 1)
            return {
                status: false,
                error: "Invalid Quantity",
                message: `Cannot sell less than 1 lb.`
            }
        else if (n > qty)
            return {
                status: false,
                error: "Invalid Quantity",
                message: `Cannot sell more than ${qty} lbs.`
            }
        else
            return { status: true }
    },
    enterable: (product) => {
        if (!product.name || !product.plant || !product.origin || !product.roast || !product.type || product.quantity < 0 || product.price < 1) {
            const invalid = {
                status: false,
                error: "Invalid Product Details",
                message: "Required:"
            }
            const errors = [];
            for (const key of Object.keys(product)) {
                switch (key) {
                    case "quantity":
                        if (product[key] < 0)
                            errors.push("quantity > 0");
                        break;
                    case "price":
                        if (product[key] < 1)
                            errors.push("price > 0")
                        break;
                    default:
                        if (!product[key])
                            errors.push(key)
                        break;
                }
            }
            invalid.message += ' ' + errors.join(", ");
            return invalid;
        }
        else
            return { status: true }
    },
    exists: (list, id) => {
        for (const obj of list)
            if (obj.id === id)
                return { status: true }
        return {
            status: false,
            error: "Invalid Product",
            message: "Product does not exist."
        }
    },
    custom: function (params) {
        const aggregateErrors = {
            status: false,
            aggregate: []
        }
        for (const key of params.func)
            if (key === "custom")
                return {
                    status: false,
                    error: "Potential infinite loop",
                    message: "Cannot use self to validate input."
                }
            else {
                const validCheck = this[key](...params.ipt[key]);
                if (!validCheck.status)
                    aggregateErrors.aggregate.push(validCheck)
                    
            }
        if (aggregateErrors.aggregate.length === 0)
            return { status: true }
        else
            return aggregateErrors;
    }
}

/*
Valid.custom is an aggregate validation function. It takes a params object, containing func (array of function names taken from this valid object) and ipt (object with keys of function names and values of inputs for the function). If valid.custom encounters itself while looping through the func array, it will return a Potential infinite loop error.
*/

export default Valid;