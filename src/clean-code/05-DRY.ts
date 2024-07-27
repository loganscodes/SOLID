type Size = '' | 'S' | 'M' | 'L' | 'XL';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = ''
    ) { }

    //Evalua todo segun su tipado, sin agregar ninguna sola linea adicional, almenos que se agrege un boolean, por ejemplo
    isProductReady(): boolean {
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if ((<string><unknown>this[key]).length <= 0) throw Error(`${key} is empty`)
                    break;

                case 'number':
                    if ((<number><unknown>this[key] <= 0)) throw Error(`${key} is empty`)
                    break;

                default:
                    throw Error(`${typeof this[key]} is not valid`)
            }
        }
        return true
    }
    toString() {
        //No DRY
        // if (this.name.length <= 0) throw Error('Price is empty');
        // if (this.price <= 0) throw Error('Price is zero');
        // if (this.size.length <= 0) throw Error('Size is empty');

        this.isProductReady()

        return `${this.name} ${this.price} ${this.size}`
    }

}

(() => {
    const bluePants = new Product('Jeans', 20, 'L');
    console.log(bluePants.toString())
})();