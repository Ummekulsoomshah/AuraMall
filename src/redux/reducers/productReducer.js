import { ActionTypes } from "../constants/action-type"

const initialState = {
    products: [],
    cart: [],
    searchTerm: '',
    placeorder: false,
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload }
        case ActionTypes.ADD_TO_CART:
            return { ...state, cart: [...state.cart, payload] }
        case ActionTypes.REMOVE_FROM_CART:
            const index = state.cart.findIndex((item) => item.id === payload.id);
            if (index >= 0) {
                const newCart = [...state.cart];
                newCart.splice(index, 1);
                return {
                    ...state,
                    cart: newCart,
                };
            }
            return state;
        case ActionTypes.SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: payload,
            };
        case ActionTypes.SET_PLACE_ORDER:
            return {
                ...state,
                placeorder: payload,
            };

        default:
            return state
    }

}
export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload }
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state
    }
}
