const GET_PRODUCTS = 'PRODUCT.GET_PRODUCTS'

const defaultState = {
    items: []
}

export const productReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}

export const setProducts = (products) => ({
    type: GET_PRODUCTS,
    payload: products
})