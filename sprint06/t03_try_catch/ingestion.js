module.exports = class Ingestion {
    products = [];

    constructor(typeOfFood, id) {
        this.typeOfFood = typeOfFood;
        this.id = id;
    }

    setProduct(product) {
        this.products.push(product);
    }

    getFromFridge(product) {
        this.products.forEach(i => {
            let p = this.products[i];
            if (p.name === product) {
                try {
                    p.check();
                }
                catch (e) {
                    e.message = `To many calories in ${product} for ${this.typeOfFood}`;
                    throw e;
                }
            }
        })
        
    }

    getProductInfo(product) {
        let result = {};
        for (let p of this.products) {
            if (p.name === product) {
                result.kcal = p.size;
                return result;
            }
        }
    }
}



