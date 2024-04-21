// const { REMOVE_FROM_CART,} = require("../ActionsTypes");

const { ADD_TO_CART, REMOVE_FROM_CART, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } = require("../ActionsTypes");

export const Reducers2 = (state = [], action) => {
    switch (action.type) {

        case ADD_TO_WISHLIST:

            return [...state, action.payload];

        case REMOVE_FROM_WISHLIST:
            const deleteArray2 = state.filter((item, index) => {
                return index !== action.payload
            });
            return deleteArray2;

        default:
            return state;
    }
};
export default Reducers2; 