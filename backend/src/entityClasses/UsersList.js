class UsersList {
    constructor(usersList) {
        this.usersList = usersList;    // [ { name: '', products: [] }, ... ]
    }

    createList (list) {
        this.usersList.push(list);
    }

    removeList(listName) {
        let updated = this.usersList.filter(el => el.name != listName);
        this.usersList = updated;
    }

    addProductToList(listName, productId) {
        let idx = this.usersList.findIndex(list => list.name == listName);
        this.usersList[idx].product.push(productId);
    }

    removeProductFromList(listName, productId) {
        let idx = this.usersList.findIndex(list => list.name == listName);
        let pdtIdx = this.usersList[idx].product.indexOf(productId);
        this.usersList[idx].product.splice(pdtIdx, 1);
    }

    // getter
    get getUsersList() {
        return this.usersList;
    }

    // setter
    set setUsersList(usersList) {
        this.usersList = usersList
    }


}

export default UsersList