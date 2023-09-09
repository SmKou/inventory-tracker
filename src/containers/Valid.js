const Valid = {
    sellable: (qty, n) => {
        if (n > 1)
            return {
                status: false,
                error: "Invalid Quantity",
                message: `Cannot sell less than 1 lb.`
            }
        else if (n > qty)
            return {
                status: false,
                error: "Invalid Quantity",
                message: `${product.name} only has ${product.quantity} lbs left.`
            }
        else
            return { status: true }
    },
    enterable: (product) => {
        if (!product.name || !product.plant || !product.origin || !product.roast || !product.type || product.quantity < 0 || product.price < 1) {
            const invalid = {
                status: false,
                error: "Invalid Product Details",
                message: `Please fix the following error(s):\n`
            }
            for (const key of Object.keys(product)) {
                switch (key) {
                    case "quantity":
                        if (product[key] < 0)
                            invalid.message += `• Quantity cannot be less than 0.\n`;
                        break;
                    case "price":
                        if (product[key] < 1)
                            invalid.message += `• Cannot sell for less than 1 USD.\n`;
                        break;
                    default:
                        if (!product[key])
                            invalid.message += `• Products require a ${key}.`;
                        break;
                }
            }
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