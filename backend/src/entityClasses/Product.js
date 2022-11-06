class Product {
    constructor(name, brand, HCSType) {
        this.name = name;
        this.brand = brand;
        this.HCSType = HCSType;
    }

    // getter
    get getName() {
        return this.name;
    }

    // setter
    set setName(name) {
        this.name = name;
    }

    // getter
    get getBrand() {
        return this.brand;
    }

    // setter
    set setBrand(brand) {
        this.brand = brand;
    }

    // getter
    get getHCSType() {
        return this.HCSType;
    }

    // setter
    set setHCSType(HCSType) {
        this.HCSType = HCSType;
    }

}

export default Product