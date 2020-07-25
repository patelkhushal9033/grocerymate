
const getShoppingListDetailsById = state => id => {
    return state.shoppingLists.find(shoppingLists => shoppingLists.id == [id])
}

export default {
    getShoppingListDetailsById
}